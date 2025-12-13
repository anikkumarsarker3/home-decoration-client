import { motion } from "framer-motion";

export default function StatsSection() {
    const stats = [
        { number: "1500+", label: "Successful Decorations" },
        { number: "200+", label: "Corporate Clients" },
        { number: "4.9★", label: "Average Rating" },
        { number: "20+", label: "Expert Decorators" }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-bold mb-2">{s.number}</h3>
                        <p>{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
