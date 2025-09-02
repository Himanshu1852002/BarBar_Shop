import { useState } from "react";
import { FaHistory } from "react-icons/fa";

const CustomerManagement = () => {
  const [customers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      totalBookings: 5,
      bookingHistory: [
        { date: "2025-08-25", service: "Haircut", status: "Completed" },
        { date: "2025-08-27", service: "Shaving", status: "Cancelled" },
        { date: "2025-09-01", service: "Facial", status: "Pending" },
      ],
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya@example.com",
      phone: "9123456789",
      totalBookings: 3,
      bookingHistory: [
        { date: "2025-08-20", service: "Haircut", status: "Completed" },
        { date: "2025-08-28", service: "Spa", status: "Completed" },
      ],
    },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 tracking-tight">
        👥 Customer Management
      </h2>

      {/* Table */}
      <div className="bg-white/90 backdrop-blur shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Phone</th>
              <th className="px-6 py-4 font-semibold">Total Bookings</th>
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr
                key={customer.id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-6 py-4 font-medium">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">{customer.totalBookings}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow transition"
                  >
                    <FaHistory /> View History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking History Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
            >
              ✖
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Booking History - {selectedCustomer.name}
            </h3>

            <ul className="space-y-3">
              {selectedCustomer.bookingHistory.map((booking, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border rounded-xl px-3 py-2 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {booking.service}
                    </p>
                    <p className="text-xs text-gray-500">{booking.date}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold shadow-sm
                      ${
                        booking.status === "Completed"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : booking.status === "Cancelled"
                          ? "bg-red-100 text-red-700 border border-red-300"
                          : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                      }`}
                  >
                    {booking.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
