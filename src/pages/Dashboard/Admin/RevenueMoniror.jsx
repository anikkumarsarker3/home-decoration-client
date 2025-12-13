import React from 'react';
import BookingHistogram from '../../../components/Dashboard/ChartsRevenue/BookingHistogram';
import RevenueChart from '../../../components/Dashboard/ChartsRevenue/RevenueChart';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const RevenueMoniror = () => {
    const axiosSecure = useAxiosSecure();
    const { data = [] } = useQuery({
        queryKey: ['service-demand'],
        queryFn: async () => {
            const res = await axiosSecure.get('/service-demand');
            return res.data;
        }
    });
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Revenue & Analytics</h1>

            <RevenueChart />
            <BookingHistogram data={data} />
        </div>
    );
};

export default RevenueMoniror;