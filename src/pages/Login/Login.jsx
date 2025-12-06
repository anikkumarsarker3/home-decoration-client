import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
const Login = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
            >
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                <div className="space-y-4">
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
                        Login
                    </button>

                    {/* Forgot Password */}
                    <div className="text-right mt-2">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                    </div>


                    {/* Social Login */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>


                    <button className="w-full border p-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    {/* Signup Link */}
                    <p className="text-center mt-4 text-sm">
                        Don't have an account? <Link to='/register' className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;