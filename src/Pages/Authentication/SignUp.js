import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fierbase.init';
import UserToken from '../../Hooks/UseToken';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const navigate = useNavigate();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
       await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data?.displayName});
    };
    
    // console.log(user?.user?.email,user?.user?.displayName);

    const [token] = UserToken(user)


    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [user])




    return (
        <div className="flex items-center flex-col">

            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center flex-col  lg:w-1/3">
                {/* register your input into the hook by invoking the "register" function */}
                {/* <label htmlFor="">Name</label> */}
                <br />
                <input {...register("displayName")} className="input my-custom-style bg-main w-full  py-8 text-xl placeholder:text-black placeholder:text-xl" placeholder='Enter Your UserName' />
                <br />

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
                })} className="input my-custom-style bg-main w-full py-8 text-xl fill:bg-main placeholder:text-black placeholder:text-xl" placeholder='Password' />
                {errors.password?.message}
                <Link to='/signin'
                    className='btn bg-main my-custom-style mt-10 px-36 h-14 rounded-full border-0 text-black text-lg hover:bg-main hover:text-red-800'>Toggle</Link>
                <input type="submit" value="Sign Up"
                    className='btn bg-main my-custom-style mt-10 px-36 h-14 rounded-full border-0 text-black text-lg hover:bg-main hover:text-red-800' />
            </form>

        </div>
    );
};

export default SignUp;