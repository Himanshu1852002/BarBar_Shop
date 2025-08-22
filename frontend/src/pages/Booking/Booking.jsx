import booking_img from '../../assets/book_img.jpg';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
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
  const [selectedStaff, setSelectedStaff] = useState('Steven');
  const [selectedTime, setSelectedTime] = useState('8:00 AM');

  return (
    <>
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
                    <input type="checkbox" className="accent-[#cf814d] w-4 h-4" />
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
          <div>
            <h2 className="text-lg uppercase tracking-widest mb-3">Select Date</h2>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-[#111] border border-[#cf814d] px-4 py-3 rounded-lg text-white focus:outline-none focus:border-[#e29d6d]"
              />
              <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cf814d]" />
            </div>
          </div>
          <div>
            <h2 className="text-lg uppercase tracking-widest mb-3">Select Time</h2>
            <div className="flex flex-wrap gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm 
                    ${selectedTime === time
                      ? 'bg-[#cf814d] text-black font-semibold'
                      : 'bg-[#1a1a1a] text-white border-[#333] hover:border-[#cf814d]'
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

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="bg-[#111] border border-[#333] px-5 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-[#cf814d]"
          ></textarea>
        </form>
        <div className="text-center">
          <button
            type="submit"
            className="mt-10 bg-[#cf814d] text-white font-semibold tracking-widest px-10 py-3 uppercase rounded-lg hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300"
          >
            Submit Booking
          </button>
        </div>
      </section>
    </>
  );
};

export default Booking;
