import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const TodaySchedule = () => {
    const axiosSecure = useAxiosSecure();
    const { data = [] } = useQuery({
        queryKey: ['today-schedule'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorator/today-schedule');
            return res.data;
        }
    });

    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>

            {data.length === 0 && <p>No jobs today</p>}

            {data.map(job => (
                <div key={job._id} className="border p-3 rounded mb-2">
                    <p className="font-medium">{job.name}</p>
                    <p className="text-sm">📍 {job.location}</p>
                </div>
            ))}
        </div>
    );
};

export default TodaySchedule;

