import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiUser, FiCalendar, FiInfo, FiLock, FiLogOut,
  FiEdit2, FiCheckCircle, FiAlertCircle, FiEye, FiEyeOff
} from "react-icons/fi";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState("");
  const [bookings, setBooking] = useState([]);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [showReschedule, setShowReschedulePopup] = useState(false);
  const [bookingIdReseduled, setBookingIdReseduled] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);
  const [showPasswords, setShowPasswords] = useState({ old: false, new: false, confirm: false });
  const navigate = useNavigate();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [bookingsLoading, setBookingsLoading] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [profileError, setProfileError] = useState("");

  const handleCancelClick = (id) => { setSelectedBookingId(id); setShowCancelPopup(true); };
  const handleRescheduleClick = (id) => { setBookingIdReseduled(id); setShowReschedulePopup(true); };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const token = localStorage.getItem("token");
        if (!token) { setUserLoading(false); navigate("/"); return; }
        const res = await axios.get(`${url}/users/userInfo`, { headers: { Authorization: `Bearer ${token}` } });
        setUser({ ...res.data.user, image: res.data.image });
        setNewName(res.data.user.name || "");
        setNewPhone(res.data.user.phone || "");
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setUserLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (!user.email) {
      setBookingsLoading(false);
      return;
    }
    const getBookingData = async () => {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${url}/bookings/getBookings`);
        const userBookings = res.data.bookings.filter(
          (b) => b.email?.toLowerCase() === user.email?.toLowerCase()
        );
        setBooking(userBookings);
      } catch (error) { console.error("Error fetching bookings:", error); }
      finally { setBookingsLoading(false); }
    };
    getBookingData();
  }, [user.email]);

  const cancelBooking = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      await axios.delete(`${url}/bookings/cancelBooking/${selectedBookingId}`);
      setBooking((prev) => prev.map((b) => b._id === selectedBookingId ? { ...b, status: "Cancelled" } : b));
    } catch (error) { console.error("Error cancelling booking:", error); }
    finally { setShowCancelPopup(false); setSelectedBookingId(null); }
  };

  const rescheduleBooking = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      await axios.put(`${url}/bookings/rescheduledBooking/${bookingIdReseduled}`, { date: newDate, time: newTime, status: "Rescheduled" });
      setBooking((prev) => prev.map((b) => b._id === bookingIdReseduled ? { ...b, date: newDate, time: newTime, status: "Rescheduled" } : b));
      setShowReschedulePopup(false); setBookingIdReseduled(null); setNewDate(""); setNewTime("");
    } catch (error) { console.error("Error rescheduling booking:", error); }
  };

  const passwordChange = async () => {
    setPasswordError("");
    if (!oldPassword || !newPassword || !confirmPassword) { setPasswordError("All fields are required."); return; }
    if (newPassword !== confirmPassword) { setPasswordError("New passwords do not match."); return; }
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      await axios.put(`${url}/users/changePassword`, { oldPassword, newPassword, confirmPassword }, { headers: { Authorization: `Bearer ${token}` } });
      setShowPasswordSuccess(true); setOldPassword(""); setNewPassword(""); setConfirmPassword("");
    } catch (error) { setPasswordError(error.response?.data?.message || "Failed to update password."); }
  };

  useEffect(() => {
    if (showPasswordSuccess) {
      const timer = setTimeout(() => setShowPasswordSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPasswordSuccess]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setProfileError("");
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", newName);
      formData.append("phone", newPhone);
      if (newImage) formData.append("image", newImage);
      const res = await axios.put(`${url}/users/update-profile`, formData, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } });
      setUser((prev) => ({ ...prev, name: res.data.user.name, phone: newPhone, avatar: res.data.image || prev.avatar }));
      setShowEditProfile(false); setPreview(null); setNewImage(null);
    } catch (error) { setProfileError(error.response?.data?.message || "Failed to update profile."); }
  };

  const handleLogout = () => { localStorage.removeItem("token"); navigate("/"); };

  const profile = {
    name: user.name,
    email: user.email,
    phone: user.phone || (bookings.length > 0 ? bookings[0].phone : ""),
    avatar: user.image || "https://i.pinimg.com/474x/94/a6/66/94a666d648af0de5adb025828cd998a0.jpg",
  };

  const SkeletonBox = ({ className }) => (
    <div className={`bg-[#1a1a1a] rounded-xl animate-pulse ${className}`} />
  );

  const tabs = [
    { id: "overview", label: "Overview", icon: <FiUser /> },
    { id: "bookings", label: "My Bookings", icon: <FiCalendar /> },
    { id: "personal", label: "Personal Info", icon: <FiInfo /> },
    { id: "password", label: "Change Password", icon: <FiLock /> },
  ];

  const statusColor = (status) => {
    if (status === "Confirmed") return "text-emerald-400 bg-emerald-400/10 border-emerald-400/30";
    if (status === "Completed") return "text-gray-400 bg-gray-400/10 border-gray-400/30";
    if (status === "Rescheduled") return "text-blue-400 bg-blue-400/10 border-blue-400/30";
    return "text-red-400 bg-red-400/10 border-red-400/30";
  };

  if (userLoading) return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-72 flex-shrink-0 space-y-4">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full bg-[#1a1a1a] animate-pulse" />
              <div className="h-4 w-32 bg-[#1a1a1a] rounded animate-pulse" />
              <div className="h-3 w-24 bg-[#1a1a1a] rounded animate-pulse" />
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-4 grid grid-cols-2 gap-3">
              <div className="h-16 bg-[#1a1a1a] rounded-xl animate-pulse" />
              <div className="h-16 bg-[#1a1a1a] rounded-xl animate-pulse" />
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-2 space-y-1">
              {[...Array(4)].map((_, i) => <div key={i} className="h-11 bg-[#1a1a1a] rounded-xl animate-pulse" />)}
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="h-5 w-40 bg-[#1a1a1a] rounded animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-[#1a1a1a] rounded-xl animate-pulse" />)}
              </div>
            </div>
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="h-5 w-40 bg-[#1a1a1a] rounded animate-pulse" />
              {[...Array(3)].map((_, i) => <div key={i} className="h-16 bg-[#1a1a1a] rounded-xl animate-pulse" />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 lg:sticky lg:top-20 lg:self-start">
              {/* Profile Card */}
              <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6 text-center mb-4 relative">
                <div className="relative inline-block mb-4">
                  <img
                    src={profile.avatar}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#cf814d] shadow-[0_0_20px_rgba(207,129,77,0.3)]"
                  />
                  <button
                    onClick={() => setShowEditProfile(true)}
                    className="absolute bottom-0 right-0 w-7 h-7 bg-[#cf814d] rounded-full flex items-center justify-center hover:bg-[#e6a45f] transition-colors shadow-lg cursor-pointer"
                  >
                    <FiEdit2 size={12} className="text-black" />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{profile.name || "User"}</h3>
                <p className="text-gray-500 text-sm mb-4 truncate">{profile.email}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-[#cf814d] bg-[#cf814d]/10 border border-[#cf814d]/20 rounded-full px-3 py-1 w-fit mx-auto">
                  <FiCheckCircle size={11} />
                  <span>Verified Member</span>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-4 mb-4 grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-[#1a1a1a] rounded-xl">
                  <p className="text-2xl font-bold text-[#cf814d]">{bookings.length}</p>
                  <p className="text-xs text-gray-500 mt-1">Total Bookings</p>
                </div>
                <div className="text-center p-3 bg-[#1a1a1a] rounded-xl">
                  <p className="text-2xl font-bold text-emerald-400">
                    {bookings.filter(b => b.status === "Completed").length}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Completed</p>
                </div>
              </div>

              {/* Nav */}
              <nav className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-2 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer mb-1 last:mb-0 ${
                      activeTab === tab.id
                        ? "bg-[#cf814d] text-black shadow-[0_4px_15px_rgba(207,129,77,0.3)]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-base">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </nav>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium cursor-pointer"
              >
                <FiLogOut size={15} />
                Sign Out
              </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">

              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-4">
                  <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-[#cf814d] mb-5 flex items-center gap-2">
                      <FiUser size={18} /> Profile Overview
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: "Full Name", value: profile.name },
                        { label: "Email Address", value: profile.email },
                        { label: "Phone Number", value: profile.phone },
                        { label: "Member Since", value: user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" }) : "—" },
                      ].map((item) => (
                        <div key={item.label} className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5">
                          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{item.label}</p>
                          <p className="text-white font-medium truncate">{item.value || "—"}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Bookings Preview */}
                  <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-[#cf814d] mb-4 flex items-center gap-2">
                      <FiCalendar size={18} /> Recent Bookings
                    </h2>
                    {bookings.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center mb-4">
                          <FiCalendar size={24} className="text-[#cf814d]" />
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">No Bookings Yet</p>
                        <p className="text-gray-500 text-xs">You haven't made any appointments yet.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {bookings.slice(0, 3).map((b) => (
                          <div key={b._id} className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-xl border border-white/5">
                            <div>
                              <p className="text-sm font-medium">{b.services?.join(", ")}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{new Date(b.date).toLocaleDateString("en-IN")} · {b.time}</p>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusColor(b.status)}`}>
                              {b.status}
                            </span>
                          </div>
                        ))}
                        {bookings.length > 3 && (
                          <button onClick={() => setActiveTab("bookings")} className="text-[#cf814d] text-sm hover:underline cursor-pointer w-full text-center pt-1">
                            View all {bookings.length} bookings →
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === "bookings" && (
                <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-[#cf814d] mb-5 flex items-center gap-2">
                    <FiCalendar size={18} /> My Bookings
                  </h2>
                  {bookings.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-14 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center mb-4">
                        <FiCalendar size={28} className="text-[#cf814d]" />
                      </div>
                      <p className="text-white font-semibold mb-1">No Bookings Found</p>
                      <p className="text-gray-500 text-sm mb-5">You haven't booked any appointments yet.</p>
                      <button onClick={() => window.location.href = '/booking'}
                        className="px-6 py-2.5 rounded-xl bg-[#cf814d] text-black text-sm font-semibold hover:bg-[#e6a45f] transition-all cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((b) => (
                        <div key={b._id} className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 hover:border-[#cf814d]/30 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-semibold text-white">{b.services?.join(", ")}</p>
                              <p className="text-sm text-gray-500 mt-0.5">with {b.staff}</p>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusColor(b.status)}`}>
                              {b.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                            {[
                              { label: "Name", value: b.name },
                              { label: "Phone", value: b.phone },
                              { label: "Date", value: new Date(b.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) },
                              { label: "Time", value: b.time },
                              { label: "Email", value: b.email },
                            ].map((item) => (
                              <div key={item.label} className="bg-[#111] rounded-lg p-2.5 border border-white/5">
                                <p className="text-xs text-gray-500">{item.label}</p>
                                <p className="text-sm text-white mt-0.5 truncate">{item.value}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleCancelClick(b._id)}
                              className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-sm font-medium transition-all cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleRescheduleClick(b._id)}
                              className="px-4 py-2 rounded-lg bg-[#cf814d]/10 border border-[#cf814d]/20 text-[#cf814d] hover:bg-[#cf814d]/20 text-sm font-medium transition-all cursor-pointer"
                            >
                              Reschedule
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Personal Info Tab */}
              {activeTab === "personal" && (
                <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-[#cf814d] mb-5 flex items-center gap-2">
                    <FiInfo size={18} /> Personal Information
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "Full Name", value: profile.name },
                      { label: "Email Address", value: profile.email },
                      { label: "Phone Number", value: profile.phone || "Not set — update via Edit Profile" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">{field.label}</label>
                        <input
                          type="text"
                          value={field.value || ""}
                          disabled
                          className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-300 text-sm focus:outline-none"
                        />
                      </div>
                    ))}
                    <button onClick={() => setShowEditProfile(true)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 text-[#cf814d] hover:bg-[#cf814d]/20 text-sm font-medium transition-all cursor-pointer">
                      <FiEdit2 size={13} /> Edit Profile
                    </button>
                  </div>
                </div>
              )}

              {/* Password Tab */}
              {activeTab === "password" && (
                <div className="bg-[#111] border border-[#cf814d]/20 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-[#cf814d] mb-5 flex items-center gap-2">
                    <FiLock size={18} /> Change Password
                  </h2>
                  <div className="space-y-4 max-w-md">
                    {[
                      { label: "Current Password", value: oldPassword, setter: setOldPassword, key: 'old' },
                      { label: "New Password", value: newPassword, setter: setNewPassword, key: 'new' },
                      { label: "Confirm New Password", value: confirmPassword, setter: setConfirmPassword, key: 'confirm' },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">{field.label}</label>
                        <div className="relative">
                          <input
                            type={showPasswords[field.key] ? 'text' : 'password'}
                            value={field.value}
                            onChange={(e) => field.setter(e.target.value)}
                            className="w-full px-4 py-3 pr-11 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm transition-colors"
                          />
                          <button type="button"
                            onClick={() => setShowPasswords(prev => ({ ...prev, [field.key]: !prev[field.key] }))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#cf814d] transition-colors cursor-pointer">
                            {showPasswords[field.key] ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                          </button>
                        </div>
                      </div>
                    ))}
                    {passwordError && (
                      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                        <FiAlertCircle size={14} className="text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-xs">{passwordError}</p>
                      </div>
                    )}
                    <button
                      onClick={passwordChange}
                      className="w-full py-3 rounded-xl bg-[#cf814d] hover:bg-[#e6a45f] text-black font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(207,129,77,0.3)] cursor-pointer mt-2"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              )}

            </main>
          </div>
        </div>
      </div>

      {/* Cancel Popup */}
      {showCancelPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#111] p-7 rounded-2xl shadow-2xl max-w-sm w-full border border-[#cf814d]/30 mx-4">
            <h2 className="text-xl font-bold text-white mb-2">Cancel Booking?</h2>
            <p className="text-gray-400 text-sm mb-6">This action cannot be undone. Are you sure?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowCancelPopup(false)} className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-all cursor-pointer">
                Keep It
              </button>
              <button onClick={cancelBooking} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-400 text-white text-sm font-semibold transition-all cursor-pointer">
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Popup */}
      {showReschedule && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#111] p-7 rounded-2xl shadow-2xl max-w-sm w-full border border-[#cf814d]/30 mx-4">
            <h2 className="text-xl font-bold text-white mb-1">Reschedule Booking</h2>
            <p className="text-gray-400 text-sm mb-5">Pick a new date and time</p>
            <div className="space-y-3 mb-5">
              <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm focus:border-[#cf814d]/50 focus:outline-none" />
              <input type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm focus:border-[#cf814d]/50 focus:outline-none" />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowReschedulePopup(false)} className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-all cursor-pointer">
                Cancel
              </button>
              <button onClick={rescheduleBooking} className="flex-1 py-2.5 rounded-xl bg-[#cf814d] hover:bg-[#e6a45f] text-black text-sm font-semibold transition-all cursor-pointer">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Success */}
      {showPasswordSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#111] p-8 rounded-2xl shadow-2xl border border-[#cf814d]/30 text-center w-[90%] sm:w-80">
            <div className="w-14 h-14 rounded-full bg-[#cf814d] flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle size={28} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Password Updated!</h3>
            <p className="text-gray-400 text-sm">Your password has been changed successfully.</p>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#111] p-7 rounded-2xl shadow-2xl border border-[#cf814d]/30 w-[90%] sm:w-96 mx-4">
            <h2 className="text-xl font-bold text-white mb-5">Edit Profile</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Full Name</label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Phone Number</label>
                <input type="tel" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="+1 000 0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Profile Photo</label>
                <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-[#cf814d]/30 cursor-pointer transition-colors">
                  <span className="text-xs text-[#cf814d] bg-[#cf814d]/10 border border-[#cf814d]/20 px-3 py-1.5 rounded-lg font-medium">Choose File</span>
                  <span className="text-sm text-gray-500 truncate">{newImage ? newImage.name : "No file chosen"}</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                {preview && (
                  <div className="flex justify-center mt-3">
                    <img src={preview} alt="preview" className="w-20 h-20 rounded-full border-2 border-[#cf814d] object-cover" />
                  </div>
                )}
              </div>
              {profileError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <FiAlertCircle size={14} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-xs">{profileError}</p>
                </div>
              )}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowEditProfile(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-all cursor-pointer">
                  Cancel
                </button>
                <button type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#cf814d] hover:bg-[#e6a45f] text-black text-sm font-semibold transition-all cursor-pointer">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfilePage;
