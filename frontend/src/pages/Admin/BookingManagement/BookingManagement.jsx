import { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      services: ["Haircut", "Beard Trim"],
      staff: "Amit",
      date: "2025-09-02",
      time: "10:30 AM",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      status: "pending",
    },
    {
      id: 2,
      services: ["Facial"],
      staff: "Sneha",
      date: "2025-09-02",
      time: "12:00 PM",
      name: "Priya Verma",
      email: "priya@example.com",
      phone: "9988776655",
      status: "confirmed",
    },
    {
      id: 3,
      services: ["Massage"],
      staff: "Vivek",
      date: "2025-09-03",
      time: "2:00 PM",
      name: "Ankit Singh",
      email: "ankit@example.com",
      phone: "9123456780",
      status: "canceled",
    },
  ]);

  // Filters
  const [filterService, setFilterService] = useState("");
  const [filterEmployee, setFilterEmployee] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Actions
  const handleApprove = (id) =>
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "confirmed" } : b))
    );

  const handleCancel = (id) =>
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: "canceled" } : b))
    );

  const handleReschedule = (id) => alert(`Reschedule Booking ID: ${id}`);

  const filteredBookings = bookings.filter((b) => {
    return (
      (filterService ? b.services.includes(filterService) : true) &&
      (filterEmployee ? b.staff === filterEmployee : true) &&
      (filterDate ? b.date === filterDate : true)
    );
  });

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 tracking-tight">
        📅 Booking Management
      </h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <select
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
          className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white"
        >
          <option value="">Filter by Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Facial">Facial</option>
          <option value="Massage">Massage</option>
        </select>

        <select
          value={filterEmployee}
          onChange={(e) => setFilterEmployee(e.target.value)}
          className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white"
        >
          <option value="">Filter by Employee</option>
          <option value="Amit">Amit</option>
          <option value="Sneha">Sneha</option>
          <option value="Vivek">Vivek</option>
        </select>

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white"
        />
      </div>

      {/* Booking Cards */}
      {filteredBookings.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {b.name}
                </h3>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium shadow-sm ${
                    b.status === "confirmed"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : b.status === "canceled"
                      ? "bg-red-100 text-red-700 border border-red-300"
                      : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                  }`}
                >
                  {b.status}
                </span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>📧</strong> {b.email}</p>
                <p><strong>📞</strong> {b.phone}</p>
                <p><strong>🛠 Services:</strong> {b.services.join(", ")}</p>
                <p><strong>👤 Staff:</strong> {b.staff}</p>
                <p><strong>📅</strong> {b.date} at {b.time}</p>
              </div>
              <div className="flex gap-3 mt-5 justify-end">
                <button
                  onClick={() => handleApprove(b.id)}
                  className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md"
                  title="Approve"
                >
                  <FaCheckCircle size={18} />
                </button>
                <button
                  onClick={() => handleCancel(b.id)}
                  className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-md"
                  title="Cancel"
                >
                  <FaTimesCircle size={18} />
                </button>
                <button
                  onClick={() => handleReschedule(b.id)}
                  className="p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 shadow-md"
                  title="Reschedule"
                >
                  <FaCalendarAlt size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16 text-lg">
          🚫 No bookings found
        </div>
      )}
    </div>
  );
};

export default BookingManagement;
