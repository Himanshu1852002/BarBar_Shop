import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { GiScissors } from "react-icons/gi";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const getEmployees = async () => {
      try {
        const response = await axios.get(`${url}/employees/getEmployees`);
        setTeamMembers(response.data.employees);
      } catch (error) {
        console.error("Error get employee:", error);
      }
    };
    getEmployees();
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="text-center mb-14">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">The Experts</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          Our Team
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <GiScissors className="text-[#cf814d] mx-3" size={18} />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl cursor-pointer">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={`https://barbar-shop.onrender.com${member.image}`}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            {/* Border */}
            <div className="absolute inset-0 border border-[#cf814d]/0 group-hover:border-[#cf814d]/50 rounded-2xl transition-all duration-500" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="w-6 h-[2px] bg-[#cf814d] mb-2 group-hover:w-10 transition-all duration-300" />
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">{member.name}</h3>
              <p className="text-[#cf814d] text-xs mt-0.5 tracking-wider">{member.role || "Barber"}</p>
              {/* Social Icons */}
              <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <FaFacebookF className="text-gray-400 hover:text-[#cf814d] cursor-pointer transition text-sm" />
                <FaTwitter className="text-gray-400 hover:text-[#cf814d] cursor-pointer transition text-sm" />
                <FaInstagram className="text-gray-400 hover:text-[#cf814d] cursor-pointer transition text-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
