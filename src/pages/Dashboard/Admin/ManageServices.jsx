import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const ManageServices = () => {
    const axiosSecure = useAxiosSecure();
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['manage-decorators-services'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manage-decorators-services`)
            return res.data
        }
    })
    console.log(orders)
    const handleCancelOrder = async (id) => {
        await axiosSecure.delete(`/orders/${id}`)
        // return res.data
        refetch();
        toast("Successfully cancel");
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Service Location</th>
                        <th>Service Date</th>
                        <th>Service Status</th>
                        <th>Decorator Email</th>
                        <th>Customer Name(Email)</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.location}</td>
                            <td>{order.servideDate}</td>
                            <td>{order.status}</td>
                            <td>{order.assignedDecoratorEmail}</td>
                            <td><span className='font-bold'>{order.customerName}</span> ({order.customerEmail})</td>
                            <td>
                                <button onClick={() => handleCancelOrder(order._id)} className='btn bg-red-400'>Cancel</button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;