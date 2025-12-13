import { motion } from "framer-motion";
import missionImg from '../../assets/paint2.jpg'

export default function MissionSection() {
    return (
        <section className="py-20 px-6 bg-gray-50 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={missionImg}
                    className="rounded-2xl shadow-xl mx-auto"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Our mission is to transform home & event spaces into beautiful
                        environments through modern design, premium materials, and expert
                        craftsmanship.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        We aim to provide a seamless online booking experience, ensuring
                        transparency, efficiency, and creativity in every project.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
