import { motion } from "framer-motion";


export default function Testimonials() {
    const reviews = [
        { name: "Rahim", text: "Amazing service! My home looks beautiful." },
        { name: "Karim", text: "Very professional team. Highly recommended!" },
    ];


    return (
        <section className="py-16 bg-white px-6">
            <h2 className="text-3xl font-bold text-center mb-10">What Clients Say</h2>


            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="p-6 bg-gray-100 rounded-xl shadow"
                    >
                        <p className="text-gray-700 mb-4">“{review.text}”</p>
                        <h4 className="font-semibold">— {review.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}