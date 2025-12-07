import React, { useState } from 'react';
import { Link, NavLink } from "react-router";
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/logo-deco.png'
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const { user, loading, logOut, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = <>
        <NavLink to='/' className={({ isActive }) => `hover:text-purple-600 cursor-pointer ${isActive ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>Home</NavLink>
        <NavLink to='/services' className={({ isActive }) => `hover:text-purple-600 cursor-pointer ${isActive ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>Services</NavLink>
        <NavLink to='/coverage' className={({ isActive }) => `hover:text-purple-600 cursor-pointer ${isActive ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>Coverage</NavLink>
        <NavLink to='/about' className={({ isActive }) => `hover:text-purple-600 cursor-pointer ${isActive ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>About</NavLink>
        <NavLink to='/contract' className={({ isActive }) => `hover:text-purple-600 cursor-pointer ${isActive ? "text-blue-600 border-b-2 border-blue-600" : ""}`}>Contract</NavLink>
    </>
    const onLogout = async () => {
        await logOut()
        setUser(null);
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-40 w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-xl font-bold">
                        <img src={logo} alt="" className='rounded-' />
                    </div>
                    <h1 className="text-xl font-semibold">StyleDecor</h1>
                </div>


                <ul className="hidden md:flex gap-6 text-gray-700">
                    {links}
                </ul>
                <div className="flex items-center gap-3">
                    {!user ? (
                        <Link to='/login' className="border bg-primary text-white px-4 py-2 rounded-md">Login</Link>
                    ) : (
                        <>
                            <Link to='/dashboard' className="hidden md:block bg-purple-600 text-white px-4 py-2 rounded-md">Dashboard</Link>
                            <div className="relative">
                                <button
                                    className="cursor-pointer px-3 py-2 rounded-md flex items-center gap-2"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center' />
                                    <span className='font-bold'>{user?.displayName}</span>
                                </button>

                                <AnimatePresence>
                                    {menuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-400 rounded-md w-40"
                                        >
                                            <Link to='/dashboard/profile' className="btn w-full text-left px-4 py-2 hover:bg-gray-200">My Profile</Link>

                                            <button className="btn w-full text-left px-4 py-2 hover:bg-gray-200" onClick={onLogout}>Logout</button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}