import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';


const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default MainLayout;