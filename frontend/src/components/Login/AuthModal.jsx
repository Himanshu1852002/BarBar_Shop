import { useState } from "react";
import axios from 'axios';

const AuthModal = ({ onClose, onAuthSuccess  }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    if (isSignUp) {
      try {

        const response = await axios.post(`${url}/users/register`, formData);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setMessage("Signup successful ✅");
           onAuthSuccess();
          onClose();
        }
        else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("Something went wrong!");
      }
    }
    else {
      try {
        const response = await axios.post(`${url}/users/login`, formData);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setMessage(response.data.message);
         onAuthSuccess();
        onClose();
      }
      else {
        setMessage(response.data.message);
      }
      } catch (error) {
         setMessage("Something went wrong in login!");
      }
    }
  }

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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
        {message && <p className="text-center text-gray-300 mt-4">{message}</p>}
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
