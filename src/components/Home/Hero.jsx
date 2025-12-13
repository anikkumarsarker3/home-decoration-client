import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/paint3.webp'
import image2 from '../../assets/light3.jpg'
import image3 from '../../assets/bedroom1.jpg'
const images = [
    image1,
    image2,
    image3,
];
export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
    };
    return (

        <>
            <section className="relative h-[70vh] overflow-hidden rounded-2xl">
                {/* Background Slider */}
                <Slider {...settings} className="h-full">
                    {images.map((img, index) => (
                        <div key={index}>
                            <div
                                className="h-[80vh] bg-cover bg-center"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <div className="absolute inset-0 bg-black/60"></div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Static Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Premium Home & Ceremony Decoration
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-200"
                        >
                            Book professional decoration services for weddings, homes, offices, and grand events.
                        </motion.p>
                        <motion.a
                            href="/services"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="btn btn-lg mt-5 bg-white text-primary font-semibold border-none px-10"
                        >
                            Book Service
                        </motion.a>
                    </div>
                </div>
            </section>


            {/* <div className="bg-gradient-to-r from-primary to-secondary py-20 px-6 text-white text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold mb-5"
                >
                    Premium Home & Ceremony Decoration
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-lg max-w-2xl mx-auto mb-8"
                >
                    Book professional decoration services for weddings, homes, offices, and grand events.
                </motion.p>


            </div> */}
        </>
    );
}
