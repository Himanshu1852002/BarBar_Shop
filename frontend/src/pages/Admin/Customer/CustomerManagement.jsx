import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomer = async () => {
      const url = import.meta.env.VITE_BACKEND_URL;
      try {
        const res = await axios.get(`${url}/bookings/getBookings`);
        const grouped = res.data.bookings.reduce((acc, booking) => {
          if (!acc[booking.email]) {
            acc[booking.email] = {
              name: booking.name,
              email: booking.email,
              phone: booking.phone,
              bookingHistory: [],
            };
          }
          acc[booking.email].bookingHistory.push(booking);
          return acc;
        }, {});

        setCustomers(Object.values(grouped));
      } catch (error) {
        console.log(error);
      }
    };
    getCustomer();
  }, []);


  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 tracking-tight">
        👥 Customer Management
      </h2>
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
                key={customer._id}
                className={`${idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
                  } hover:bg-indigo-50 transition`}
              >
                <td className="px-6 py-4 font-medium">{customer.name}</td>
                <td className="px-6 py-4">{customer.email}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">{customer.bookingHistory.length}</td>
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

      {selectedCustomer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 relative animate-fadeIn">
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
            >
              ✖
            </button>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Booking History - {selectedCustomer.name}
            </h3>

            <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {selectedCustomer.bookingHistory.map((booking, index) => {
                const bookingDate = new Date(booking.date).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <li
                    key={index}
                    className="border rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 mb-1">Services</p>
                        <div className="flex flex-wrap gap-1.5">
                          {(Array.isArray(booking.services)
                            ? booking.services
                            : booking.services.split("+")
                          ).map((srv, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-[11px] rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                            >
                              {srv.trim()}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">📅 {bookingDate}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-semibold shadow-sm shrink-0
                        ${booking.status === "Completed"
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : booking.status === "Cancelled"
                              ? "bg-red-100 text-red-700 border border-red-300"
                              : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                          }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
