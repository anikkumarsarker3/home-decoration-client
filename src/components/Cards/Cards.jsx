import React from 'react';
import { motion } from "framer-motion";
const Cards = ({ service }) => {
    return (
        <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-lg p-5 bg-white hover:shadow-2xl transition"
        >
            <img
                src={service?.image}
                className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{service?.serviceName}</h3>
            <p className="text-gray-600 mb-3 line-clamp-1"> {service?.description}</p>
            <p className="font-semibold text-primary mb-3">$ {service?.cost}</p>
            <a href={`/services-details/${service._id}`} className="btn btn-primary w-full">View Details</a>
        </motion.div>
    );
};

export default Cards;