import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
  const navigate = useNavigate();
  const [showEditProfile, setShowEditProfile] = useState(false); // ✅ new state
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // handle function for booking cancel
  const handleCancelClick = (id) => {
    setSelectedBookingId(id);
    setShowCancelPopup(true);
  };

  // handle function for booking reshedule
  const handleRescheduleClick = (id) => {
    setBookingIdReseduled(id);
    setShowReschedulePopup(true);
  };

  // useEffect for get userInfo
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const token = localStorage.getItem("token");
        const res = await axios.get(`${url}/users/userInfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        setUser({
          ...res.data.user,
          image: res.data.image,
        });
        setNewName(res.data.user.name || "");
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUserInfo();
  }, []);

  // useEffect for get bookings
  useEffect(() => {
    const getBookingData = async () => {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${url}/bookings/getBookings`);
        setBooking(res.data.bookings);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    getBookingData();
  }, [bookings]);

  // booking cancel API call
  const cancelBooking = async (id) => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      await axios.delete(`${url}/bookings/cancelBooking/${selectedBookingId}`);
      setBooking((prev) =>
        prev.map((b) =>
          b._id === selectedBookingId ? { ...b, status: "Cancelled" } : b
        )
      );
    } catch (error) {
      console.error("Error cancelling booking:", error);
    } finally {
      setShowCancelPopup(false);
      setSelectedBookingId(null);
    }
  }

  // Reshedule booking API call
  const rescheduleBooking = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      await axios.put(`${url}/bookings/rescheduledBooking/${bookingIdReseduled}`, {
        date: newDate,
        time: newTime,
        status: "Rescheduled"
      });

      setBooking((prev) =>
        prev.map((b) =>
          b._id === bookingIdReseduled
            ? { ...b, date: newDate, time: newTime, status: "Rescheduled" }
            : b
        )
      );

      setShowReschedulePopup(false);
      setBookingIdReseduled(null);
      setNewDate("");
      setNewTime("");
    } catch (error) {
      console.error("Error rescheduling booking:", error);
    }
  };

  // Password change function and API call
  const passwordChange = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");

      await axios.put(
        `${url}/users/changePassword`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShowPasswordSuccess(true);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error changing password:", error);
      alert(error.response?.data?.message || "Failed to update password ❌");
    }
  }

  // useEffect for close popup automatic
  useEffect(() => {
    if (showPasswordSuccess) {
      const timer = setTimeout(() => {
        setShowPasswordSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPasswordSuccess]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔹 Handle profile update
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", newName);
      if (newImage) {
        formData.append("image", newImage);
      }

      const res = await axios.put(`${url}/users/update-profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUser((prev) => ({
        ...prev,
        name: res.data.user.name,
        avatar: res.data.image || prev.avatar,
      }));

      setShowEditProfile(false);
      setPreview(null);
      setNewImage(null);
      setNewName(""); 
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error.response?.data?.message || "Failed to update profile ❌");
    }
  };



  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const profile = {
    name: user.name,
    email: user.email,
    phone: bookings.length > 0 ? bookings[0].phone : "Not available",
    avatar:
      user.image || 
      "https://i.pinimg.com/474x/94/a6/66/94a666d648af0de5adb025828cd998a0.jpg",
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white pt-20 pb-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-14 tracking-widest text-[#cf814d]">
            User Profile
          </h2>
          <div className="flex flex-wrap justify-center gap-5 mb-14">
            {["overview", "bookings", "personal", "password"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab
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
                      : "Change Password"}
              </button>
            ))}
          </div>

          <div className="space-y-14">
            {activeTab === "overview" && (
              <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] p-10 rounded-3xl shadow-2xl border border-[#cf814d] text-center backdrop-blur-sm">
                <div className="w-36 h-36 mx-auto mb-6">
                  <img
                    src={profile.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full border-4 border-[#cf814d] shadow-lg"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2">{profile.name}</h3>
                <p className="text-gray-300 mb-6">{profile.email}</p>
                <div className="flex justify-center gap-5">
                  <div onClick={() => setShowEditProfile(true)} className="bg-[#cf814d] px-7 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_#cf814d] transition-all cursor-pointer">
                    Edit Profile
                  </div>
                  <div onClick={handleLogout} className="bg-red-600 px-7 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_red] transition-all cursor-pointer">
                    Logout
                  </div>
                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="max-w-4xl mx-auto space-y-6">
                {bookings.map((b) => (
                  <div
                    key={b._id || b.id}
                    className="bg-gradient-to-r from-[#1b1b1b] to-[#2c2c2c] p-6 rounded-3xl shadow-2xl border border-[#cf814d] transition-all hover:shadow-[0_0_30px_rgba(207,129,77,0.5)]"
                  >
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Name:</span> {b.name}
                    </p>
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Email:</span> {b.email}
                    </p>
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Phone:</span> {b.phone}
                    </p>
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Date:</span>{" "}
                      {new Date(b.date).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      at{" "}
                      {b.time}
                    </p>
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Services:</span> {b.services.join(", ")}
                    </p>
                    <p className="mb-1 text-lg">
                      <span className="font-semibold">Staff:</span> {b.staff}
                    </p>
                    {b.status && (
                      <p className="mb-3 text-lg">
                        <span className="font-semibold">Status:</span>{" "}
                        <span
                          className={`${b.status === "Confirmed"
                            ? "text-green-400"
                            : b.status === "Completed"
                              ? "text-gray-400"
                              : "text-red-500"
                            }`}
                        >
                          {b.status}
                        </span>
                      </p>
                    )}

                    <div className="flex gap-4">
                      <div onClick={() => handleCancelClick(b._id)} className="bg-[#cf814d] px-5 py-1 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_#cf814d] cursor-pointer">
                        Cancel
                      </div>
                      <div onClick={() => handleRescheduleClick(b._id)} className="bg-gray-700 px-5 py-1 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_gray] cursor-pointer">
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

            {activeTab === "password" && (
              <div className="max-w-md mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#2b2b2b] p-10 rounded-3xl shadow-2xl border border-[#cf814d]">
                <h3 className="text-2xl font-bold mb-6 text-[#cf814d]">Change Password</h3>

                <input
                  type="password"
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full mb-5 px-5 py-3 rounded-2xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:outline-none shadow-inner text-lg"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mb-5 px-5 py-3 rounded-2xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:outline-none shadow-inner text-lg"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mb-5 px-5 py-3 rounded-2xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:outline-none shadow-inner text-lg"
                />

                <div
                  onClick={passwordChange}
                  className="w-full bg-[#cf814d] py-3 rounded-full font-bold hover:shadow-[0_0_25px_#cf814d] transition-all text-center cursor-pointer"
                >
                  Update Password
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      {showCancelPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-[#cf814d]">
            <h2 className="text-2xl font-bold text-[#cf814d] mb-4">Cancel Booking</h2>
            <p className="text-gray-300 mb-6">Are you sure you want to cancel this booking?</p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowCancelPopup(false)}
                className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 transition-all"
              >
                No
              </button>
              <button
                onClick={cancelBooking}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition-all"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showReschedule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl max-w-sm w-full border border-[#cf814d]">
            <h2 className="text-2xl font-bold text-[#cf814d] mb-4">Reschedule Booking</h2>
            <p className="text-gray-300 mb-4">Select a new date and time:</p>

            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded-lg bg-[#2b2b2b] border border-gray-600 text-white"
            />
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full mb-6 px-4 py-2 rounded-lg bg-[#2b2b2b] border border-gray-600 text-white"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowReschedulePopup(false)}
                className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={rescheduleBooking}
                className="px-4 py-2 rounded-xl bg-[#cf814d] hover:bg-[#e6a45f] text-black transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showPasswordSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-[#111] to-[#1c1c1c] p-8 rounded-2xl shadow-2xl border border-[#cf814d]/40 text-center animate-fadeIn w-[90%] sm:w-[400px]">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#cf814d] text-black mb-4 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#cf814d] mb-2">Password Changed!</h3>
            <p className="text-gray-300 mb-2">
              Your password has been updated successfully 🔐
            </p>
            <p className="text-sm text-gray-500">(This will close automatically)</p>
          </div>
        </div>
      )}

     {showEditProfile && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
    <div className="bg-gradient-to-br from-[#111] to-[#1c1c1c] p-8 rounded-2xl shadow-2xl border border-[#cf814d]/40 w-[90%] sm:w-[400px] animate-fadeIn">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#cf814d] mb-6 text-center">
        Edit Profile
      </h2>

      <form onSubmit={handleProfileUpdate} className="space-y-5">
        {/* Name Input */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-gray-600 focus:border-[#cf814d] focus:ring-2 focus:ring-[#cf814d]/40 focus:outline-none shadow-inner text-white placeholder-gray-500 text-lg"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Profile Image</label>
          <div className="flex items-center justify-between bg-[#1c1c1c] border border-gray-600 rounded-xl px-3 py-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-gray-400 file:mr-3 file:py-2 file:px-4 
                        file:rounded-md file:border-0 
                        file:text-sm file:font-semibold
                        file:bg-[#cf814d] file:text-black
                        hover:file:bg-[#e6a45f] cursor-pointer"
            />
          </div>

          {preview && (
            <div className="flex justify-center mt-4">
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 rounded-full border-2 border-[#cf814d] object-cover shadow-md"
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => setShowEditProfile(false)}
            className="px-5 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl bg-[#cf814d] hover:bg-[#e6a45f] text-black font-semibold transition-all shadow-md"
          >
            Save
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
