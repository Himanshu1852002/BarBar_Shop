import wallImg from '../../assets/wall2.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaFacebookF } from "react-icons/fa";
import { GiScissors } from 'react-icons/gi';

const hours = [
  { day: "Mon - Tue", time: "7:30AM - 6:30PM" },
  { day: "Wed - Thu", time: "8:00AM - 7:00PM" },
  { day: "Friday", time: "8:30AM - 8:30PM" },
  { day: "Sat - Sun", time: "9:30AM - 5:30PM" },
];

const location = [
  { label: "Address", value: "100 Mainstreet Center, NY", icon: <FaMapMarkerAlt /> },
  { label: "Phone", value: "+91 22 2222 6666", icon: <FaPhoneAlt /> },
  { label: "Email", value: "contact@bluxcut.com", icon: <FaEnvelope /> },
];

const AddressTime = () => {
  return (
    <section className="relative py-20 px-4 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wallImg})` }}>
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Find Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
            Hours & Location
          </h2>
          <div className="flex items-center justify-center mt-5">
            <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            <GiScissors className="text-[#cf814d] mx-3" size={18} />
            <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hours */}
          <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <FaClock className="text-[#cf814d]" size={16} />
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">We're Open</h3>
            </div>
            <div className="space-y-1">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <span className="text-gray-400 text-sm">{day}</span>
                  <span className="text-[#cf814d] font-semibold text-sm tracking-wider">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <FaMapMarkerAlt className="text-[#cf814d]" size={16} />
              <h3 className="text-lg font-bold uppercase tracking-widest text-white">Location</h3>
            </div>
            <div className="space-y-1">
              {location.map(({ label, value, icon }) => (
                <div key={label} className="flex items-start justify-between py-3 border-b border-white/5 last:border-0 gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
                    <span className="text-[#cf814d]">{icon}</span>
                    {label}
                  </div>
                  <span className="text-[#cf814d] font-semibold text-sm text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              {[FaInstagram, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center text-[#cf814d] hover:bg-[#cf814d] hover:text-black transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressTime;
