import { motion } from "framer-motion";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl w-full flex flex-col items-center text-center space-y-8"
            >
                <motion.h1
                    className="text-9xl font-extrabold tracking-widest text-[#cf814d] drop-shadow-[0_0_20px_#cf814d55]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Oops! The page you’re looking for doesn’t exist.
                </h2>
                <p className="text-gray-400 max-w-lg leading-relaxed">
                    The page might have been removed, had its name changed, or is
                    temporarily unavailable. Let’s help you get back on track.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#cf814d] text-[#cf814d] font-semibold uppercase tracking-widest 
                       hover:bg-[#cf814d] hover:text-white hover:shadow-[0_0_25px_#cf814d] transition-all duration-300"
                    >
                        <FiArrowLeft />
                        Go Back
                    </button>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#cf814d] text-white font-semibold uppercase tracking-widest 
                       hover:shadow-[0_0_25px_#cf814d] transition-all duration-300"
                    >
                        <FiHome />
                        Home
                    </a>
                </div>
                <div className="mt-8 text-sm text-gray-400 italic">
                    “Even the sharpest styles lose their way sometimes. Let’s get you
                    styled back to perfection.”
                </div>
            </motion.div>
        </div>
    );
};

export default PageNotFound;
