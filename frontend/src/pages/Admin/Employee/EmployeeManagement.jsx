import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      role: "Barber",
      services: ["Haircut", "Shave"],
      image: "https://randomuser.me/api/portraits/men/32.jpg", // demo image
    },
    {
      id: 2,
      name: "Neha Verma",
      email: "neha@example.com",
      phone: "9876500000",
      role: "Stylist",
      services: ["Hair Styling", "Color"],
      image: "https://randomuser.me/api/portraits/women/44.jpg", // demo image
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Barber",
    services: [],
    image: null, // file store karega
  });
  const [preview, setPreview] = useState(null); // preview url

  const roles = ["Stylist", "Barber", "Receptionist"];
  const allServices = ["Haircut", "Shave", "Hair Styling", "Color", "Massage"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file)); // preview ke liye
    }
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // agar edit kar rahe ho
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id
            ? {
                ...formData,
                id: emp.id,
                image: preview || emp.image, // frontend demo me preview hi dikhayenge
              }
            : emp
        )
      );
    } else {
      setEmployees((prev) => [
        ...prev,
        {
          ...formData,
          id: Date.now(),
          image: preview, // filhal preview show karenge
        },
      ]);
    }

    // modal reset
    setShowModal(false);
    setEditingEmployee(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "Barber",
      services: [],
      image: null,
    });
    setPreview(null);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData({ ...employee, image: null }); // image file ko null rakhenge
    setPreview(employee.image); // purani image preview me dikhayenge
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          👨‍💼 Employee Management
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:opacity-90 transition"
        >
          <FaPlus /> Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="bg-white/90 backdrop-blur shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Phone</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold">Services</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr
                key={emp.id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                {/* Image */}
                <td className="p-4">
                  <img
                    src={emp.image || "https://via.placeholder.com/50"}
                    alt={emp.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                </td>
                <td className="p-4 font-medium">{emp.name}</td>
                <td className="p-4">{emp.email}</td>
                <td className="p-4">{emp.phone}</td>
                <td className="p-4">{emp.role}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {emp.services.map((service, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 flex justify-center gap-4">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => {
                setShowModal(false);
                setEditingEmployee(null);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-5 text-gray-800">
              {editingEmployee ? "Edit Employee" : "Add Employee"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              />

              {/* Preview */}
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border mx-auto"
                />
              )}

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                required
              />

              {/* Role */}
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
              >
                {roles.map((role, idx) => (
                  <option key={idx} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              {/* Services */}
              <div>
                <label className="font-medium text-gray-700">Services:</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {allServices.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="accent-indigo-600"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingEmployee(null);
                  }}
                  className="px-5 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition"
                >
                  {editingEmployee ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;
