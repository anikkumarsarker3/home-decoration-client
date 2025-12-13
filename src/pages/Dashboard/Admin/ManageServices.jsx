import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageServices = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['manage-users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })
    console.log(users)
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageServices;