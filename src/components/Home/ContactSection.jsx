import { motion } from "framer-motion";
import ContactBgImage from '../../assets/hallway.jpg'

export default function ContactSection() {
    return (

        <section className="relative py-24 px-6 text-center overflow-hidden rounded-2xl">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        `url(${ContactBgImage})`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55 bg-opacity-70"></div>

            {/* Floating Animation Shapes */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.2, y: -40 }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-10 left-20 w-32 h-32 bg-purple-500 opacity-20 blur-3xl rounded-full"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 0.15, y: 30 }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500 opacity-20 blur-2xl rounded-full"
            ></motion.div>

            {/* Content */}
            <div className="relative z-10 text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                >
                    Ready to Decorate Your Home?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-gray-300 max-w-xl mx-auto mb-8 text-lg"
                >
                    Contact our expert team to get the perfect decoration solution.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-black rounded-xl text-lg font-semibold shadow-xl hover:bg-gray-200 transition"
                >
                    Contact Us
                </motion.button>
            </div>
        </section>
    );
}
