import { motion } from "framer-motion";
import ContactHeroImage from '../../assets/lighting1.jpg'

export default function ContactHero() {
    return (
        <section
            className="relative text-white h-[65vh] py-24 px-6 bg-center bg-cover max-w-7xl mx-auto"

        >
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        `url(${ContactHeroImage})`,
                }}
            ></div>

            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-6xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
                >
                    We're here to help you with decoration, booking & consultation support.
                </motion.p>
            </div>
        </section>

    );
}
