import contactus_img from '../../assets/contactus.jpg';
import contact_back from '../../assets/contact_back.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaPinterest, FaWifi, FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useState } from 'react';

const Contactus = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <section className="relative w-full flex flex-col justify-center items-center overflow-hidden pt-55">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactus_img})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
        <div className="text-center text-white z-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase">
            Contact Us
          </h2>
          <div className="flex items-center justify-center mt-4 mb-1">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-24 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded-2xl shadow-lg">
              <FaLocationDot size={24} />
            </div>
            <p className="text-sm text-gray-400 uppercase">Our Address</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1">100 Mainstreet Center, NY</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded-2xl shadow-lg">
              <FaPhone size={24} />
            </div>
            <p className="text-sm text-gray-400 uppercase">Phone Number</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1 text-[#cf814d]">+1 333 9296</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded-2xl shadow-lg">
              <SiGmail size={24} />
            </div>
            <p className="text-sm text-gray-400 uppercase">Email Address</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1">contact@support.com</h3>
          </div>
        </div>
      </section>
      <section className="relative w-full flex items-center justify-center py-16 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${contact_back})` }}
        >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="w-full max-w-2xl border border-[#cf814d] bg-black/60 backdrop-blur-md px-6 sm:px-10 py-12 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-white">
              Message Us
            </h2>
            <div className="flex items-center justify-center mt-4">
              <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
              <div className="h-[2px] w-24 sm:w-36 bg-[#cf814d]" />
              <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
            </div>
          </div>
          <p className="text-gray-300 text-center mb-10">
            Got any questions? Please don’t hesitate to send us a message.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-[#cf814d] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-[#cf814d] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] transition"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="bg-transparent border border-[#cf814d] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] transition"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-transparent border border-[#cf814d] rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] transition resize-none"
            ></textarea>

            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                id="confirm"
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-5 h-5 accent-[#cf814d] cursor-pointer"
              />
              <label htmlFor="confirm" className="text-gray-300 text-sm">
                I confirm this message is genuine and acceptable.
              </label>
            </div>

            <button
              type="submit"
              disabled={!isChecked}
              className={`mt-6 tracking-widest text-sm sm:text-base py-3 px-8 rounded-lg font-bold transition duration-300 self-center 
                ${isChecked
                  ? 'bg-[#cf814d] text-white hover:shadow-[0_0_25px_#cf814d] cursor-pointer'
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                }`}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
      <section className="bg-black flex flex-col justify-center items-center gap-6 py-12 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-widest uppercase">
          Follow Us
        </h2>
        <ul className="flex flex-wrap gap-6 justify-center items-center text-white">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaWifi].map((Icon, i) => (
            <li
              key={i}
              className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] rounded-full hover:bg-black hover:text-[#cf814d] transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            >
              <Icon size={20} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Contactus;
