import React from 'react';
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <section className="text-center py-20 bg-purple-100 rounded-2xl">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-4">
                    Welcome to StyleDecor
                </motion.h1>
                <p className="text-gray-700 text-lg">Book beautiful decoration services for any event.</p>
            </section>
        </div>
    );


};

export default Home;