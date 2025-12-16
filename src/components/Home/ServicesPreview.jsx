import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function ServicesPreview() {
    const services = [
        { name: "Home Painting", desc: "Professional wall & ceiling painting." },
        { name: "Interior Design", desc: "Custom designs tailored to your style." },
        { name: "Furniture Setup", desc: "Expert furniture arrangement & setup." },
        { name: "Office Design", desc: "Professional wall & ceiling painting." },
        { name: "Weding", desc: "Custom designs tailored to your style." },
        { name: "Seminar setup", desc: "Expert furniture arrangement & setup." },
    ];


    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div className="bg-gray-100 p-6 max-w-6xl mx-auto rounded-2xl">
                <Swiper
                    effect={'Centered'}
                    grabCursor={true}
                    centeredSlides={true}
                    // slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"

                >


                    {
                        services.map((service) => (
                            <SwiperSlide key={service._id}>
                                <div
                                    className="p-6 bg-white shadow rounded-xl ml-5"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                    <p className="text-gray-600">{service.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}