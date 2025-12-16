import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();
    const { data: manageBook = [], refetch } = useQuery({
        queryKey: ['manage-booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders/manage-booking`);
            return res.data;
        }
    });

    const { data: decor = [] } = useQuery({
        queryKey: ['all-decorators'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/decorators`);
            return res.data;
        }
    });

    // ✅ State to store the current booking ID
    const [currentBookingId, setCurrentBookingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (bookingId) => {
        setCurrentBookingId(bookingId);
        setIsModalOpen(true);
    };

    const handleAssignDecorator = async (decoratorEmail) => {
        // console.log('Assigning decorator:', decoratorEmail, 'to booking ID:', currentBookingId);
        if (!currentBookingId) return;
        await axiosSecure.patch('/orders/assign', {
            orderId: currentBookingId,
            assignedDecoratorEmail: decoratorEmail,
        });
        refetch();
        setIsModalOpen(false);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
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
                    {manageBook.map((booking, i) => (
                        <tr key={booking._id}>
                            <th>{i + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.customerName}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button
                                    className="btn"
                                    onClick={() => handleOpenModal(booking._id)}
                                >
                                    Find Decorator
                                </button>
                                {/* You can add another button for a different action and pass booking._id too */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">
                            Assign Decorator to Booking ID: {currentBookingId}
                        </h3>
                        <table className="table table-zebra">
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
                                {decor.map((d, i) => (
                                    <tr key={d._id}>
                                        <th>{i + 1}</th>
                                        <td>{d.name}</td>
                                        <td>{d.email}</td>
                                        <td>{d.status || 'available'}</td>
                                        <td>
                                            <button
                                                className="btn"
                                                onClick={() => handleAssignDecorator(d.email)}
                                            >
                                                Assign
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="modal-action">
                            <button className="btn" onClick={() => setIsModalOpen(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageBooking;
