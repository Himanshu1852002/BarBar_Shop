import contactus_img from '../../assets/contactus.jpg';
import contact_back from '../../assets/contact_back.jpg'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useState } from 'react';

const Contactus = () => {
    const [isChecked, setIsChecked] = useState();
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
            <section className='relative w-full min-h-screen flex items-center py-10 justify-center overflow-hidden'>
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${contact_back})`,
                    }}
                >

                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                </div>
                <div className='px-4 py-10 flex justify-center items-center'>
                    <div className='w-full max-w-2xl border border-[#cf814d] px-4 sm:px-10 py-10 flex flex-col items-center'>
                        <div className="text-center mb-6">
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
                                message us
                            </h2>
                            <div className="flex items-center justify-center mt-4">
                                <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                                <div className="h-[2px] w-24 sm:w-36 md:w-44 bg-[#cf814d]" />
                                <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            </div>
                        </div>
                        <p className='text-lg mb-10 text-white text-center px-2 sm:px-6'>
                            If you got any questions, please do not hesitate to send us a message.
                        </p>

                        <form className='w-full flex flex-col gap-4'>
                            <input
                                type="text"
                                placeholder='Your Name'
                                className='border border-[#cf814d] text-white bg-transparent p-3 rounded-sm w-full placeholder-white focus:outline-none'
                            />
                            <input
                                type="email"
                                placeholder='Your Email'
                                className='border border-[#cf814d] text-white bg-transparent p-3 rounded-sm w-full placeholder-white focus:outline-none'
                            />
                            <input
                                type="tel"
                                placeholder='Your Phone'
                                className='border border-[#cf814d] text-white bg-transparent p-3 rounded-sm w-full placeholder-white focus:outline-none'
                            />
                            <textarea
                                placeholder='Your Message'
                                rows="4"
                                className='border border-[#cf814d] text-white bg-transparent p-3 rounded-sm w-full placeholder-white focus:outline-none resize-none'
                            ></textarea>

                            <div className='flex items-center gap-3 mt-4'>
                                <input
                                    type="checkbox"
                                    id="confirm"
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className="w-4 h-4 accent-[#cf814d] cursor-pointer"
                                />
                                <label htmlFor="confirm" className="text-white text-sm sm:text-base">
                                    I confirm this message is genuine and acceptable.
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={!isChecked}
                                className={`mt-6 text-white font-semibold py-2 px-6 tracking-widest self-center rounded-sm transition duration-300 ${isChecked
                                    ? 'bg-[#cf814d] hover:shadow-[0_0_25px_#cf814d] cursor-pointer'
                                    : 'bg-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>

            </section>
            <section className='bg-black flex flex-col justify-center items-center gap-4 py-10 px-4'>
                <div className="text-center mb-4">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-widest uppercase">
                        follow us
                    </h2>
                </div>

                <ul className="flex flex-wrap gap-8 justify-center items-center text-white">
                    <li className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] hover:bg-black transition-colors duration-300">
                        <FaFacebookF />
                    </li>
                    <li className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] hover:bg-black transition-colors duration-300">
                        <FaTwitter />
                    </li>
                    <li className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] hover:bg-black transition-colors duration-300">
                        <FaLinkedinIn />
                    </li>
                    <li className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] hover:bg-black transition-colors duration-300">
                        <FaPinterest />
                    </li>
                    <li className="cursor-pointer p-4 sm:p-5 bg-[#cf814d] hover:bg-black transition-colors duration-300">
                        <FaWifi />
                    </li>
                </ul>
            </section>

            <Footer />
        </>
    )
}

export default Contactus