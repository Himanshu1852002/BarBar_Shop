import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default:'Barbar'
  },
  services:{
    type: [String],
    required: true
  },
  image:{
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
