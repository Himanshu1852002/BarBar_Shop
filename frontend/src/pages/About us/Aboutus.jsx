import aboutus_img from '../../assets/aboutus.jpg';
import wallImg from '../../assets/wall2.jpg';
import man2 from '../../assets/man-2.png';
import OurTeam from "../../components/Our Team/OurTeam";
import { FiAward, FiUsers, FiScissors, FiStar } from 'react-icons/fi';
import { GiScissors } from 'react-icons/gi';

const stats = [
  { icon: <FiAward size={22} />, value: "10+", label: "Years Experience" },
  { icon: <FiUsers size={22} />, value: "5K+", label: "Happy Clients" },
  { icon: <FiScissors size={22} />, value: "15+", label: "Expert Barbers" },
  { icon: <FiStar size={22} />, value: "4.9", label: "Average Rating" },
];

const Aboutus = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutus_img})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Our Story</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">About Us</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#111] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center py-7 px-4 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}>
              <span className="text-[#cf814d] mb-2">{stat.icon}</span>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative mx-6 mb-8 lg:mb-0">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#cf814d]/30 rounded-2xl" />
              <img
                src={man2}
                alt="about"
                className="relative z-10 w-64 sm:w-80 md:w-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#cf814d] text-black rounded-xl px-4 py-3 text-center shadow-xl">
                <p className="text-2xl font-extrabold leading-none">10+</p>
                <p className="text-xs font-semibold tracking-wider uppercase mt-1">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 w-full text-white">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Who We Are</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-2 leading-tight">
              More Than Just <br /><span className="text-[#cf814d]">A Haircut</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              Immerse yourself in the ambience of our thoughtfully designed space, where modern aesthetics merge harmoniously with classic elements. We believe that a barbershop should be more than just a place to get a haircut.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              It should be a sanctuary where you can unwind, engage in great conversation, and leave feeling invigorated — a place where every visit is an experience crafted just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wallImg})` }}>
          <div className="absolute inset-0 bg-black/82" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Our Purpose</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
              Vision & Mission
            </h2>
            <div className="flex items-center justify-center mt-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <GiScissors className="text-[#cf814d] mx-3" size={18} />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] group">
              <div className="w-12 h-12 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center mb-5 group-hover:bg-[#cf814d]/20 transition-colors">
                <FiAward size={22} className="text-[#cf814d]" />
              </div>
              <h3 className="text-xl font-bold tracking-widest uppercase text-white mb-3 group-hover:text-[#cf814d] transition-colors duration-300">
                Our Vision
              </h3>
              <div className="w-8 h-[2px] bg-[#cf814d] mb-4 group-hover:w-14 transition-all duration-300" />
              <p className="text-gray-400 leading-relaxed text-sm">
                At the heart of our vision is a commitment to preserving the time-honored traditions of barbering while seamlessly blending them with contemporary techniques. We envision a space where heritage and innovation coexist, appealing to the modern man seeking both classic sophistication and cutting-edge styles.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 hover:border-[#cf814d]/40 rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(207,129,77,0.1)] group">
              <div className="w-12 h-12 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center mb-5 group-hover:bg-[#cf814d]/20 transition-colors">
                <FiUsers size={22} className="text-[#cf814d]" />
              </div>
              <h3 className="text-xl font-bold tracking-widest uppercase text-white mb-3 group-hover:text-[#cf814d] transition-colors duration-300">
                Our Mission
              </h3>
              <div className="w-8 h-[2px] bg-[#cf814d] mb-4 group-hover:w-14 transition-all duration-300" />
              <p className="text-gray-400 leading-relaxed text-sm">
                Our mission is to empower men to feel confident, stylish, and authentic in their appearance. Through our commitment to excellence, personalized service, and an inviting atmosphere, we aspire to become the ultimate grooming destination for the modern gentleman.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurTeam />
    </>
  );
};

export default Aboutus;
