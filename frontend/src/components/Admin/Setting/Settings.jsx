// Settings.jsx
import { useState } from "react";
import { FaCamera, FaTrashAlt } from "react-icons/fa";

function Settings() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
        ⚙️ Admin Settings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-6 inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow">
            👤 Profile Settings
          </h2>

          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/100"
                alt="profile"
                className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700 transition">
                <FaCamera size={14} />
              </button>
            </div>
            <button className="px-5 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition">
              Change Photo
            </button>
          </div>

          <input
            className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            placeholder="Full Name"
          />
          <input
            className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            placeholder="Email"
          />
          <input
            className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            placeholder="Phone"
          />

          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl shadow hover:opacity-90 transition font-medium">
            💾 Save Changes
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 p-6">
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

          <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl shadow hover:opacity-90 transition font-medium">
            🔒 Update Password
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-6 inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg shadow">
            🔔 Notifications
          </h2>

          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-700">Email Notifications</span>
            <input type="checkbox" className="w-5 h-5 accent-purple-500" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-gray-700">SMS Notifications</span>
            <input type="checkbox" className="w-5 h-5 accent-purple-500" />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Booking Reminders</span>
            <input type="checkbox" className="w-5 h-5 accent-purple-500" />
          </div>
        </div>
      </div>
      <div className="mt-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border-2 border-red-200 p-6">
        <h2 className="text-lg font-semibold mb-6 text-red-600">
          ⚠️ Danger Zone
        </h2>
        <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-xl shadow hover:opacity-90 transition font-medium">
          <FaTrashAlt /> Delete Account
        </button>
      </div>
    </div>
  );
}

export default Settings;
