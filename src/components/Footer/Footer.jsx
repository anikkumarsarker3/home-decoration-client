import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-gray-900 text-gray-300 pt-12 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6"
            >
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                // className="text-center"
                >
                    <h2 className="text-2xl font-bold text-white">StyleDecor</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Beautiful spaces, memorable events.
                    </p>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center"
                >
                    <h3 className="text-lg font-semibold text-white">Contact</h3>
                    <p className="mt-3 text-gray-400 text-sm">Phone: +8801XXXXXXX</p>
                    <p className="text-gray-400 text-sm">Email: info@styledecor.com</p>
                    <p className="text-gray-400 text-sm">Gopalganj, Bangladesh</p>
                </motion.div>

                {/* Hours + Social */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-lg font-semibold text-white">Working Hours</h3>
                    <p className="mt-3 text-gray-400 text-sm">Sat–Thu: 9 AM – 9 PM</p>
                    <p className="text-gray-400 text-sm">Friday: Closed</p>

                    <div className="flex justify-center gap-5 mt-5">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="#"
                            className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                        >
                            <FaFacebookF size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="#"
                            className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                        >
                            <FaInstagram size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href="#"
                            className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
                        >
                            <FaYoutube size={18} />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-gray-500 text-sm py-5 mt-10 border-t border-gray-700"
            >
                © {new Date().getFullYear()} StyleDecor — All Rights Reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
