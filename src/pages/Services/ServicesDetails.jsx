import { useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function ServicesDetails() {
    const { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: service = {} } = useQuery({
        queryKey: ["service-details", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/services/${id}`);
            return res.data;
        },
    });

    const handlePayment = async (e) => {
        e.preventDefault();
        const bookingData = {
            serviceId: service?._id,
            serviceName: service?.serviceName,
            userEmail: user?.email,
            userName: user?.displayName,
            date: e.target.date.value,
            location: e.target.location.value,
            price: service?.cost,
            ownerEmail: service?.createdBy,
            description: service?.description,
            photo: service?.image,
            category: service?.category,
        };
        console.log(bookingData);
        await axiosSecure.post("/create-checkout-session", bookingData)
            .then((res) => {
                console.log(res.data.url);
                if (res.data.url) {
                    window.location.href = res.data.url;
                }
            });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={service?.image}
                alt={service?.service_name}
                className="w-full h-80 object-cover rounded-2xl mb-8 shadow"
            />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-4xl font-bold text-primary">{service?.service_name}</h1>

                <p className="text-3xl font-bold text-secondary mt-3 md:mt-0">
                    $ {service?.cost}
                </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
                <span className="badge badge-primary p-3 text-lg">
                    Category: {service?.category}
                </span>
                <span className="badge badge-secondary p-3 text-lg">
                    Unit: {service?.unit}
                </span>
            </div>

            <p className="text-gray-700 leading-7 text-lg mb-10">{service?.description}</p>

            <button
                onClick={() => setOpenModal(true)}
                className="btn btn-primary text-lg px-8 py-2"
            >
                Book Now
            </button>

            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg relative">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-3 text-xl"
                        >
                            ✖
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
                            Book This Service
                        </h2>

                        <form onSubmit={handlePayment} className="space-y-4">

                            <div>
                                <label className="font-semibold">Your Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    defaultValue={user?.displayName}
                                    disabled
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Your Email</label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                    defaultValue={user?.email}
                                    disabled
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Booking Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="font-semibold">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter location"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full mt-4">
                                Confirm Booking
                            </button>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
