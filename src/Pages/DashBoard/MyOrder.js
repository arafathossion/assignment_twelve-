import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../fierbase.init';
import Loading from '../../Components/Loading'

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/myorder?email=${user?.email}`
    const { isLoading, error, data: myOrders, refetch } = useQuery('myOrder', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
            }
            return res.json()
        })

    )
    // {
    //      if (res.status === 401 || res.status === 403) {
    //         signOut(auth);
    //        localStorage.removeItem('accessToken')
    //     }
    // }
    const handleMyOrderDelete = _id => {
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






    // console.log(Array.prototype.reverse.call(myOrders))
    return (
        <div>
            <h1>My Order</h1>

            {
                myOrders?.map(myorder => <div className="grid grid-cols-12 gap-1 my-custom-style py-4 my-6 mx-1 items-center">
                    <div className="">
                        <img src={myorder?.img} alt="Order Image" className='' />
                    </div>
                    <div className='text-teal-500 font-semibold col-span-3 text-center'>
                        <h4>Id : {myorder?._id}</h4>
                    </div>
                    <div className='text-teal-500 font-semibold col-span-2'>
                        <h4>Quantity : {myorder?.quantity}</h4>
                        {/* </div>
                <div className='text-teal-500 font-semibold col-span-1'> */}
                        <h4>Price : {myorder?.price}</h4>
                    </div>
                    <div className='text-teal-500 font-semibold flex col-span-2 border border-red-500 justify-between'>
                        <button className='btn bg-main'>Pay</button>
                        {/* </div>
                <div className='text-teal-500 font-semibold'>  */}
                        <button className='btn bg-main' onClick={() => handleMyOrderDelete(myorder?._id)}>Delete</button>
                    </div>
                    <div className='text-teal-500 font-semibold col-span-2'>
                        <h4>Transaction Id :</h4>
                    </div>

                </div>)
            }

        </div>
    );
};

export default MyOrder;