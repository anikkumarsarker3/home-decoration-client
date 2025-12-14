import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdSummarize } from 'react-icons/md';
import { NavLink } from 'react-router';
import { GoProject } from "react-icons/go";
import { IoMdTime } from "react-icons/io";

const DecoratorMenu = () => {
    return (
        <nav className='flex flex-col justify-center items-center'>
            {/* Decorators */}

            <NavLink to='/dashboard/earn-summary' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <MdSummarize className='w-5 h-5' />
                <span className='mx-4 font-medium'>Earning Summary</span>
            </NavLink>
            <NavLink to='/dashboard/assign-project' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <FaProjectDiagram className='w-5 h-5' />
                <span className='mx-4 font-medium'>My Assigned Project</span>
            </NavLink>
            {/* <NavLink to='/dashboard/today-schedule' className='flex cursor-pointer w-full items-center px-4 py-2  text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform '>
                <GoProject className='w-5 h-5' />
                <span className='mx-4 font-medium'>Update Project</span>
            </NavLink> */}
            <NavLink to='/dashboard/today-schedule' className={({ isActive }) => `flex cursor-pointer w-full items-center px-4 py-2  hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform  ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}>
                <IoMdTime className='w-5 h-5' />
                <span className='mx-4 font-medium'>Today Sehedule</span>
            </NavLink>
        </nav>
    );
};

export default DecoratorMenu;