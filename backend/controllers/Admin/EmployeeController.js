import Employee from "../../models/Admin/EmployeeModal/Employee.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

export const upload = multer({ storage });

const addEmployee = async (req, res) => {
  const { name, email, phone, role, services } = req.body;

  try {
    const newEmployee = new Employee({
      name,
      email,
      phone,
      role,
      services,
      image: req.file ? `/uploads/${req.file.filename}` : null
    });

    await newEmployee.save();
    res.status(201).json({
      message: "Employee added successfully",
      employee: newEmployee
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding employee",
      error: error.message
    });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      message: "Employees fetched successfully",
      employees
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching employees",
      error: error.message
    });
  }
};

const editEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, role, services } = req.body;

    const updateFields = {
      name,
      email,
      phone,
      role,
      services,
    };

    if (req.file) {
      updateFields.image = `/uploads/${req.file.filename}`;
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      error: error.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error: error.message,
    });
  }
};


export { addEmployee, getEmployees, editEmployee, deleteEmployee };
