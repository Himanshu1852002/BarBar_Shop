import ourteam_img from '../../assets/ourteam.jpg';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiScissors } from 'react-icons/gi';

const teamMembers = [
  {
    name: "Steven Porreca",
    role: "Master Barber",
    img: team1,
    desc: "With a razor-sharp eye for detail and a passion for creating stylish looks, Steven is the heart and soul of our barbershop. With over 10 years of experience, he transforms haircuts into works of art.",
  },
  {
    name: "Huey Apicella",
    role: "Senior Stylist",
    img: team2,
    desc: "Huey blends creativity and precision, ensuring every client walks out with confidence. His mastery of modern and classic styles makes him a client favorite.",
  },
  {
    name: "Harry Riecke",
    role: "Fade Specialist",
    img: team3,
    desc: "Harry's dedication to his craft shows in every cut. Known for his sharp fades and attention to detail, he's been shaping styles for over a decade.",
  },
  {
    name: "Merilyn Axe",
    role: "Style Artist",
    img: team4,
    desc: "Merilyn brings elegance and finesse to the team. With an artistic touch, she creates styles that are both timeless and trendsetting.",
  },
];

const Team = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ourteam_img})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-12 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Meet The Experts</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Our Team
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Our Team</span>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-[#0a0a0a] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto space-y-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-2/5 flex justify-center flex-shrink-0">
                <div className="relative">
                  <div className={`absolute -top-3 ${index % 2 === 0 ? '-left-3' : '-right-3'} w-full h-full border border-[#cf814d]/30 rounded-2xl`} />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="relative z-10 w-64 sm:w-72 md:w-80 h-80 sm:h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  {/* Role badge */}
                  <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} z-20 bg-[#cf814d] text-black rounded-xl px-4 py-2.5 shadow-xl`}>
                    <p className="text-xs font-bold tracking-wider uppercase">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5 text-white text-center lg:text-left">
                <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-2 font-medium">Team Member</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-3">
                  {member.name}
                </h2>
                <div className={`flex items-center gap-2 mb-5 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-start'} justify-center`}>
                  <div className="h-[1px] w-16 bg-[#cf814d]/40" />
                  <GiScissors className="text-[#cf814d]" size={14} />
                  <div className="h-[1px] w-16 bg-[#cf814d]/40" />
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-7 max-w-lg mx-auto lg:mx-0">
                  {member.desc}
                </p>
                {/* Social */}
                <div className="flex gap-3 justify-center lg:justify-start">
                  {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-xl bg-[#cf814d]/10 border border-[#cf814d]/20 flex items-center justify-center text-[#cf814d] hover:bg-[#cf814d] hover:text-black hover:border-[#cf814d] transition-all duration-300"
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
