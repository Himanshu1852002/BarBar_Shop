import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center p-10 bg-white shadow-xl rounded-3xl max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaClock className="mx-auto text-7xl text-gray-600 mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800 mb-4"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-600 text-lg"
        >
          This page is under construction 🚧<br />Check back later!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Service;
