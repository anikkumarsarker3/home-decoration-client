import { motion } from "framer-motion";


export default function Features() {
    const items = [
        { title: "Fast Booking", text: "Book decorators quickly & easily." },
        { title: "Expert Team", text: "Skilled & trained professionals." },
        { title: "Affordable", text: "Best prices with premium service." },
    ];


    return (
        <section className="py-16 bg-white px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className="p-6 bg-gray-50 rounded-xl shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}