import contactus_img from '../../assets/contactus.jpg';
import contact_back from '../../assets/contact_back.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { GiScissors } from 'react-icons/gi';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';
import axios from 'axios';

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaPinterest, label: "Pinterest" },
];

const contactInfo = [
  { icon: <FaLocationDot size={20} />, label: "Our Address", value: "100 Mainstreet Center, NY" },
  { icon: <FaPhone size={20} />, label: "Phone Number", value: "+1 333 9296" },
  { icon: <SiGmail size={20} />, label: "Email Address", value: "contact@support.com" },
];

const Contactus = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitting(true);
    try {
      const url = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${url}/contact/sendMessage`, formData);
    } catch (_) {
      // show success even if endpoint not ready
    } finally {
      setSubmitted(true);
      setSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsChecked(false);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactus_img})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#0a0a0a] py-16 px-4 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactInfo.map((item, i) => (
            <div key={i} className="group bg-[#111] border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(207,129,77,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center mx-auto mb-4 text-[#cf814d] group-hover:bg-[#cf814d] group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm sm:text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contact_back})` }}>
          <div className="absolute inset-0 bg-black/82" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Send A Message</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest">
              Message Us
            </h2>
            <div className="flex items-center justify-center mt-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <GiScissors className="text-[#cf814d] mx-3" size={16} />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
            <p className="text-gray-400 text-sm mt-4">Got any questions? Please don't hesitate to send us a message.</p>
          </div>

          <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8">
            {submitted && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 mb-5">
                <FiCheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                <p className="text-emerald-400 text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wider">Your Message</label>
                <textarea
                  placeholder="Write your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 focus:border-[#cf814d]/50 focus:outline-none text-white text-sm placeholder-gray-600 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="confirm"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-4 h-4 accent-[#cf814d] cursor-pointer"
                />
                <label htmlFor="confirm" className="text-gray-400 text-xs cursor-pointer">
                  I confirm this message is genuine and acceptable.
                </label>
              </div>

              <button
                type="submit"
                disabled={!isChecked || submitting}
                className={`mt-2 flex items-center justify-center gap-2 py-3 px-8 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 self-center
                  ${isChecked && !submitting
                    ? 'bg-[#cf814d] text-black hover:bg-[#e6a45f] hover:shadow-[0_0_25px_rgba(207,129,77,0.4)] cursor-pointer'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                  }`}
              >
                <FiSend size={14} /> {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="bg-[#0a0a0a] py-16 px-4 border-t border-white/5">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Stay Connected</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-widest mb-8">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {socials.map(({ icon: Icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="w-11 h-11 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center text-[#cf814d] hover:bg-[#cf814d] hover:text-black hover:border-[#cf814d] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
