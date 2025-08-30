import booking_img from '../../assets/book_img.jpg';
import axios from "axios";
import { useState } from 'react';
import { DotLoader } from "react-spinners";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.jpg';

const services = {
  Haircuts: ['Regular Haircut', 'Scissors Haircut', 'Kids Haircut'],
  Shave: ['Head Shave', 'Royal Shave', 'Royal Head Shave', 'Beard Trim No Shave', 'Beard Trim Shave', 'Beard Shave Up'],
  Facial: ['Deep Pore Cleansing', 'Aromatherapy Facial', 'Acne Problem Facial', 'European Facial', 'Glycolic Peel Facial'],
  Package: ['Haircut + Shave', 'Haircut + Beard Trim', 'Haircut + Beard Trim Shave', 'Haircut + Beard Shape Up'],
};

const staff = [
  { name: 'Steven', img: team1 },
  { name: 'Huey', img: team2 },
  { name: 'Harry', img: team3 },
  { name: 'Axe', img: team4 },
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM',
];

const Booking = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState('Steven');
  const [selectedTime, setSelectedTime] = useState('8:00 AM');
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    setLoading(true);
    try {
      const bookingData = {
        services: selectedServices,
        staff: selectedStaff,
        date: selectedDate,
        time: selectedTime,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const res = await axios.post(`${url}/bookings/createBookings`, bookingData);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

      setSelectedServices([]);
      setSelectedDate(null);
      setSelectedTime("8:00 AM");
      setSelectedStaff("Steven");
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
    finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      selectedServices.length > 0 &&
      selectedDate !== null &&
      selectedTime.trim() !== "" &&
      selectedStaff.trim() !== ""
    );
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-[#111] to-[#1c1c1c] p-8 rounded-2xl shadow-2xl border border-[#cf814d]/40 text-center animate-fadeIn w-[90%] sm:w-[400px]">

            {/* ✅ Success Icon */}
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

            {/* ✅ Title */}
            <h3 className="text-2xl font-bold text-[#cf814d] mb-2">Booking Confirmed!</h3>
            <p className="text-gray-300 mb-6">
              Thank you <span className="text-white font-semibold">{formData.name || "Guest"}</span>,
              your appointment has been booked successfully 🎉
            </p>

            {/* ✅ Close button (optional, auto-close to rahega) */}
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-[#cf814d] text-black rounded-lg font-semibold hover:shadow-[0_0_15px_#cf814d] transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}


      <section className="relative w-full min-h-120 flex flex-col justify-start items-center overflow-hidden pt-40 md:pt-40">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${booking_img})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        <div className="text-center text-white z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.25em] uppercase">
            Booking
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-24 sm:w-40 md:w-52 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-14 px-6 lg:px-20">
        <h2 className="text-xl uppercase tracking-[0.3em] mb-8 text-center">
          Choose Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {Object.entries(services).map(([category, items]) => (
            <div key={category} className="bg-[#111] p-5 rounded-xl shadow-md border border-[#2a2a2a] hover:border-[#cf814d] transition-all">
              <h3 className="uppercase tracking-widest text-sm bg-[#7a4a25] px-3 py-1 inline-block rounded mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <input type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="accent-[#cf814d] w-4 h-4" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h2 className="text-xl uppercase tracking-[0.3em] mb-6 text-center">Choose Staff</h2>
        <div className="flex gap-6 mb-14 flex-wrap justify-center">
          {staff.map(({ name, img }) => (
            <div
              key={name}
              onClick={() => setSelectedStaff(name)}
              className={`cursor-pointer text-center transition-all duration-300 w-28 p-2 rounded-xl shadow-md 
                ${selectedStaff === name
                  ? 'border-4 border-[#cf814d] bg-[#1c1c1c]'
                  : 'border border-[#333] hover:border-[#cf814d] opacity-80'
                }`}
            >
              <img src={img} alt={name} className="w-full h-28 object-cover mb-2 rounded-lg hover:scale-105 transition-transform" />
              <p className="text-sm">{name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111] to-[#1c1c1c] border border-[#2a2a2a] shadow-lg">
            <h2 className="text-xl font-semibold uppercase tracking-widest mb-4 text-[#cf814d]">
              Select Date
            </h2>
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-full bg-[#181818] border border-[#333] px-5 py-3 rounded-xl 
                   text-white focus:outline-none focus:ring-2 focus:ring-[#cf814d] 
                   placeholder-gray-500 transition-all duration-300"
                placeholderText="Pick your date"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111] to-[#1c1c1c] border border-[#2a2a2a] shadow-lg">
            <h2 className="text-xl font-semibold uppercase tracking-widest mb-4 text-[#cf814d]">
              Select Time
            </h2>
            <div className="flex flex-wrap gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 shadow-sm
            ${selectedTime === time
                      ? 'bg-[#cf814d] text-black font-semibold border-[#cf814d] scale-105'
                      : 'bg-[#181818] text-gray-300 border-[#333] hover:border-[#cf814d] hover:text-white hover:scale-105'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>
      <section className="bg-black text-white py-14 px-6 lg:px-20">
        <h2 className="text-xl uppercase tracking-[0.3em] mb-10 flex items-center gap-3 justify-center">
          Your Details <span className="h-[1px] w-14 bg-[#cf814d]"></span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                name='name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                name='phone'
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="6"
              name='message'
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
            ></textarea>
          </div>
          <div className="text-center flex items-center justify-center">
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`mt-10 font-semibold tracking-widest px-10 py-3 uppercase rounded-lg transition-all duration-300 
    ${!isFormValid() || loading
                  ? "bg-gray-600 text-gray-300 cursor-not-allowed"   // disabled style
                  : "bg-[#cf814d] text-white hover:shadow-[0_0_25px_#cf814d] cursor-pointer"}`}
            >
              {loading ? <DotLoader size={20} color="#fff" /> :
                "Submit Booking"}
            </button>
          </div>
        </form>

      </section>
    </>
  );
};

export default Booking;
