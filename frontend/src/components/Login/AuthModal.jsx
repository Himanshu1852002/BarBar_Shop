import { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { DotLoader } from "react-spinners";
import logoMobile from "../../assets/logo-mobile.png";

const AuthModal = ({ onClose, onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    } catch {
      setMessage(`Something went wrong ${isSignUp ? "during signup!" : "during login!"}`);
    } finally {
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 5000);
    }
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setMessage("");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
    >
      <div className="relative w-full max-w-sm bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(207,129,77,0.15)] border border-[#cf814d]/20">

        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#cf814d] to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-200 z-10"
        >
          <AiOutlineClose className="text-xl" />
        </button>

        <div className="px-8 pt-8 pb-10">

          {/* Logo + Title */}
          <div className="flex flex-col items-center mb-8">
            <img src={logoMobile} alt="logo" className="h-10 mb-4" />
            <h2 className="text-2xl font-bold text-white tracking-widest uppercase">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-500 text-xs mt-1 tracking-wider">
              {isSignUp ? "Join us and book your style" : "Sign in to your account"}
            </p>
            {/* Divider */}
            <div className="flex items-center gap-2 mt-4 w-full">
              <div className="flex-1 h-px bg-[#cf814d]/20" />
              <div className="w-1.5 h-1.5 bg-[#cf814d] rotate-45" />
              <div className="flex-1 h-px bg-[#cf814d]/20" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {isSignUp && (
              <div className="relative group">
                <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 group-focus-within:text-[#cf814d] transition-colors text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] text-white text-sm rounded-xl border border-white/10
                    focus:border-[#cf814d] focus:outline-none focus:bg-[#1e1e1e] transition-all duration-200 placeholder-gray-600"
                />
              </div>
            )}

            <div className="relative group">
              <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 group-focus-within:text-[#cf814d] transition-colors text-sm" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 bg-[#1a1a1a] text-white text-sm rounded-xl border border-white/10
                  focus:border-[#cf814d] focus:outline-none focus:bg-[#1e1e1e] transition-all duration-200 placeholder-gray-600"
              />
            </div>

            <div className="relative group">
              <FaLock className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 group-focus-within:text-[#cf814d] transition-colors text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-11 py-3 bg-[#1a1a1a] text-white text-sm rounded-xl border border-white/10
                  focus:border-[#cf814d] focus:outline-none focus:bg-[#1e1e1e] transition-all duration-200 placeholder-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-[#cf814d] transition-colors"
              >
                {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 bg-[#cf814d] text-white font-semibold rounded-xl uppercase tracking-widest text-sm
                hover:shadow-[0_0_25px_rgba(207,129,77,0.5)] hover:bg-[#d98f5a] transition-all duration-300 cursor-pointer
                disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <DotLoader size={18} color="#fff" /> : (isSignUp ? "Create Account" : "Sign In")}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className={`text-center text-xs mt-4 ${message.includes("✅") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}

          {/* Switch mode */}
          <p className="text-center text-gray-500 text-xs mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={switchMode}
              className="text-[#cf814d] font-semibold hover:underline cursor-pointer"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
