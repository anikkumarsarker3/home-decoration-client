import { motion } from "framer-motion";


export default function ServicesPreview() {
    const services = [
        { name: "Home Painting", desc: "Professional wall & ceiling painting." },
        { name: "Interior Design", desc: "Custom designs tailored to your style." },
        { name: "Furniture Setup", desc: "Expert furniture arrangement & setup." },
    ];


    return (
        <section className="py-16 bg-gray-100 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="p-6 bg-white shadow rounded-xl"
                    >
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}