import { Link } from 'react-router-dom';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GiScissors } from 'react-icons/gi';

const members = [
  { name: "Steven Porreca", role: "Master Barber", img: team1 },
  { name: "Huey Apicella", role: "Senior Stylist", img: team2 },
  { name: "Harry Riecke", role: "Fade Specialist", img: team3 },
];

const TeamPreview = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="text-center mb-14">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">The Experts</p>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          Meet Our Barbers
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <GiScissors className="text-[#cf814d] mx-3" size={18} />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-4 md:px-10 max-w-6xl mx-auto">
        {members.map((member) => (
          <div key={member.name} className="group relative overflow-hidden rounded-2xl cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 border border-[#cf814d]/0 group-hover:border-[#cf814d]/50 rounded-2xl transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="w-6 h-[2px] bg-[#cf814d] mb-2 group-hover:w-10 transition-all duration-300" />
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">{member.name}</h3>
              <p className="text-[#cf814d] text-xs mt-0.5 tracking-wider">{member.role}</p>
              <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-7 h-7 rounded-lg bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center text-[#cf814d] hover:bg-[#cf814d] hover:text-black transition-all duration-300">
                    <Icon size={11} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 px-4">
        <Link to="/team">
          <button className="group flex items-center gap-2 bg-transparent border border-[#cf814d] text-[#cf814d] font-semibold tracking-widest px-8 py-3 uppercase rounded-xl hover:bg-[#cf814d] hover:text-black transition-all duration-300 cursor-pointer text-sm">
            Meet Full Team
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TeamPreview;
