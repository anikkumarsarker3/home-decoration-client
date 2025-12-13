import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const colors = ['#6366f1', '#22c55e', '#f97316', '#ec4899', '#0ea5e9'];

const BookingHistogram = ({ data }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Bookings Histogram</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="service" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bookings" barSize={40}>
                        {data?.map((entry, index) => (
                            <Cell key={index} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BookingHistogram;
