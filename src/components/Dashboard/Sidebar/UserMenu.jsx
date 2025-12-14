import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { NavLink } from 'react-router';

const UserMenu = () => {
    return (
        <nav className='flex flex-col justify-center items-center'>
            {/* User */}
            <NavLink to='/dashboard/my-booking' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <FaBookmark className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Booking</span>
            </NavLink>
            <NavLink to='/dashboard/payment-history' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <MdPayment className='w-5 h-5' />
                <span className='mx-4 font-medium'>Payment History</span>
            </NavLink>
        </nav>
    );
};

export default UserMenu;