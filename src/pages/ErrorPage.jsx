import { useNavigate } from "react-router";
import { motion } from "framer-motion";


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 text-center max-w-md w-full border border-gray-200"
            >
                {/* Icon */}
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="#2563EB"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Oops! Something Went Wrong
                </h1>
                <p className="text-gray-600 mb-6">
                    We couldn't process your request. Try going back or return to the home page.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Go Back */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto text-gray-700 bg-white btn rounded-xl border border-primary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#2563EB"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                        Go Back
                    </motion.button>

                </div>
            </motion.div>
        </section>
    );
};

export default ErrorPage;
