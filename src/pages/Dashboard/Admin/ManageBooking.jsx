import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();
    const { data: manageBook = [] } = useQuery({
        queryKey: ['manage-booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/manage-booking`)
            return res.data
        }
    })
    const { data: decor = [] } = useQuery({
        queryKey: ['all-decorators'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/decorators`)
            return res.data
        }
    })
    console.log(decor)
    const handleAssignDecorator = (id) => {

    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Service Name</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageBook.map((booking, i) => <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.customerName}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Find Decorator</button>
                                {/* <button className='btn'>Assign Decorator</button> */}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                decor.map((d, i) => <tr key={d._id}>
                                    <th>{i + 1}</th>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.status || "available"}</td>
                                    <td>
                                        <button onClick={() => handleAssignDecorator(d._id)} className='btn'>Assign</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ManageBooking;