import React, { useMemo, useState, useEffect } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const ManageServices = () => {
    const axiosSecure = useAxiosSecure();

    const [statusFilter, setStatusFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('latest'); // latest | oldest
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10); // items per page
    const [totalPages, setTotalPages] = useState(1);

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['manage-decorators-services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manage-decorators-services');
            return res.data;
        }
    });

    const handleCancelOrder = async (id) => {
        await axiosSecure.delete(`/orders/${id}`);
        refetch();
        toast.success('Successfully cancelled');
    };

    // ✅ Filter & Sort logic
    const filteredAndSortedOrders = useMemo(() => {
        let result = [...orders];
        // Filter by status
        if (statusFilter !== 'all') {
            result = result.filter(order => order.status === statusFilter);
        }

        // Sort by service date
        result.sort((a, b) => {
            const dateA = new Date(a.servideDate);
            const dateB = new Date(b.servideDate);
            return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
        });

        return result;
    }, [orders, statusFilter, sortOrder]);

    // Pagination logic
    const paginatedOrders = useMemo(() => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        return filteredAndSortedOrders.slice(startIndex, endIndex);
    }, [filteredAndSortedOrders, currentPage, limit]);

    useEffect(() => {
        const pages = Math.ceil(filteredAndSortedOrders.length / limit);
        setTotalPages(pages || 1);
        if (currentPage > pages) setCurrentPage(1); // reset if currentPage > total pages
    }, [currentPage, filteredAndSortedOrders, limit]);

    return (
        <div className="overflow-x-auto">
            <div className="mt-5 mx-auto max-w-7xl flex flex-wrap gap-4 justify-between">

                {/* Status Filter */}
                <select
                    className="select select-bordered"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Planning Phase">Planning Phase</option>
                    <option value="Materials Prepared">Materials Prepared</option>
                    <option value="On the Way">On the Way to Venue</option>
                    <option value="Setup in Progress">Setup in Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                {/* Date Sort */}
                <select
                    className="select select-bordered"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="latest">Latest Date</option>
                    <option value="oldest">Oldest Date</option>
                </select>
            </div>

            <table className="table table-zebra mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Decorator Email</th>
                        <th>Customer</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedOrders.map((order, index) => (
                            <tr key={order._id}>
                                <th>{(currentPage - 1) * limit + index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.location}</td>
                                <td>{order.servideDate}</td>
                                <td className="capitalize">{order.status}</td>
                                <td>{order.assignedDecoratorEmail}</td>
                                <td>
                                    <span className="font-bold">{order.customerName}</span> ({order.customerEmail})
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleCancelOrder(order._id)}
                                        className="btn btn-sm bg-red-400 text-white"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-2 mt-4">
                <button
                    className="btn btn-sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="btn btn-sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ManageServices;
