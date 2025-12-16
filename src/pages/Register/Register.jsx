import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import UploadImage from "../../components/Shared/UploadImage";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
    const { user, loading, userRegister, googleRegister, updateUserProfile, deleteUserAccount } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Redirect if already logged in — prevents infinite loop

    if (user) navigate("/");




    // -------------------------
    // Normal Register
    // -------------------------
    const handleRegister = async (data) => {
        try {
            const photoURL = await UploadImage(data.photo[0]);

            // Create user
            await userRegister(data.email, data.password);

            // Update Profile
            await updateUserProfile({
                displayName: data.name,
                photoURL,
            })
                .catch(() => deleteUserAccount());

            // Save to database
            await axiosSecure.post("/users", {
                name: data.name,
                email: data.email,
                photo: photoURL,
            })
                .catch(() => deleteUserAccount());

            toast.success("Registration Successful");
            navigate(from, { replace: true });

        } catch (err) {
            // console.log(err);
            toast.error(err?.message || "Registration failed");
        }
    };

    // -------------------------
    // Google Register
    // -------------------------
    const handleGoogleRegister = async () => {
        try {
            const res = await googleRegister();

            await axiosSecure.post("/users", {
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL,
            });

            toast.success("Registration Successful");
            navigate(from, { replace: true });

        } catch (err) {
            // console.log(err);
            await deleteUserAccount();
            toast.error(err?.message || "Google signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <ToastContainer />

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-gray-200"
                >
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Create Account
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
                        {/* Full Name */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Enter your name"
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-primary/60"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Photo */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">Photo</label>
                            <input
                                type="file"
                                {...register("photo", { required: "Photo is required" })}
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50"
                            />
                            {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="Enter email"
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-primary/60"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                        message: "Password must be 6+ chars with upper, lower & number/special character",
                                    },
                                })}
                                placeholder="Enter password"
                                className="w-full mt-2 p-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-primary/60"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold shadow-md"
                        >
                            Register
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="border-t"></div>
                        <span className="absolute left-1/2 -top-3 bg-white px-3 text-sm text-gray-500 -translate-x-1/2">
                            Or sign up with
                        </span>
                    </div>

                    {/* Google Button */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center justify-center gap-3 p-3 border rounded-xl bg-white"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </motion.button>

                    <p className="text-center text-sm text-gray-600 mt-5">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 font-semibold underline">
                            Login
                        </a>
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Register;
