import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaTrash,
} from "react-icons/fa";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const url = import.meta.env.VITE_BACKEND_URL;
      try {
        const res = await axios.get(`${url}/bookings/getBookings`);
        const data = res.data.bookings;

        setBookings(data);

        // ✅ Extract unique services
        const serviceSet = new Set();
        data.forEach((b) => {
          if (Array.isArray(b.services)) {
            b.services.forEach((s) => serviceSet.add(s));
          } else if (b.services) {
            serviceSet.add(b.services);
          }
        });

        // ✅ Extract unique employees
        const employeeSet = new Set(data.map((b) => b.staff));

        setServices([...serviceSet]);
        setEmployees([...employeeSet]);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);

  // Filters
  const [filterService, setFilterService] = useState("");
  const [filterEmployee, setFilterEmployee] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // ✅ Convert UTC → IST
  const formatIST = (utcDate, time) => {
    try {
      const dateObj = new Date(utcDate);
      const options = {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const istDate = dateObj.toLocaleDateString("en-IN", options);
      return `${istDate} at ${time}`;
    } catch (error) {
      return `${utcDate} at ${time}`;
    }
  };

  // Actions
  const handleApprove = (id) =>
    setBookings((prev) =>
      prev.map((b) => (b._id === id ? { ...b, status: "confirmed" } : b))
    );

  const handleCancel = (id) =>
    setBookings((prev) =>
      prev.map((b) => (b._id === id ? { ...b, status: "canceled" } : b))
    );

  const handleReschedule = (id) => alert(`Reschedule Booking ID: ${id}`);

  const handleDelete = async (id) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      await axios.delete(`${url}/bookings/deleteBooking/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

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
        {/* Services Filter */}
        <select
          value={filterService}
          onChange={(e) => setFilterService(e.target.value)}
          className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white"
        >
          <option value="">Filter by Service</option>
          {services.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Employee Filter */}
        <select
          value={filterEmployee}
          onChange={(e) => setFilterEmployee(e.target.value)}
          className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white"
        >
          <option value="">Filter by Employee</option>
          {employees.map((emp, i) => (
            <option key={i} value={emp}>
              {emp}
            </option>
          ))}
        </select>

        {/* Date Filter */}
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
              key={b._id}
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
                <p>
                  <strong>📧</strong> {b.email}
                </p>
                <p>
                  <strong>📞</strong> {b.phone}
                </p>
                <p>
                  <strong>🛠 Services:</strong>{" "}
                  {Array.isArray(b.services) ? b.services.join(", ") : b.services}
                </p>
                <p>
                  <strong>👤 Staff:</strong> {b.staff}
                </p>
                <p>
                  <strong>📅</strong> {formatIST(b.date, b.time)}
                </p>
              </div>
              <div className="flex gap-3 mt-5 justify-end">
                {/* Approve */}
                <div className="relative group">
                  <button
                    onClick={() => handleApprove(b._id)}
                    className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md"
                  >
                    <FaCheckCircle size={18} />
                  </button>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
                    Approve Booking
                  </span>
                </div>
                {/* Cancel */}
                <div className="relative group">
                  <button
                    onClick={() => handleCancel(b._id)}
                    className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-md"
                  >
                    <FaTimesCircle size={18} />
                  </button>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
                    Cancel Booking
                  </span>
                </div>
                {/* Reschedule */}
                <div className="relative group">
                  <button
                    onClick={() => handleReschedule(b._id)}
                    className="p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 shadow-md"
                  >
                    <FaCalendarAlt size={18} />
                  </button>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
                    Reschedule Booking
                  </span>
                </div>
                {/* Delete */}
                <div className="relative group">
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 shadow-md"
                  >
                    <FaTrash size={18} />
                  </button>
                  <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
                    Delete Booking
                  </span>
                </div>
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
