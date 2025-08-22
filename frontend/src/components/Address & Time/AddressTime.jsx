import wallImg from '../../assets/wall2.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const AddressTime = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-16 justify-center overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${wallImg})` }}
            >
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>
            <div className="flex flex-col md:flex-row justify-center w-full px-6 sm:px-10 lg:px-20 gap-10 lg:gap-16">
                <div className="relative w-full md:w-1/2 p-8 rounded-2xl bg-[#111]/90 border border-[#cf814d] shadow-[0_0_30px_rgba(207,129,77,0.2)] 
                                hover:shadow-[0_0_40px_rgba(207,129,77,0.35)] transition-all duration-300">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#cf814d] to-[#e6a46e] bg-clip-text text-transparent">
                            We're Open
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                    </div>

                    {[
                        { day: "Mon-Tue", time: "7:30AM - 6:30PM" },
                        { day: "Friday", time: "8:30AM - 8:30PM" },
                        { day: "Sat-Sun", time: "9:30AM - 5:30PM" },
                    ].map(({ day, time }) => (
                        <div key={day} className="flex flex-col items-center border-b border-[#cf814d]/40 py-5">
                            <h4 className="text-white text-lg md:text-xl flex items-center gap-2">
                                <FaClock className="w-5 h-5 text-[#cf814d]" /> {day}
                            </h4>
                            <h3 className="text-[#cf814d] text-xl md:text-2xl font-semibold tracking-widest">
                                {time}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="relative w-full md:w-1/2 p-8 rounded-2xl bg-[#111]/90 border border-[#cf814d] shadow-[0_0_30px_rgba(207,129,77,0.2)] 
                                hover:shadow-[0_0_40px_rgba(207,129,77,0.35)] transition-all duration-300">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#cf814d] to-[#e6a46e] bg-clip-text text-transparent">
                            Location
                        </h2>
                        <div className="flex items-center justify-center mt-4">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                    </div>

                    {[
                        { label: "Address", value: "100 MAINSTREET CENTER, MY", icon: <FaMapMarkerAlt className="w-5 h-5 text-[#cf814d]" /> },
                        { label: "Phone", value: "+91 22 2222 6666 6", icon: <FaPhoneAlt className="w-5 h-5 text-[#cf814d]" /> },
                        { label: "Email", value: "CONTACT@BLUXCUT.COM", icon: <FaEnvelope className="w-5 h-5 text-[#cf814d]" /> },
                    ].map(({ label, value, icon }) => (
                        <div key={label} className="flex flex-col items-center border-b border-[#cf814d]/40 py-5">
                            <h4 className="text-white text-lg md:text-xl flex items-center gap-2">{icon} {label}</h4>
                            <h3 className="text-[#cf814d] text-xl md:text-2xl font-semibold tracking-widest text-center">
                                {value}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AddressTime;
