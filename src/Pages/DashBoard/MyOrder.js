import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fierbase.init';

const MyOrder = () => {
    const Swal = require('sweetalert2')
    const navigate = useNavigate();
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
                localStorage.removeItem('accessToken');
                navigate('/home')
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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
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
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                refetch()
            }
        })
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
                        <h4>Price : {myorder?.price}</h4>
                    </div>
                    <div className='text-teal-500 font-semibold flex col-span-2 justify-between'>
                        {
                            myorder?.paid ? <span className='btn bg-main text-teal-500 my-custom-style border-0'>Paid</span> :
                                <Link to={`/dashboard/payment/${myorder?._id}`}>
                                    <button className='btn bg-main text-red-500 my-custom-style border-0'
                                    >Pay</button>
                                </Link>
                        }
                        
                       {
                           myorder?.paid ? '':  <button className='btn bg-main text-red-500 my-custom-style border-0' 
                           onClick={() => handleMyOrderDelete(myorder?._id)}>Delete</button>
                       }
                    </div>
                    <div className='text-teal-500 font-semibold col-span-4'>
                        <h4>Transaction Id : {myorder?.transactionId}</h4>
                    </div>

                </div>)
            }

        </div>
    );
};

export default MyOrder;