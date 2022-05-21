import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../fierbase.init';

const SignUp = () => {
    const navigate = useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data?.email, data?.password)
    };


    useEffect(() =>{
        if(user){
            navigate('/')
          }
    },[user])

    


    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                {/* <label htmlFor="">Name</label> */}
                <br />
                <input defaultValue="test" {...register("name")} />
                <br />

                {/* include validation with required or other standard HTML validation rules */}
                {/* <label htmlFor="">Email</label> */}
                <br />
                <input {...register("email", {
                    required: {
                        value: true,
                        message: 'required is ture'
                    },
                })} />
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
                })} />
                {errors.password?.message}
                <input type="submit" />
            </form>
            <Link to='/signin'>Toggle</Link>
        </div>
    );
};

export default SignUp;