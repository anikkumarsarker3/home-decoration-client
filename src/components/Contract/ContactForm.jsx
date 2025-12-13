import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Send a Message</h2>

                <form className="grid md:grid-cols-2 gap-6">
                    <input className="p-3 border rounded-lg" placeholder="Your Name" />
                    <input className="p-3 border rounded-lg" placeholder="Your Email" />
                    <textarea
                        className="p-3 border rounded-lg md:col-span-2"
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="md:col-span-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
}
