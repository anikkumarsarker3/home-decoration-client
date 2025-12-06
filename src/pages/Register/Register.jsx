import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
            >
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 rounded-xl border focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-xl border focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-xl border focus:outline-none"
                    />
                    <button className="w-full bg-primary text-white p-3 rounded-xl font-semibold">
                        Register
                    </button>
                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="border-t"></div>
                        <span className="absolute left-1/2 -top-3 bg-white px-3 text-sm text-gray-500 -translate-x-1/2">
                            Or sign up with
                        </span>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 p-3 border rounded-xl hover:bg-gray-50">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                            Google
                        </button>

                    </div>

                    {/* Redirect to Login */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 font-semibold underline">
                            Login
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
