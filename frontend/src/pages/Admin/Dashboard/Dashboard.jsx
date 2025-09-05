// Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarCheck, FaUsers, FaUserTie } from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [countBooking, setCountBooking] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);

  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const customerRes = await axios.get(`${url}/users/getAllUsers`);
        setStats({ totalUsers: customerRes.data.users.length });

        // 2️⃣ Date-wise Bookings Chart
        const bookingsRes = await axios.get(
          `${url}/bookings/getDateWiseBookings`
        );
        setBookingData(bookingsRes.data);

        const countAllBookings = await axios.get(`${url}/bookings/getBookings`);
        setCountBooking({ totalBookings: countAllBookings.data.bookings.length });

        const employeeRes = await axios.get(`${url}/employees/getEmployees`)
        setEmployeeData({ totalEmployees: employeeRes.data.employees.length })

        // 3️⃣ Recent Bookings
        const recentRes = await axios.get(`${url}/bookings/getRecentBookings`);
        setRecentBookings(recentRes.data);
        
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, [url]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats Section */}
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaCalendarCheck className="text-blue-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Bookings</p>
            <h2 className="text-xl font-bold">{countBooking.totalBookings}</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUsers className="text-purple-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Customers</p>
            <h2 className="text-xl font-bold">{stats.totalUsers}</h2>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
          <FaUserTie className="text-orange-600 text-3xl" />
          <div>
            <p className="text-gray-500">Total Employees</p>
            <h2 className="text-xl font-bold">{employeeData.totalEmployees}</h2>
          </div>
        </div>
      </div>

      {/* 📊 Date-wise Bookings Chart */}
      <div className="bg-white shadow rounded-xl p-5 mb-8">
        <h2 className="text-lg font-bold mb-4">Bookings (Date-wise)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={bookingData}>
            <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={2} />
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="5 5" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                })
              }
            />
            <YAxis allowDecimals={false} />
            <Tooltip
              labelFormatter={(date) =>
                new Date(date).toLocaleDateString("en-IN", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                })
              }
            />
          </LineChart>
        </ResponsiveContainer>
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
            {recentBookings.length > 0 ? (
              recentBookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{booking._id.slice(0, 4)}...{booking._id.slice(-4)}</td>
                  <td className="p-3">{booking.name}</td>
                  <td className="p-3">
                    {new Date(booking.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td
                    className={`p-3 font-medium ${booking.status === "Confirmed"
                      ? "text-green-600"
                      : booking.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                      }`}
                  >
                    {booking.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-5 text-gray-500">
                  🚫 No recent bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
