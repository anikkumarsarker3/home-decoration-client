import React from 'react';
import UpdateUserRoleModal from '../../Modal/UpdateUserRoleModal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast, ToastContainer } from 'react-toastify';

const SellerReqTable = ({ user }) => {
    // console.log(user);
    const axiosSecure = useAxiosSecure();
    const handleAcceptRole = () => {
        axiosSecure.patch('/users/role', { email: user.email, role: 'seller' })
            .then(() => {
                toast('Seller role accepted successfully!');
            })

    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 '>{user.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className=''>{user.status}</p>
            </td>
            <td className='px-5 btn py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={handleAcceptRole}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span className='relative'>Accept</span>
                </button>
            </td>
            <ToastContainer></ToastContainer>
        </tr>
    )
};
export default SellerReqTable;