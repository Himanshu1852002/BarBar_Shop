// Dashboard.jsx
import React from "react";
import {
  FaCalendarCheck,
  FaUsers,
  FaUserTie,
  FaDollarSign,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Dummy data
const bookingData = [
  { name: "Mon", bookings: 30 },
  { name: "Tue", bookings: 45 },
  { name: "Wed", bookings: 60 },
  { name: "Thu", bookings: 40 },
  { name: "Fri", bookings: 80 },
  { name: "Sat", bookings: 90 },
  { name: "Sun", bookings: 50 },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 7000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 8000 },
];

const recentBookings = [
  { id: 1, customer: "Amit Sharma", date: "2025-08-25", status: "Confirmed" },
  { id: 2, customer: "Neha Verma", date: "2025-08-26", status: "Pending" },
  { id: 3, customer: "Rahul Gupta", date: "2025-08-27", status: "Cancelled" },
  { id: 4, customer: "Priya Singh", date: "2025-08-28", status: "Confirmed" },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats Section */}
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaCalendarCheck className="text-blue-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Bookings</p>
            <h2 className="text-xl font-bold">1,245</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaDollarSign className="text-green-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-xl font-bold">₹5,67,890</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUsers className="text-purple-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Customers</p>
            <h2 className="text-xl font-bold">856</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUserTie className="text-orange-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Employees</p>
            <h2 className="text-xl font-bold">42</h2>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bookings Trend */}
        <div className="bg-white shadow rounded-xl p-5">
          <h2 className="text-lg font-bold mb-4">Weekly Bookings</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={bookingData}>
              <Line type="monotone" dataKey="bookings" stroke="#3B82F6" />
              <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trend */}
        <div className="bg-white shadow rounded-xl p-5">
          <h2 className="text-lg font-bold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <Bar dataKey="revenue" fill="#10B981" />
              <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Bookings Section */}
      <div className="bg-white shadow rounded-xl p-5">
        <h2 className="text-lg font-bold mb-4">Recent Bookings</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{booking.id}</td>
                <td className="p-3">{booking.customer}</td>
                <td className="p-3">{booking.date}</td>
                <td
                  className={`p-3 font-medium ${
                    booking.status === "Confirmed"
                      ? "text-green-600"
                      : booking.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {booking.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
