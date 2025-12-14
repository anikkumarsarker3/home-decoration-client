import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';

const ManageDecor = () => {
    const axiosSecure = useAxiosSecure();
    const { deleteUserAccount } = useAuth();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })
    console.log(users)
    const handleUserDelete = async (id) => {
        await axiosSecure.delete(`/users/delete-user/${id}`);
        alert('User deleted successfully')
        await deleteUserAccount();
    }
    const statusSteps = ['admin', 'decorator', 'user'];
    const updateUserRole = async (id, role) => {
        console.log(id, role);
        await axiosSecure.patch(`/users/role/${id}`, { role });
        refetch();
        toast.success('User role updated successfully');
    }
    const handleAccountStatus = async (id, status) => {
        console.log(id, status);
        if (status === 'available') {
            await axiosSecure.patch(`/users/account-status/${id}`, { accountStatus: 'disabled' });
        }
        else {
            await axiosSecure.patch(`/users/account-status/${id}`, { accountStatus: 'available' });
        }
        refetch();
        toast.success('User account status updated successfully');
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Account Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr key={index}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>

                                <select
                                    value={user.role}
                                    onChange={e => updateUserRole(user._id, e.target.value)}
                                    className="select select-bordered w-full mt-2"
                                >
                                    {
                                        statusSteps.map(step => (
                                            <option key={step}>{step}</option>
                                        ))
                                    }
                                </select>
                                {/* {user.role} */}
                            </td>
                            <td>{user.accountStatus || "available"}</td>
                            <th cllassName='flex gap-5'>
                                <button onClick={() => handleAccountStatus(user._id, user.accountStatus || "available")} className="btn">
                                    {user.accountStatus === 'disabled' ? 'Enable Account' : 'Disable Account'}
                                </button>
                                <button onClick={() => handleUserDelete(user._id)} className="btn m-3">Delete</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageDecor;