import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

function Settings() {
  const [admin, setAdmin] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("adminToken");

    try {
      const res = await axios.put(
        `${url}/admin/updateProfile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAdmin(res.data.admin);
      setShowModal(false);
    } catch (error) {
      console.error("Update failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const getAdminProfile = async () => {
      const url = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("adminToken");

      try {
        const res = await axios.get(`${url}/admin/adminProfile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdmin(res.data.admin);
        setFormData(res.data.admin);
      } catch (error) {
        console.error("Fetch profile failed:", error.response?.data || error.message);
      }
    };
    getAdminProfile();
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
        ⚙️ Admin Settings
      </h1>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-10">
        <h2 className="text-lg font-semibold mb-6 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow">
          👤 Profile Information
        </h2>

        <div className="flex items-center gap-6">
          <img
            src={
              admin.image ||
              "https://i.pinimg.com/736x/f2/e4/04/f2e4041b51ff11adf244e30b60ba1e4c.jpg"
            }
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md object-cover"
          />
          <div>
            <p className="text-xl font-bold text-gray-800">{admin.name}</p>
            <p className="text-gray-600">{admin.email}</p>
            <p className="text-gray-600">{admin.phone}</p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 cursor-pointer px-5 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          ✏️ Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-10">
        <h2 className="text-lg font-semibold mb-6 inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow">
          🔑 Password & Security
        </h2>

        <input
          type="password"
          className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
          placeholder="Current Password"
        />
        <input
          type="password"
          className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
          placeholder="New Password"
        />
        <input
          type="password"
          className="w-full border rounded-xl p-3 mb-6 focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
          placeholder="Confirm New Password"
        />

        <button className="w-full cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl shadow hover:opacity-90 transition font-medium">
          🔒 Update Password
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6">
        <h2 className="text-lg font-semibold mb-6 text-red-600">
          ⚠️ Danger Zone
        </h2>
        <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-xl shadow hover:opacity-90 transition font-medium cursor-pointer">
          <FaTrashAlt /> Delete Account
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">✏️ Edit Profile</h2>

            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              placeholder="Email"
            />
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              placeholder="Phone"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 cursor-pointer py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 cursor-pointer py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;