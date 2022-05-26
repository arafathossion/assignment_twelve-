import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../fierbase.init';

const AddProfile = () => {
    const navigate = useNavigate();
    const Swal = require('sweetalert2')
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = profile => {
        fetch('https://serene-hamlet-44786.herokuapp.com/profile', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
            .then(response => response.json())
            .then(data => {

                if (data.acknowledged === true) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(profile);

        navigate('/dashboard')
        reset();

    };
    return (
        <div className='flex items-center flex-col'>
            <h1>My Reviews</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-1 gap-4 w-11/12 md:w-1/3">


                <input {...register("displayName")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Enter Your Name' value={user?.displayName} required readOnly
                />
                <input {...register("email")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Enter Your Name' value={user?.email} required readOnly
                />
                <input {...register("image")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Enter Your Name' value={user?.photoURL} required readOnly
                />
                <input {...register("number")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Enter Your Phone Number' required
                />
                <div className='grid md:grid-cols-2 gap-6'>
                    <input {...register("collegeName")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your College Name' required
                    />
                    <input {...register("universityName")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your university Name' required
                    />
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                    <input {...register("division")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your division title' required
                    />
                    <input {...register("district")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your district Name' required
                    />
                </div>
                <input type="submit" value="Submit" className='my-custom-style btn bg-main text-teal-500 font-bold border-0 my-5' />
            </form>
        </div>
    );
};

export default AddProfile;