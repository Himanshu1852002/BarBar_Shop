import { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { DotLoader } from "react-spinners";

const AuthModal = ({ onClose, onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    setLoading(true);
    try {
      const endpoint = isSignUp ? "/users/register" : "/users/login";
      const response = await axios.post(`${url}${endpoint}`, formData);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setMessage(isSignUp ? "Signup successful ✅" : response.data.message);
        onAuthSuccess();
       
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(`Something went wrong ${isSignUp ? "during signup!" : "during login!"}`);
    }
    finally {
      setTimeout(() => {
        setLoading(false);
         onClose();
      }, 5000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] w-[90%] max-w-md rounded-2xl shadow-2xl p-8 relative animate-fadeIn border border-[#cf814d]/40">

        <AiOutlineClose
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer text-2xl"
          onClick={onClose}
        />

        <h2 className="text-3xl font-bold text-center text-[#cf814d] mb-6 tracking-wide">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

          {isSignUp && (
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
              />
            </div>
          )}

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-[#cf814d] text-white font-semibold rounded-lg shadow-lg uppercase tracking-widest 
                       hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300"
          >
            {loading ? (
              <DotLoader size={20} color="#fff" />
            ) : (
              isSignUp ? "Sign Up" : "Login"
            )}
          </button>
        </form>
        {message && <p className="text-center text-gray-300 mt-4">{message}</p>}
        <p className="text-center text-gray-400 mt-5">
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
