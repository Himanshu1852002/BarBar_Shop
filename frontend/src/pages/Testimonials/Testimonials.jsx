import chair_img from '../../assets/chair.jpg';
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import testi_1 from '../../assets/testi_1.jpg';
import testi_2 from '../../assets/testi_2.jpg';
import testi_3 from '../../assets/testi_3.jpg';
import { GiScissors } from 'react-icons/gi';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: "Elliot Richbourg",
    role: "Regular Client",
    message: "I had an amazing experience at the barbershop! The atmosphere was friendly and inviting, and the staff was very professional. Will definitely be coming back!",
    img: testi_1,
  },
  {
    name: "Stefan Whilby",
    role: "Loyal Customer",
    message: "I've been going to this barbershop for years, and I wouldn't trust anyone else with my hair. The quality is always consistent. Highly recommended!",
    img: testi_2,
  },
  {
    name: "Jerri Poydras",
    role: "New Client",
    message: "I'm so glad I found this barbershop! As someone with curly hair, finding a barber who knows how to handle it properly is not easy — but they nailed it.",
    img: testi_3,
  },
  {
    name: "Sammie Maedche",
    role: "Happy Parent",
    message: "I brought my son for his first haircut, and they made it such a memorable experience for him. The barbers were so patient and kind!",
    img: testi_1,
  },
  {
    name: "Anonymous",
    role: "Verified Client",
    message: "This barbershop has the best customer service I've ever experienced. The barbers are incredibly talented and attentive to every detail.",
    img: testi_2,
  },
  {
    name: "Returning Client",
    role: "Long-time Member",
    message: "I've been going to this barbershop for a long time, and I can confidently say it's the best in town. Never had to wait too long and always leave satisfied!",
    img: testi_3,
  },
];

const Testimonials = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${chair_img})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Client Reviews</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Testimonials
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Testimonials</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#111] border-y border-white/5">
        <div className="max-w-3xl mx-auto grid grid-cols-3">
          {[
            { value: "5K+", label: "Happy Clients" },
            { value: "4.9", label: "Average Rating", icon: true },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center py-6 px-4 text-center ${i < 2 ? 'border-r border-white/5' : ''}`}>
              <div className="flex items-center gap-1">
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                {stat.icon && <FiStar size={16} className="text-[#cf814d]" />}
              </div>
              <p className="text-xs text-gray-500 mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="bg-[#0a0a0a] px-4 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">What They Say</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
              Client Stories
            </h2>
            <div className="flex items-center justify-center mt-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <GiScissors className="text-[#cf814d] mx-3" size={18} />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                message={item.message}
                img={item.img}
                role={item.role}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="group flex items-center gap-2 bg-transparent border border-[#cf814d] text-[#cf814d] font-semibold tracking-widest px-8 py-3 uppercase rounded-xl hover:bg-[#cf814d] hover:text-black transition-all duration-300 cursor-pointer text-sm">
              Load More
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
