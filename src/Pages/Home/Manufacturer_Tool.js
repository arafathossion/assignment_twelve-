import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../fierbase.init';
// ES6 Modules or TypeScript
// import Swal from 'sweetalert2'



const Manufacturer_Tool = () => {
    const Swal = require('sweetalert2')
    const [getValue, setGetValue] = useState();
    const [user] = useAuthState(auth);
    const { _id } = useParams();
    const url = `http://localhost:5000/tools/${_id}`
    const { isLoading, data: tool } = useQuery('singleTool', () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const quantity = e.target.quantity.value;
        const price = de;
        const mQuantity = parseInt(tool?.minOrderQuantity);
        const img = tool?.picture;
        const maxQuantity = parseInt(tool?.quantity);
        if (quantity < mQuantity || quantity > maxQuantity) {
            Swal.fire({
                title: 'Error!',
                text: `This Error From On Submit.
                Please Order Between ${tool?.minOrderQuantity} && ${tool?.quantity} `,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        else {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
            e.target.reset();
        }
        const order = { name, email, quantity, price, img }


        fetch('http://localhost:5000/order', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // console.log(order)
    }
    // Submit Form For Place Order




    
    const handleBlur = (e) => {
        const orderQuantity = e.target.value;
        const mQuantity = parseInt(tool?.minOrderQuantity);
        const maxQuantity = parseInt(tool?.quantity);
        if (orderQuantity < mQuantity || orderQuantity > maxQuantity) {
            Swal.fire({
                title: 'Error!',
                text: `Please Order Between ${tool?.minOrderQuantity} && ${tool?.quantity} `,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        setGetValue(orderQuantity)

    }
    // Getting User Order Quantity

    // console.log(getValue)



    const pain = () => {
        const cprice = parseInt(tool?.balance);
        const oQuantity = parseInt(getValue);
        const mQuantity = parseInt(tool?.minOrderQuantity);
        const maxQuantity = parseInt(tool?.quantity);
        if (oQuantity > 0 && oQuantity > mQuantity && oQuantity < maxQuantity) {
            const a = parseInt(getValue) * parseInt(cprice);
            return a
        }
    }
    const de = pain();
    // Calculate Single Order Price








    const mQuantity = parseInt(tool?.minOrderQuantity);
    const maxQuantity = parseInt(tool?.quantity)
    return (
        <div className='px-14 grid sm:grid-cols-1 md:grid-cols-3 gap-5'>
            <div>
                <img src={tool?.picture} alt="Tool" />
                <h4 className='text-lg font-serif text-[rgba(0,0,0,.5)] pt-8'> {tool?.about}</h4>
            </div>
            <div>
                <h1 className='text-2xl font-medium text-teal-500'>Product Name : {tool?.itemName}</h1>
                <div className='grid md:grid-cols-3 gap-14'>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium col-span-2'>
                        Min Order Quantity
                    </span>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium'>
                        {tool?.minOrderQuantity}
                    </span>
                </div>
                <div className='grid md:grid-cols-3 gap-14'>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium col-span-2'>
                        Available  Quantity
                    </span>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium'>
                        {tool?.quantity}
                    </span>
                </div>
                <div className='grid md:grid-cols-3 gap-14'>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium col-span-2'>
                        Single Quantity Price
                    </span>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium'>
                        {tool?.balance}
                    </span>
                </div>
                <div className='grid md:grid-cols-3 gap-14'>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium col-span-2'>
                        Order Price
                    </span>
                    <span className='my-custom-style inline-block p-5 my-5 text-teal-500 font-medium'>
                        {de}
                    </span>
                </div>



            </div>
            <form onSubmit={handleFormSubmit} className="grid md:grid-cols-1 pl-10 border border-black">
                <input type="text" name="name" id="userName"
                    value={user?.displayName} readOnly

                    className='input bg-main 
                 w-11/12 my-5 my-custom-style text-lg text-teal-500 font-semibold uppercase'/>


                <input type="text" name="email" id="userEmail"
                    value={user?.email} readOnly

                    className='input bg-main 
                 w-11/12 my-5 my-custom-style text-lg text-teal-500 font-semibold' />



                <label htmlFor="quantity" className={`${(mQuantity < parseInt(getValue) < maxQuantity) ? 'text-red-500' : 'hidden'}`} readOnly>Order between {tool?.minOrderQuantity} and {tool?.quantity}</label>
                <input type="number"
                    id="quantity"
                    name="quantity"
                    onBlur={handleBlur} required

                    className='input bg-main  w-11/12 my-5 
                my-custom-style text-md text-teal-500 font-semibold uppercase
                placeholder:text-teal-500 placeholder:text-md placeholder:font-bold'
                    placeholder={`Order Between ${tool.minOrderQuantity} To ${tool.quantity}`} />

                {/* <label htmlFor="orderPrice">Order Amount</label>
                <input type="number"
                    id="orderPrice"
                    name="orderPrice"
                    value={de}
                    

                    className='input bg-main  w-11/12 my-5 
                my-custom-style text-md text-teal-500 font-semibold uppercase
                placeholder:text-teal-500 placeholder:text-md placeholder:font-bold'
                /> */}

                {/* <input type="submit"  className="w-11/12 my-custom-style btn bg-main text-teal-500 my-6 border-0">dfdf</input> */}
                <input type="submit" value="Order" className='w-11/12 my-custom-style btn bg-main text-teal-500 my-6 border-0' />
            </form>

        </div>
    );
};

export default Manufacturer_Tool;