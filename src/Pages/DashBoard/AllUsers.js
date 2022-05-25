import { success } from 'daisyui/src/colors';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../fierbase.init';

const AllUsers = () => {
    const Swal = require('sweetalert2')
    const [user] = useAuthState(auth)
    const url = `http://localhost:5000/user`
    const { isLoading, error, data: allUsers, refetch } = useQuery('allUsers', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    const makeAdmin = email => {
        const urls = `http://localhost:5000/user/admin/${email}`;
        fetch(urls, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    Swal.fire(
                        'Error!',
                        "you can't make admin anyone",
                        'error'
                    )
                }
                return res.json()
            }
            )
            .then(data => {
                if (data?.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Now you are admin',
                        'success'
                    )
                }
                console.log(data)
            })
        refetch()
        console.log(email)
    }



    // console.log(allUsers)
    return (
        <div>
            {
                allUsers?.map(allUser => <div className="grid grid-cols-12 gap-1 my-custom-style py-8 my-8 mx-1 items-center" key={allUser?._id}>
                    {/* <div className='text-teal-500 font-semibold col-span-3 text-center'>
                        <h4>Id : {allUser?._id}</h4>

                    </div> */}
                    <div className='text-teal-500 font-semibold col-span-3 text-center'>
                        <h4>Id : {allUser?._id}</h4>

                    </div>
                    <div className='text-teal-500 font-semibold col-span-4 text-center'>

                        <h4>Email : {allUser?.email}</h4>
                    </div>

                    <div className='text-teal-500 font-semibold col-span-2 m-auto'>
                        {
                            allUser?.role ? <button
                                className='btn bg-main text-teal-500 border-0 my-custom-style'>Already Admin</button> : <button onClick={() => makeAdmin(allUser?.email)}
                                    className='btn bg-main text-teal-500 border-0 my-custom-style'>Make A Admin</button>
                        }
                    </div>

                    <div className='text-teal-500 font-semibold col-span-2 m-auto'>
                        <button className='btn bg-main text-teal-500 border-0 my-custom-style'>Remove User</button>
                    </div>


                </div>)
            }
        </div>
    );
};

export default AllUsers;