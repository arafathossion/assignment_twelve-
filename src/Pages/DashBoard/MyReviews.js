import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../fierbase.init';

const MyReviews = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = review => {
        fetch('http://localhost:5000/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        console.log(review);
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
                <input {...register("image")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Enter Your Name' value={user?.photoURL} required readOnly
                />
                <div className='grid md:grid-cols-2 gap-6'>
                    <input {...register("company")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your Company Name' required
                    />
                    <input {...register("designation")}
                        className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                        placeholder='Your designation' required
                    />
                </div>
                <input {...register("title")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Your review title' required
                />
                <input {...register("rating")}
                    className="my-custom-style input bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='give us rating between 1 to 5' required
                />
                <textarea {...register("about")}
                    className="my-custom-style textarea bg-main mt-5 text-md text-teal-500 font-semibold capitalize placeholder:text-md placeholder:text-teal-500 placeholder:font-semibold placeholder:capitalize"
                    placeholder='Your review' required
                />
                <input type="submit" value="Submit" className='my-custom-style btn bg-main text-teal-500 font-bold border-0 my-5' />
            </form>
        </div>
    );
};

export default MyReviews;