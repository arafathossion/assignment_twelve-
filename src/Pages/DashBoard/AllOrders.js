import React from 'react';
import { useQuery } from 'react-query';

const AllOrders = () => {
    const Swal = require('sweetalert2')
    const url = `https://serene-hamlet-44786.herokuapp.com/orders`
    const { isLoading, error, data: allOrders, refetch } = useQuery('allOrder', () =>
        fetch(url)
            .then(res => res.json())
    )
    // console.log(allOrders)

    const handleSingleOrderDelete = _id => {
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
                const urls = `https://serene-hamlet-44786.herokuapp.com/order/${_id}`
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


    const handleUpdateStatus = _id => {
        fetch(`https://serene-hamlet-44786.herokuapp.com/updateStatus/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        console.log(_id)
        refetch();
    }



    return (
        <div>
            <h1>My Order</h1>

            {
                allOrders?.map(allOrder => <div className="grid grid-cols-12 gap-1 my-custom-style py-8 my-8 mx-1 items-center" key={allOrder?._id}>
                    <div className=" col-span-1">
                        <img src={allOrder?.img} alt={allOrder?.name} className='w-24 rounded-3xl h-24 block m-auto my-custom-style p-3' />
                    </div>
                    <div className='text-teal-500 font-semibold col-span-3 text-center'>
                        <h4>Id : {allOrder?._id}</h4>

                    </div>
                    <div className='text-teal-500 font-semibold col-span-4 text-center'>

                        <h4>Email : {allOrder?.email}</h4>
                    </div>

                    <div className='text-teal-500 font-semibold col-span-4 flex justify-between'>
                        {
                            allOrder?.paid ? <button className='btn bg-main text-teal-500 border-0 my-custom-style'>Paid</button> : <button className='btn bg-main text-teal-500 border-0 my-custom-style'>UnPaid</button>
                        }

                        {
                            allOrder?.paid ? '' : <button className='btn bg-main text-teal-500 border-0 my-custom-style' onClick={() => handleSingleOrderDelete(allOrder?._id)}>Delete</button>
                        }

                        {/* <label class="swap">
                            <input type="checkbox" />
                            
                            
                        </label> */}
                        {
                            allOrder?.pending ? <div class="swap-off bg-main text-teal-500 border-0 my-custom-style btn">shipped</div> : <div class="swap-on bg-main text-teal-500 border-0 my-custom-style btn" onClick={() => handleUpdateStatus(allOrder?._id)}>pending</div>
                        }
                    </div>


                </div>)
            }

        </div>
    );
};

export default AllOrders;