import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const EarningsSummary = () => {
    const axiosSecure = useAxiosSecure();
    const { data = {} } = useQuery({
        queryKey: ['decorator-earnings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorator/earnings');
            return res.data;
        }
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-4 rounded-xl">
                <p>Total Earnings</p>
                <h2 className="text-2xl font-bold">৳ {data.total}</h2>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl">
                <p>Completed</p>
                <h2 className="text-2xl font-bold">{data.completed}</h2>
            </div>

            <div className="bg-orange-100 p-4 rounded-xl">
                <p>Pending</p>
                <h2 className="text-2xl font-bold">{data.pending}</h2>
            </div>
        </div>
    );
};

export default EarningsSummary;
