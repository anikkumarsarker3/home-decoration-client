import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cards from "../Cards/Cards";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function PopularServices() {
    // const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure()
    const { data: services = [] } = useQuery({
        queryKey: ['popular-services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services');
            return res.data;
        }
    })

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Popular Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    services.map((service, i) => (<Cards key={i} service={service}></Cards>
                    ))
                }
            </div>
        </div>
    );
}
