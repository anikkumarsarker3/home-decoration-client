import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Cards from "../../components/Cards/Cards";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function Services() {
    // const [services, setServices] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
    const axiosSecure = useAxiosSecure()

    const { data: services = [] } = useQuery({
        queryKey: ['popular-services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services');
            return res.data;
        }
    })

    const categoryOptions = services.map(service => service.category);
    const uniqueCategories = [...new Set(categoryOptions)];



    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const name = service?.serviceName || "";

            const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category ? service?.category === category : true;

            const matchesPrice =
                Number(service?.cost) >= priceRange.min &&
                Number(service?.cost) <= priceRange.max;

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [services, search, category, priceRange.min, priceRange.max]);



    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-10 text-primary"
            >
                Our Decoration Services
            </motion.h1>

            {/* Filters Section */}
            <div className="bg-white shadow-md p-6 rounded-xl mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <input
                    type="text"
                    placeholder="Search services..."
                    className="input input-bordered w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="select select-bordered w-full"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {
                        uniqueCategories.map((cat, i) => (
                            <option key={i} value={cat}>{cat}</option>
                        ))
                    }
                    {/* <option value="home">Home Decoration</option>
                    <option value="wedding">Wedding</option>
                    <option value="office">Office</option>
                    <option value="event">Event/Seminar</option> */}
                </select>

                <div>
                    {/* <p className="font-semibold mb-1">Budget Range ($)</p> */}
                    <div className="flex items-center gap-3">
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Min"
                            value={priceRange.min}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, min: Number(e.target.value) })
                            }
                        />
                        <input
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Max"
                            value={priceRange.max}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, max: Number(e.target.value) })
                            }
                        />
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {filteredServices.map((service) => (
                    <Cards key={service._id} service={service} />
                ))}
            </motion.div>
        </div>
    );
}
