import contactus_img from '../../assets/contactus.jpg'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contactus = () => {
    return (
        <>
            <Navbar />
            <section className="relative w-full flex flex-col justify-start items-center overflow-hidden pt-40 md:pt-40">
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${contactus_img})` }}
                >
                    <div className="absolute bottom-55 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                </div>
                <div className="text-center text-white z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
                        Contact Us
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                        <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                    </div>
                </div>

                <section className="bg-black text-white py-12 mt-16 w-full z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 text-center">

                        <div className="flex flex-col items-center">
                            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded">
                                <FaLocationDot size={24} />
                            </div>
                            <p className="text-lg text-gray-300">Our Address</p>
                            <h3 className="text-xl font-bold mt-1">100 Mainstreet Center, NY</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded">
                                <FaPhone size={24} />
                            </div>
                            <p className="text-lg text-gray-300">Phone Number</p>
                            <h3 className="text-xl font-bold mt-1 text-[#cf814d]">+1 333 9296</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#cf814d] w-16 h-16 flex items-center justify-center mb-4 rounded">
                                <SiGmail size={24} />
                            </div>
                            <p className="text-lg text-gray-300">Email Address</p>
                            <h3 className="text-xl font-bold mt-1">contact@support.com</h3>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Contactus