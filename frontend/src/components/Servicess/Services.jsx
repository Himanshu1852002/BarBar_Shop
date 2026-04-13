import { Link } from 'react-router-dom';
import service1 from '../../assets/services1.jpg';
import service2 from '../../assets/services2.jpg';
import service3 from '../../assets/services3.jpg';
import service4 from '../../assets/services4.jpg';

const services = [
  { title: 'Haircuts', desc: 'Precision cuts tailored to your style', img: service1 },
  { title: 'Beard', desc: 'Shape and define your perfect beard', img: service2 },
  { title: 'Shaving', desc: 'Classic hot towel shave experience', img: service3 },
  { title: 'Razor Blade', desc: 'Sharp clean lines, flawless finish', img: service4 },
];

const Services = ({ showButton = true }) => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="text-center mb-14 px-4">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">What We Offer</p>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          Our Services
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <div className="w-2 h-2 bg-[#cf814d] rotate-45 mx-2" />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            {/* Border accent */}
            <div className="absolute inset-0 border border-[#cf814d]/0 group-hover:border-[#cf814d]/60 rounded-2xl transition-all duration-500" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-8 h-[2px] bg-[#cf814d] mb-3 transition-all duration-300 group-hover:w-14" />
              <h3 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showButton && (
        <div className="flex justify-center mt-14 px-4">
          <Link to="/services">
            <button className="group flex items-center gap-3 bg-transparent border border-[#cf814d] text-[#cf814d] font-semibold tracking-widest px-8 py-3 uppercase rounded-lg hover:bg-[#cf814d] hover:text-black transition-all duration-300 cursor-pointer text-sm">
              All Services & Prices
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Services;
