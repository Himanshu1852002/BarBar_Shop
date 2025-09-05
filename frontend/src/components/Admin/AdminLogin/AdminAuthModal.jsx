import { useState } from 'react';
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { DotLoader } from "react-spinners";

const AdminAuthModal = ({ onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage("");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        try {
            const url = import.meta.env.VITE_BACKEND_URL;

            if (!isLogin) {
                if (formData.password !== formData.confirmPassword) {
                    setMessage("Passwords do not match ❌");
                    setLoading(false);
                    return;
                }
                const res = await axios.post(`${url}/admin/register`, {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                });

                if (res.data.token) {
                    localStorage.setItem("adminToken", res.data.token);
                    setMessage("Signup successful ✅");
                    if (onSuccess) onSuccess();
                }
            } else {
                const res = await axios.post(`${url}/admin/login`, {
                    email: formData.email,
                    password: formData.password,
                });

                if (res.data.token) {
                    localStorage.setItem("adminToken", res.data.token);
                    setMessage("Login successful ✅");
                    if (onSuccess) onSuccess();
                }
            }
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.message || "Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] w-[90%] max-w-md rounded-2xl shadow-2xl p-8 relative animate-fadeIn border border-[#cf814d]/40">
                <AiOutlineClose
                    className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer text-2xl"
                />

                <h2 className="text-3xl font-bold text-center text-[#cf814d] mb-6 tracking-wide">
                    {isLogin ? "Admin Login" : "Admin Sign Up"}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div className="relative">
                                <FaUser className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
                                />
                            </div>

                            <div className="relative">
                                <FaPhone className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
                                />
                            </div>
                        </>
                    )}

                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
                        />
                    </div>

                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
                        />
                    </div>

                    {!isLogin && (
                        <div className="relative">
                            <FaLock className="absolute top-4 left-3 text-gray-400" />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 bg-[#2a2a2a] text-white rounded-lg border border-gray-600 focus:border-[#cf814d] focus:outline-none"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full mt-6 py-3 bg-[#cf814d] text-white font-semibold rounded-lg shadow-lg uppercase tracking-widest 
                       hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300"
                    >
                        {loading ? <DotLoader size={20} color="#fff" /> : isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {message && <p className="text-center text-gray-300 mt-4">{message}</p>}

                <p className="text-center text-gray-400 mt-5">
                    {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleForm}
                        className="text-[#cf814d] font-medium hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AdminAuthModal;