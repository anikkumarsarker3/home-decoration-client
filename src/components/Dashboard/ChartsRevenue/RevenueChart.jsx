import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const RevenueChart = () => {
    const axiosSecure = useAxiosSecure();
    const { data = [] } = useQuery({
        queryKey: ['revenue'],
        queryFn: async () => {
            const res = await axiosSecure.get('/revenue');
            return res.data;
        }
    });

    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue ($)</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} fill="#6366f1">
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;
