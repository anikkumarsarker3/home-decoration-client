import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;