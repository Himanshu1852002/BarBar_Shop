import { Link, useLocation } from "react-router-dom";
import {
    FaTachometerAlt,
    FaCalendarCheck,
    FaCut,
    FaUsers,
    FaUser,
    FaChartBar,
    FaCog,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
        { name: "Bookings", path: "/admin/bookingManagement", icon: <FaCalendarCheck /> },
        { name: "Services", path: "/admin/services", icon: <FaCut /> },
        { name: "Employees", path: "/admin/employeeManagement", icon: <FaUsers /> },
        { name: "Customers", path: "/admin/customerManagement", icon: <FaUser /> },
        { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
    ];

    return (
        <>
            <button
                className="lg:hidden fixed top-20 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <div
                className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white shadow-xl flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                <ul className="space-y-2 flex-1 p-4 overflow-y-auto">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)} // auto close on mobile
                                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200
                    ${isActive
                                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md"
                                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                        }`}
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="text-gray-500 text-xs text-center mb-4">
                    © {new Date().getFullYear()} My Salon
                </div>
            </div>
        </>
    );
};

export default Sidebar;
