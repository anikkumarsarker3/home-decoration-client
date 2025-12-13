import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const Payment = () => {
    const [searchParams] = useSearchParams()
    const [paymetInfo, setPaymentInfo] = useState(null)
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.post(`/payment-success?session_id=${sessionId}`)
            .then((res) => {
                console.log(res.data)
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                })
            })
    }, [sessionId])
    console.log(sessionId)
    return (
        <div className='text-center mt-10'>
            <h2 className='font-bold text-3xl'>Payment successfully</h2>
            <p>Your TransAction : {paymetInfo?.transactionId}</p>
        </div>
    );
};

export default Payment;