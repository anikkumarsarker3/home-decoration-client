import { motion } from "framer-motion";
import { Star, Clock, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
    const items = [
        {
            icon: <Star size={40} />,
            title: "Premium Quality",
            desc: "We ensure high-quality decorations with expert-level finishing."
        },
        {
            icon: <Clock size={40} />,
            title: "On-Time Service",
            desc: "We guarantee timely service completion with tracking updates."
        },
        {
            icon: <Sparkles size={40} />,
            title: "Modern Design",
            desc: "We use modern themes, colors, and trending decoration styles."
        }
    ];

    return (
        <section className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose StyleDecor?
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-8 bg-white shadow-lg rounded-2xl text-center hover:shadow-xl"
                    >
                        <div className="flex justify-center text-purple-600 mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
