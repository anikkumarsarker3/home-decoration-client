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
            <NavLink to='/dashboard/revinue-monitoring' className='flex cursor-pointer w-full items-center px-4 py-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform '>
                <IoStatsChartSharp className='w-5 h-5' />
                <span className='mx-4 font-medium'>Revenue Monitoring</span>
            </NavLink>
            <NavLink to='/dashboard/manage-decorator' className='flex cursor-pointer w-full items-center px-4 py-2  text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform '>
                <MdManageAccounts className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Decorators</span>
            </NavLink>
            <NavLink to='/dashboard/manage-service' className='flex cursor-pointer w-full items-center px-4 py-2  text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform '>
                <GrServices className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Services</span>
            </NavLink>
            <NavLink to='/dashboard/manage-booking' className='flex cursor-pointer w-full items-center px-4 py-2  text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform '>
                <CiBookmarkCheck className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Booking</span>
            </NavLink>
        </nav>
    );
};

export default AdminMenu;