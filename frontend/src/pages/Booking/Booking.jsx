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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Booking
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-4">Choose Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h3 className="uppercase tracking-widest text-sm bg-[#7a4a25] px-3 py-1 inline-block mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#cf814d]" />
                    <span className="text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-4">Choose Staff</h2>
        <div className="flex gap-4 sm:gap-6 mb-10 flex-wrap">
          {staff.map(({ name, img }) => (
            <div
              key={name}
              onClick={() => setSelectedStaff(name)}
              className={`cursor-pointer text-center transition-all duration-300 w-24 sm:w-28 ${selectedStaff === name
                  ? 'border-4 border-[#cf814d] opacity-100'
                  : 'border-2 border-transparent opacity-50 hover:opacity-80'
                } p-1`}
            >
              <img src={img} alt={name} className="w-full h-28 object-cover mb-2" />
              <p className="text-sm sm:text-base">{name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-2">Select Date</h2>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-transparent border border-[#cf814d] px-4 py-2 text-white focus:outline-none focus:border-[#e29d6d]"
              />
              <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cf814d] pointer-events-none" />
            </div>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-2">Select Time</h2>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 sm:px-4 py-2 border rounded transition-all duration-300 text-sm sm:text-base ${selectedTime === time
                      ? 'bg-[#cf814d] text-black border-[#cf814d]'
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

      <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-8 flex items-center gap-3">
          Your Details <span className="h-[1px] w-10 bg-[#cf814d]"></span>
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-[#cf814d] px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-[#cf814d] px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="bg-transparent border border-[#cf814d] px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] text-sm sm:text-base"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="bg-transparent border border-[#cf814d] px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-[#e29d6d] text-sm sm:text-base"
          ></textarea>
        </form>
        <button
          type="submit"
          className="mt-6 bg-[#cf814d] text-white tracking-widest px-6 sm:px-8 py-2 uppercase hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300 text-sm sm:text-base"
        >
          Submit Form
        </button>
      </section>
    </>
  );
};

export default Booking;
