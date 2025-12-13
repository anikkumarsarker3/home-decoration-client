import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const statusSteps = [
    'Assigned',
    'Planning Phase',
    'Materials Prepared',
    'On the Way',
    'Setup in Progress',
    'Completed'
];

const AssignProject = () => {
    const axiosSecure = useAxiosSecure();
    const { data = [], refetch } = useQuery({
        queryKey: ['decorator-projects'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorator/projects');
            return res.data;
        }
    });

    const updateStatus = async (id, status) => {
        await axiosSecure.patch(`/decorator/projects/${id}`, { status });
        refetch();
    };

    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">My Assigned Projects</h2>

            {data.map(project => (
                <div key={project._id} className="border p-4 rounded mb-3">
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm">📍 {project.location}</p>

                    <select
                        value={project.status}
                        onChange={e => updateStatus(project._id, e.target.value)}
                        className="select select-bordered w-full mt-2"
                    >
                        {statusSteps.map(step => (
                            <option key={step}>{step}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default AssignProject;