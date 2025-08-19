import { useState } from "react";

const AuthModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] w-[90%] max-w-md rounded-2xl shadow-2xl p-8 relative animate-fadeIn border border-[#cf814d]/40">
        <button
          className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-center text-[#cf814d] mb-6 tracking-wide">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
          />

          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-[#cf814d] text-white font-semibold rounded-lg shadow-md hover:bg-[#b56c3d] transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-400  mt-5">
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            className="text-[#cf814d] cursor-pointer font-medium hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
