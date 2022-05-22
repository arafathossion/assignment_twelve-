import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../fierbase.init'

const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data?.email, data?.password)
    };

    let errorMessage;
    if (error || signInError) {

        errorMessage = <p>Error: {error.message}</p>
    }


    useEffect(() => {
        if (user || signInUser) {
            navigate(from, { replace: true });
        }
    }, [user, signInUser])

    return (
        <div className="flex items-center flex-col">




            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center flex-col lg:w-1/3">
                {/* register your input into the hook by invoking the "register" function */}


                {/* include validation with required or other standard HTML validation rules */}
                {/* <label htmlFor="">Email</label> */}
                <br />
                <input {...register("email", {
                    required: {
                        value: true,
                        message: 'required is ture'
                    },
                })} className="input my-custom-style bg-main w-full py-8 text-xl fill:bg-main placeholder:text-black placeholder:text-xl" placeholder='Enter Your Email' />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.email?.message}

                {/* <label htmlFor="">Password</label> */}
                <br />
                <input {...register("password", {
                    required: {
                        value: true,
                        message: "Choose Your Password"
                    },
                    minLength: {
                        value: 6,
                        message: "Must be one Character"
                    },
                    // pattern: {
                    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    //     message: "The string must contain at least 1 Uppercase,lowercase,special character,numeric  alphabetical character,must be eight characters or longer"
                    // }
                })} className="input my-custom-style bg-main w-full py-8 text-xl placeholder:text-black placeholder:text-xl" placeholder='Password' />

                <Link to='/signup' className='btn bg-main my-custom-style mt-10 px-36 h-14 rounded-full border-0 text-black text-lg hover:bg-main hover:text-red-800'>Toggle</Link>

                {errors.password?.message}
                <input type="submit" value="Sign In"
                    className='btn bg-main my-custom-style mt-10 px-36 h-14 rounded-full border-0 text-black text-lg hover:bg-main hover:text-red-800' />

            </form>












            <button onClick={() => signInWithGoogle()} className='btn bg-main my-custom-style mt-10 px-20 h-14 rounded-full border-0 text-black text-lg hover:bg-main hover:text-red-800'>Sign In With Google</button>
            {errorMessage}
        </div>
    );
};

export default SignIn;