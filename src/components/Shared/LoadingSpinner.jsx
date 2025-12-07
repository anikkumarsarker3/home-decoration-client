import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={`${smallHeight ? "h-screen" : "h-screen"
        } flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200`}
    >
      {/* Animated card behind spinner */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, repeatType: "mirror" }}
        className="p-8 rounded-3xl shadow-2xl bg-red-400 backdrop-blur-lg flex justify-center items-center"
      >
        {/* ScaleLoader with colorful gradient */}
        <ScaleLoader
          height={80}
          width={10}
          radius={5}
          margin={5}
          color="linear-gradient(90deg, #3B82F6, #2563EB, #9333EA, #F43F5E, #F59E0B)"
        />
      </motion.div>

      {/* Optional text */}
      <motion.p
        className="mt-6 text-red-700 font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
