import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { item, resalePrice, location, client,email,phone } = booking;

    return (
        <div className='my-10'>
        <h3 className="text-3xl font-bold text-center mt-40">Payment Details</h3>
        <div className='border border-slate-200 shadow-2xl w-1/2 mx-auto mt-2 p-4 text-center bg-gray-200'>
        <p className='font-semibold'>Client Name: {client}</p>
        <p className='font-semibold'>Email: {email}</p>
        <p className='font-semibold'>Contact: {phone}</p>
        <p className='font-semibold'>Location: {location}</p>
        <p className='font-semibold'>Item: {item}</p>
        <p className='font-semibold'>Price: ${resalePrice}</p>
        <div className='w-96 my-10 mx-24'>
        <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
        </div>
        </div>
    </div>
    );
};

export default Payment;