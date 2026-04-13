import booking_img from '../../assets/book_img.jpg';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLoader } from "react-spinners";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.jpg';
import { GiScissors } from 'react-icons/gi';
import { FiCheck, FiCheckCircle, FiCalendar, FiClock, FiUser, FiMail, FiPhone, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';

const services = {
  Haircuts: ['Regular Haircut', 'Scissors Haircut', 'Kids Haircut'],
  Shave: ['Head Shave', 'Royal Shave', 'Royal Head Shave', 'Beard Trim No Shave', 'Beard Trim Shave', 'Beard Shave Up'],
  Facial: ['Deep Pore Cleansing', 'Aromatherapy Facial', 'Acne Problem Facial', 'European Facial', 'Glycolic Peel Facial'],
  Package: ['Haircut + Shave', 'Haircut + Beard Trim', 'Haircut + Beard Trim Shave', 'Haircut + Beard Shape Up'],
};

const staff = [
  { name: 'Steven', role: 'Master Barber', img: team1 },
  { name: 'Huey', role: 'Senior Stylist', img: team2 },
  { name: 'Harry', role: 'Fade Specialist', img: team3 },
  { name: 'Axe', role: 'Style Artist', img: team4 },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM',
];

const Booking = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState('Steven');
  const [selectedTime, setSelectedTime] = useState('8:00 AM');
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [bookingError, setBookingError] = useState("");

  const [userLoading, setUserLoading] = useState(true);

  // Login check + auto-fill user info
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    const fetchUser = async () => {
      try {
        const url = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${url}/users/userInfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const u = res.data.user;
        setFormData((prev) => ({
          ...prev,
          name: u.name || "",
          email: u.email || "",
        }));
      } catch (_) {
        navigate("/");
      } finally {
        setUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    setLoading(true);
    try {
      await axios.post(`${url}/bookings/createBookings`, {
        services: selectedServices, staff: selectedStaff,
        date: selectedDate, time: selectedTime, ...formData,
      });
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/userProfile");
      }, 2500);
      setSelectedServices([]); setSelectedDate(null);
      setSelectedTime("8:00 AM"); setSelectedStaff("Steven");
      setFormData((prev) => ({ ...prev, phone: "", message: "" }));
    } catch (err) {
      setBookingError(err.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setTimeout(() => setLoading(false), 5000);
    }
  };

  const isFormValid = () =>
    formData.name.trim() && formData.email.trim() && formData.phone.trim() &&
    selectedServices.length > 0 && selectedDate && selectedTime && selectedStaff;

  const sectionHeader = (title, subtitle) => (
    <div className="text-center mb-10">
      <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-2 font-medium">{subtitle}</p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-widest">{title}</h2>
      <div className="flex items-center justify-center mt-4">
        <div className="h-[1px] w-12 bg-[#cf814d]/40" />
        <GiScissors className="text-[#cf814d] mx-3" size={16} />
        <div className="h-[1px] w-12 bg-[#cf814d]/40" />
      </div>
    </div>
  );

  if (userLoading) return (
    <div className="min-h-screen bg-[#0a0a0a] pt-16 px-4 md:px-10">
      <div className="h-[55vh] bg-[#111] animate-pulse rounded-b-2xl" />
      <div className="max-w-6xl mx-auto py-16 space-y-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-4 animate-pulse">
            <div className="h-5 w-40 bg-[#1a1a1a] rounded" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(4)].map((_, j) => <div key={j} className="h-24 bg-[#1a1a1a] rounded-xl" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#111] p-8 rounded-2xl shadow-2xl border border-[#cf814d]/30 text-center w-[90%] sm:w-96">
            <div className="w-14 h-14 rounded-full bg-[#cf814d] flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle size={28} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Booking Confirmed!</h3>
            <p className="text-gray-400 text-sm mb-5">
              Thank you <span className="text-white font-semibold">{formData.name || "Guest"}</span>, your appointment has been booked successfully!
            </p>
            <button onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-[#cf814d] text-black rounded-xl font-semibold text-sm hover:bg-[#e6a45f] transition-all cursor-pointer">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${booking_img})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Reserve Your Spot</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Book Appointment
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Booking</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-10">
        {sectionHeader("Choose Services", "Step 1")}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto">
          {Object.entries(services).map(([category, items]) => (
            <div key={category} className="bg-[#111] border border-white/5 hover:border-[#cf814d]/30 rounded-2xl p-3 sm:p-5 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-4 bg-[#cf814d] rounded-full" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((service) => (
                  <li key={service}
                    onClick={() => handleServiceChange(service)}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-all duration-200
                      ${selectedServices.includes(service)
                        ? 'bg-[#cf814d] border-[#cf814d]'
                        : 'border-white/20 group-hover:border-[#cf814d]/50'}`}>
                      {selectedServices.includes(service) && <FiCheck size={10} className="text-black" />}
                    </div>
                    <span className={`text-xs sm:text-sm transition-colors duration-200 leading-tight ${selectedServices.includes(service) ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selected Services Summary */}
        {selectedServices.length > 0 && (
          <div className="max-w-6xl mx-auto mt-5 bg-[#cf814d]/10 border border-[#cf814d]/20 rounded-xl px-5 py-3 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-[#cf814d] font-semibold uppercase tracking-wider mr-1">Selected:</span>
            {selectedServices.map((s) => (
              <span key={s} className="text-xs bg-[#cf814d] text-black font-semibold px-2.5 py-1 rounded-full">{s}</span>
            ))}
          </div>
        )}
      </section>

      {/* Staff */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-10 border-t border-white/5">
        {sectionHeader("Choose Staff", "Step 2")}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {staff.map(({ name, role, img }) => (
            <div key={name} onClick={() => setSelectedStaff(name)}
              className={`cursor-pointer text-center rounded-2xl overflow-hidden transition-all duration-300
                ${selectedStaff === name
                  ? 'ring-2 ring-[#cf814d] shadow-[0_0_20px_rgba(207,129,77,0.3)]'
                  : 'border border-white/5 hover:border-[#cf814d]/40 opacity-70 hover:opacity-100'}`}>
              <div className="h-32 sm:h-36 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="bg-[#111] p-2 sm:p-3">
                <p className="text-white text-sm font-semibold">{name}</p>
                <p className="text-[#cf814d] text-xs mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Date & Time */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-10 border-t border-white/5">
        {sectionHeader("Select Date & Time", "Step 3")}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FiCalendar className="text-[#cf814d]" size={18} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Pick a Date</h3>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="!w-full bg-[#1a1a1a] border border-white/5 px-4 py-3 rounded-xl text-white text-sm focus:outline-none focus:border-[#cf814d]/50 placeholder-gray-600 transition-colors"
              wrapperClassName="w-full"
              placeholderText="Select your date"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>

          {/* Time */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FiClock className="text-[#cf814d]" size={18} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Pick a Time</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((time) => (
                <button key={time} onClick={() => setSelectedTime(time)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer
                    ${selectedTime === time
                      ? 'bg-[#cf814d] text-black font-bold'
                      : 'bg-[#1a1a1a] text-gray-400 border border-white/5 hover:border-[#cf814d]/40 hover:text-white'}`}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-10 border-t border-white/5">
        {sectionHeader("Your Details", "Step 4")}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    <FiUser size={11} /> Full Name
                  </label>
                  <input type="text" placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors" />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                    <FiMail size={11} /> Email Address
                  </label>
                  <input type="email" placeholder="john@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors" />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                  <FiPhone size={11} /> Phone Number
                </label>
                <input type="tel" placeholder="+1 000 0000" value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors" />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5 uppercase tracking-wider">
                  <FiMessageSquare size={11} /> Message (Optional)
                </label>
                <textarea placeholder="Any special requests..." rows="4" value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors resize-none" />
              </div>

              {bookingError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <FiAlertCircle size={14} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-xs">{bookingError}</p>
                </div>
              )}
              <div className="pt-2 flex justify-center">
                <button type="submit" disabled={!isFormValid() || loading}
                  className={`flex items-center gap-2 px-10 py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300
                    ${isFormValid() && !loading
                      ? 'bg-[#cf814d] text-black hover:bg-[#e6a45f] hover:shadow-[0_0_25px_rgba(207,129,77,0.4)] cursor-pointer'
                      : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'}`}>
                  {loading ? <DotLoader size={18} color="#000" /> : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
