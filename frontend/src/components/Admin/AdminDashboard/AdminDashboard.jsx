import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Navbar />
            <Sidebar />
            <div className="flex-1 ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
