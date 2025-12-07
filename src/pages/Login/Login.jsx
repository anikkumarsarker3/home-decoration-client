import React from 'react';
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import UploadImage from '../../components/Shared/UploadImage';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Login = () => {
    const { user, loading, signInUser, googleRegister } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state || '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    if (loading) {
        return <LoadingSpinner />
    }
    if (user) {
        return navigate("/")
    }
    const handleLogin = (async data => {
        try {
            await signInUser(data.email, data.password)
                .then(async (res) => {
                    await axiosSecure.patch("/users", {
                        email: res.user.email,
                    });
                })
            toast.success('Login Successful')
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    })
    const handleGoogleLogin = (async () => {
        try {
            await googleRegister()
                .then(async (res) => {
                    await axiosSecure.patch("/users", {
                        email: res.user.email,
                    });
                })
            toast.success('Login Successful')
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-gray-200"
            >
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Welcome Back
                </h2>

                <div className="space-y-6">

                    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                        {/* Email */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: "Email is requird" })}
                                placeholder="Enter your email"
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition"
                            />
                            {
                                errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            }
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                {...register('password', { required: "Password is requird" })}
                                placeholder="Enter your password"
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition"
                            />
                            {
                                errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            }
                        </div>

                        {/* Login Button */}
                        <motion.button
                            type='submit'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                        >
                            Login
                        </motion.button>
                    </form>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="border-t"></div>
                        <span className="absolute left-1/2 -top-3 bg-white px-3 text-sm text-gray-500 -translate-x-1/2">
                            Or login with
                        </span>
                    </div>

                    {/* Google Login */}
                    <motion.button
                        onClick={handleGoogleLogin}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full flex items-center justify-center gap-3 p-3 border rounded-xl bg-white hover:bg-gray-50 transition shadow-sm"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </motion.button>

                    {/* Signup Link */}
                    <p className="text-center mt-4 text-sm text-gray-700">
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
