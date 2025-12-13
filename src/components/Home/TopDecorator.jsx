import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";

export default function TopDecorator() {
    const { user } = useAuth()
    const [decorators, setDecorators] = useState([{}, {}, {}, {}, {}, {}]);

    useEffect(() => {
        fetch("https://your-server.com/decorators")
            .then((res) => res.json())
            .then((data) => setDecorators(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Decorators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {decorators.map((d) => (
                    <motion.div
                        key={d._id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="p-6 bg-white rounded-xl shadow hover:shadow-2xl text-center"
                    >
                        <img
                            // src={d.image}
                            src={user?.photoURL}

                            className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold">{user?.displayName}</h3>
                        <p className="text-gray-600 mb-2">Specialty: {d.specialty}</p>
                        <p className="text-yellow-500 font-semibold text-lg">⭐ 5.6</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
