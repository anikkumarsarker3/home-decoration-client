import React from 'react';
import { NavLink } from 'react-router';
import { IoStatsChartSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { GrServices } from 'react-icons/gr';
import { CiBookmarkCheck } from "react-icons/ci";

const AdminMenu = () => {
    return (
        <nav className='flex flex-col justify-center items-center'>
            {/* Admin */}
            <NavLink to='/dashboard/revinue-monitoring' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <IoStatsChartSharp className='w-5 h-5' />
                <span className='mx-4 font-medium'>Revenue Monitoring</span>
            </NavLink>
            <NavLink to='/dashboard/manage-decorator' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <MdManageAccounts className='w-5 h-5' />
                <span className='mx-4 fontP-medium'>Manage Decorators</span>
            </NavLink>
            <NavLink to='/dashboard/manage-service' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <GrServices className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Services</span>
            </NavLink>
            <NavLink to='/dashboard/create-package' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <GrServices className='w-5 h-5' />
                <span className='mx-4 font-medium'>Create Package</span>
            </NavLink>
            <NavLink to='/dashboard/manage-booking' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <CiBookmarkCheck className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Booking</span>
            </NavLink>
        </nav>
    );
};

export default AdminMenu;