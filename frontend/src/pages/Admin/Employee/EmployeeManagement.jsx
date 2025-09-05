import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Barber",
    services: [],
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const roles = ["Stylist", "Barber", "Receptionist"];
  const allServices = ["Haircut", "Shave", "Hair Styling", "Color", "Massage"];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("role", formData.role);
      formData.services.forEach((s) => form.append("services", s));
      if (formData.image) {
        form.append("image", formData.image);
      }

      let res;
      if (editingEmployee) {
        res = await axios.put(`${url}/employees/editEmployee/${editingEmployee._id}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setEmployees((prev) =>
          prev.map((emp) => (emp._id === res.data.employee._id ? res.data.employee : emp))
        );
      } else {
        res = await axios.post(`${url}/employees/addEmployee`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setEmployees((prev) => [...prev, res.data.employee]);
      }

      // Reset
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      role: employee.role,
      services: employee.services,
      image: null,
    });
    setPreview(`http://localhost:5000${employee.image}`);
    setShowModal(true);
  };


  const handleDelete = async (id) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      await axios.delete(`${url}/employees/deleteEmployee/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };


  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const getEmployees = async () => {
      try {
        const response = await axios.get(`${url}/employees/getEmployees`);
        setEmployees(response.data.employees)
      } catch (error) {
        console.error("Error get employee:", error);
      }
    }
    getEmployees()
  }, [])

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
                className={`${idx % 2 === 0 ? "bg-gray-50/60" : "bg-white"
                  } hover:bg-indigo-50 transition`}
              >
                {/* Image */}
                <td className="p-4">
                  <img
                    src={`http://localhost:5000${emp.image}`}
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
                    onClick={() => handleDelete(emp._id)}
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
