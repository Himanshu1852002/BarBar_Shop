import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const url = import.meta.env.VITE_BACKEND_URL;
        const getEmployees = async () => {
            try {
                const response = await axios.get(`${url}/employees/getEmployees`);
                setTeamMembers(response.data.employees)
            } catch (error) {
                console.error("Error get employee:", error);
            }
        }
        getEmployees()
    }, [])
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="text-center mb-8">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
                    OUR TEAM
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                    <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                    <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="group relative text-center">
                        <div className="relative overflow-hidden border border-orange-400 group-hover:border-white transition-all duration-300">
                            <img
                                src={`https://barbar-shop.onrender.com${member.image}`}
                                alt={member.name}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/60">
                                <div className="flex gap-4 py-4 text-orange-400 text-xl">
                                    <FaFacebookF className="hover:text-white cursor-pointer transition" />
                                    <FaTwitter className="hover:text-white cursor-pointer transition" />
                                    <FaInstagram className="hover:text-white cursor-pointer transition" />
                                </div>
                            </div>
                            <div className="absolute border border-orange-500 w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold tracking-widest">
                            {member.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;