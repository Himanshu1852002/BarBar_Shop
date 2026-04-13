import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';
import testi_1 from '../../assets/testi_1.jpg';
import testi_2 from '../../assets/testi_2.jpg';
import testi_3 from '../../assets/testi_3.jpg';

const testimonials = [
  { name: "Elliot Richbourg", role: "Regular Client", message: "I had an amazing experience at the barbershop! The atmosphere was friendly and inviting, and the staff was very professional.", img: testi_1 },
  { name: "Stefan Whilby", role: "Loyal Customer", message: "I've been going to this barbershop for years, and I wouldn't trust anyone else with my hair. Highly recommended!", img: testi_2 },
  { name: "Jerri Poydras", role: "New Client", message: "Finding a barber who knows how to handle curly hair properly is not easy — but these guys nailed it every single time.", img: testi_3 },
];

const TestimonialsPreview = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="text-center mb-14">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Client Reviews</p>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          What Clients Say
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <GiScissors className="text-[#cf814d] mx-3" size={18} />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-4 md:px-10 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div key={item.name} className="group bg-[#111] border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center">
                <FaQuoteLeft size={14} className="text-[#cf814d]" />
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className="text-[#cf814d]" />
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">"{item.message}"</p>
            <div className="h-[1px] bg-white/5 mb-4" />
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover border-2 border-[#cf814d]/40" />
              <div>
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-[#cf814d] text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 px-4">
        <Link to="/testimonials">
          <button className="group flex items-center gap-2 bg-transparent border border-[#cf814d] text-[#cf814d] font-semibold tracking-widest px-8 py-3 uppercase rounded-xl hover:bg-[#cf814d] hover:text-black transition-all duration-300 cursor-pointer text-sm">
            View All Reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
