import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    // /stripe/user-transactions/:email
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: transation = [] } = useQuery({
        queryKey: ['transation'],
        queryFn: async () => {
            const res = await axiosSecure.get(`stripe/user-transactions/${user?.email}`)
            return res.data
        }
    })
    console.log(transation)
    return (
        <div className="overflow-x-auto">
            <h3 className='text-center text-3xl font-bold mt-3'>Latest Five Transaction</h3>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>transactionId</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transation.map((t, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{t.serviceName}</td>
                            <td>{t.transactionId}</td>
                            <td>{t.amount}</td>
                            <td>
                                {new Date(t.createdAt * 1000).toLocaleDateString('en-US')}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;