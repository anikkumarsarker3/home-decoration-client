import { motion } from "framer-motion";
import AboutHeroImage from '../../assets/room2.jpg'

export default function AboutHero() {
    return (
        <section
            className="relative text-white py-24 px-6 bg-center bg-cover"
            style={{
                backgroundImage:
                    `url(${AboutHeroImage})`,
            }}
        >
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-6xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    About StyleDecor
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
                >
                    We bring your dream home & event decoration to life with modern
                    creativity, premium designs, and a seamless service experience.
                </motion.p>
            </div>
        </section>

    );
}
