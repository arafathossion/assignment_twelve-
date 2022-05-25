import React from 'react';
import { useQuery } from 'react-query';

const AllOrders = () => {
    const url = `http://localhost:5000/orders`
    const { isLoading, error, data: allOrders, refetch } = useQuery('allOrder', () =>
        fetch(url)
            .then(res => res.json())
    )
    // console.log(allOrders)

    const handleSingleOrderDelete = _id => {
        const urls = `http://localhost:5000/order/${_id}`
        fetch(urls, {
            method: 'DELETE', // or 'PUT'          
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        refetch()
    }
    return (
        <div>
            <h1>My Order</h1>

            {
                allOrders?.map(allOrder => <div className="grid grid-cols-12 gap-1 my-custom-style py-8 my-8 mx-1 items-center" key={allOrder?._id}>
                    <div className=" col-span-2">
                        <img src={allOrder?.img} alt={allOrder?.name} className='w-1/2 rounded-3xl h-24 block m-auto my-custom-style p-3' />
                    </div>
                    <div className='text-teal-500 font-semibold col-span-3 text-center'>
                        <h4>Id : {allOrder?._id}</h4>

                    </div>
                    <div className='text-teal-500 font-semibold col-span-4 text-center'>

                        <h4>Email : {allOrder?.email}</h4>
                    </div>

                    <div className='text-teal-500 font-semibold col-span-2 m-auto'>
                        <button className='btn bg-main text-teal-500 border-0 my-custom-style'>UnPaid</button>
                    </div>
                  
                    <div className='text-teal-500 font-semibold col-span-1'>
                        <button className='btn bg-main text-teal-500 border-0 my-custom-style' onClick={() => handleSingleOrderDelete(allOrder?._id)}>Delete</button>
                    </div>


                </div>)
            }

        </div>
    );
};

export default AllOrders;