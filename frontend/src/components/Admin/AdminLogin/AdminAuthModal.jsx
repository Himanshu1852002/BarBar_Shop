import { useState } from 'react';
import axios from 'axios';

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

        try {
            const url = import.meta.env.VITE_BACKEND_URL;

            if (!isLogin) {
                // ✅ Signup
                if (formData.password !== formData.confirmPassword) {
                    setMessage("Passwords do not match ❌");
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
                // ✅ Login
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
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? "Admin Login" : "Admin Sign Up"}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {message && <p className="text-center text-red-500 mt-3">{message}</p>}

                <p className="text-center mt-4 text-sm">
                    {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={toggleForm}
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AdminAuthModal