import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonials() {
    const reviews = [
        { name: "Rahim", text: "Amazing service! My home looks beautiful." },
        { name: "Karim", text: "Very professional team. Highly recommended!" },
        { name: "Ayesha", text: "Great experience from booking to completion." },
        { name: "Jodu", text: "Amazing service! My home looks beautiful." },
        { name: "Modu", text: "Very professional team. Highly recommended!" },
        { name: "Sadia", text: "Great experience from booking to completion." },
    ];

    return (
        <section className="py-16 bg-white px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
                What Clients Say
            </h2>

            <div className="max-w-6xl mx-auto">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    // slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div

                                className="p-6 bg-gray-100 rounded-2xl shadow-lg text-center"
                            >
                                <p className="text-gray-700 mb-4 italic">
                                    “{review.text}”
                                </p>
                                <h4 className="font-semibold text-gray-900">
                                    — {review.name}
                                </h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}
