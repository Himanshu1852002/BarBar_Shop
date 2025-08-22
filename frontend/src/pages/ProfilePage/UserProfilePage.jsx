import { useState } from "react";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const profile = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    avatar: "https://i.pinimg.com/474x/94/a6/66/94a666d648af0de5adb025828cd998a0.jpg",
  };

  const bookings = [
    {
      id: 1,
      date: "2025-09-01",
      time: "10:00 AM",
      services: ["Haircut", "Shaving"],
      barber: "Mike",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2025-08-20",
      time: "02:00 PM",
      services: ["Beard Trim"],
      barber: "Alex",
      status: "Completed",
    },
  ];

  const paymentHistory = [
    { id: 1, bookingId: "B001", amount: "$30", date: "2025-08-01" },
    { id: 2, bookingId: "B002", amount: "$15", date: "2025-08-20" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white pt-20 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-14 tracking-widest text-[#cf814d]">
          User Profile
        </h2>
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {["overview", "bookings", "personal", "payments", "password"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#cf814d] to-[#e6a45f] text-black shadow-[0_4px_30px_rgba(207,129,77,0.5)]"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {tab === "overview"
                ? "Profile Overview"
                : tab === "bookings"
                ? "My Bookings"
                : tab === "personal"
                ? "Personal Info"
                : tab === "payments"
                ? "Payment Details"
                : "Change Password"}
            </button>
          ))}
        </div>

        <div className="space-y-14">
          {activeTab === "overview" && (
            <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] p-10 rounded-3xl shadow-2xl border border-[#cf814d] text-center backdrop-blur-sm">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full border-4 border-[#cf814d] shadow-lg"
                />
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#cf814d] rounded-full flex items-center justify-center text-black font-bold text-lg cursor-pointer">
                  ✎
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{profile.name}</h3>
              <p className="text-gray-300 mb-6">{profile.email}</p>
              <div className="flex justify-center gap-5">
                <div className="bg-[#cf814d] px-7 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_#cf814d] transition-all cursor-pointer">
                  Edit Profile
                </div>
                <div className="bg-red-600 px-7 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_red] transition-all cursor-pointer">
                  Logout
                </div>
              </div>
            </div>
          )}

          {activeTab === "bookings" && (
            <div className="max-w-4xl mx-auto space-y-6">
              {bookings.map((b) => (
                <div key={b.id} className="bg-gradient-to-r from-[#1b1b1b] to-[#2c2c2c] p-6 rounded-3xl shadow-2xl border border-[#cf814d] transition-all hover:shadow-[0_0_30px_rgba(207,129,77,0.5)]">
                  <p className="mb-1 text-lg"><span className="font-semibold">Date:</span> {b.date} at {b.time}</p>
                  <p className="mb-1 text-lg"><span className="font-semibold">Services:</span> {b.services.join(", ")}</p>
                  <p className="mb-1 text-lg"><span className="font-semibold">Barber:</span> {b.barber}</p>
                  <p className="mb-3 text-lg"><span className="font-semibold">Status:</span> <span className={`${b.status === "Confirmed" ? "text-green-400" : b.status === "Completed" ? "text-gray-400" : "text-red-500"}`}>{b.status}</span></p>
                  <div className="flex gap-4">
                    <div className="bg-[#cf814d] px-5 py-1 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_#cf814d] cursor-pointer">
                      Cancel
                    </div>
                    <div className="bg-gray-700 px-5 py-1 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_gray] cursor-pointer">
                      Reschedule
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "personal" && (
            <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] p-10 rounded-3xl shadow-2xl border border-[#cf814d]">
              <h3 className="text-2xl font-bold mb-6 text-[#cf814d]">Personal Information</h3>
              {[
                { label: "Full Name", value: profile.name },
                { label: "Email", value: profile.email },
                { label: "Phone Number", value: profile.phone },
              ].map((field) => (
                <input
                  key={field.label}
                  type="text"
                  placeholder={field.label}
                  value={field.value}
                  className="w-full mb-5 px-5 py-3 rounded-2xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:outline-none shadow-inner text-lg"
                  disabled
                />
              ))}
            </div>
          )}

          {activeTab === "payments" && (
            <div className="max-w-4xl mx-auto space-y-6">
              {paymentHistory.map((p) => (
                <div key={p.id} className="bg-gradient-to-r from-[#1b1b1b] to-[#2c2c2c] p-6 rounded-3xl shadow-2xl border border-[#cf814d] flex justify-between transition-all hover:shadow-[0_0_30px_rgba(207,129,77,0.5)]">
                  <p className="text-lg"><span className="font-semibold">Booking ID:</span> {p.bookingId}</p>
                  <p className="text-lg"><span className="font-semibold">Amount:</span> {p.amount}</p>
                  <p className="text-lg"><span className="font-semibold">Date:</span> {p.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "password" && (
            <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] p-10 rounded-3xl shadow-2xl border border-[#cf814d]">
              <h3 className="text-2xl font-bold mb-6 text-[#cf814d]">Change Password</h3>
              {["Old Password", "New Password", "Confirm Password"].map((field) => (
                <input
                  key={field}
                  type="password"
                  placeholder={field}
                  className="w-full mb-5 px-5 py-3 rounded-2xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:outline-none shadow-inner text-lg"
                />
              ))}
              <div className="w-full bg-[#cf814d] py-3 rounded-full font-bold hover:shadow-[0_0_25px_#cf814d] transition-all text-center cursor-pointer">
                Update Password
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
