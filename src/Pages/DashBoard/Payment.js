import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../fierbase.init';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Components/Loading';
const stripePromise = loadStripe('pk_test_51L3Hl5HSv52aBrsGmV4NDLfcPrGlNtLt0CkdsX5MLYIMJq9BG59D5P1S3EyrRPjnLsOGBQOnk3ZSjwq8k2hgznpK00RGlrtX7f');

const Payment = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const url = `https://serene-hamlet-44786.herokuapp.com/payment/${id}`
    const { isLoading, data: singlePayment } = useQuery(['singlePayment', id], () =>
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
    const price = singlePayment?.price;
    // console.log(price)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Order Summary</h1>
            <h1>Order reference: {id}</h1>
            <div className='grid grid-cols-3 border border-red-500 w-1/2 items-center'>
                <img src={singlePayment?.img} alt="" className='w-14 h-14 ' />
                <div>
                    <h4>{singlePayment?.itemName}</h4>
                    <h4> *{singlePayment?.quantity}</h4>
                </div>
                <h4> ${singlePayment?.price}</h4>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm singlePayment={singlePayment} />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;