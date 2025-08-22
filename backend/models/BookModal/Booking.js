import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  services: { type: [String], required: true }, 
  staff: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, default: "", },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
