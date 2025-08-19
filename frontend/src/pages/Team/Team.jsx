import ourteam_img from '../../assets/ourteam.jpg'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <>
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
                <div
                    className="absolute inset-0 -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ourteam_img})` }}
                >
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="text-center text-white z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
                        About Us
                    </h2>
                    <div className="flex items-center justify-center mt-4 gap-2">
                        <div className="w-3 h-3 rotate-45 bg-[#cf814d]" />
                        <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-[#cf814d]" />
                        <div className="w-3 h-3 rotate-45 bg-[#cf814d]" />
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="relative w-full max-w-sm mx-auto">
                        <img
                            src={team1}
                            alt="Steven Porreca"
                            className="w-full object-cover"
                        />
                        <div className="absolute top-4 left-4 w-full h-full border border-orange-500 -z-10" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6">
                            STEVEN PORRECA
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg tracking-widest max-w-xl mb-6 leading-relaxed">
                            With a razor-sharp eye for detail and a passion for creating stylish
                            looks, he is the heart and soul of our barbershop. With over 10 years
                            of experience in the industry, he is a true master of the craft,
                            transforming haircuts into works of art.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#" className="text-[#cf814d] bg-[#1e1e1e] p-2 rounded-sm hover:bg-white transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6">
                            Huey Apicella
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg tracking-widest max-w-xl mb-6 leading-relaxed">
                            With a razor-sharp eye for detail and a passion for creating stylish looks, he is the heart and soul of our barbershop. With over 10 years of experience in the industry, he is a true master of the craft, transforming haircuts into works of art.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#" className="text-[#cf814d] bg-[#1e1e1e] p-2 rounded-sm hover:bg-white transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full max-w-sm mx-auto">
                        <img
                            src={team2}
                            alt="Steven Porreca"
                            className="w-full object-cover"
                        />
                        <div className="absolute top-4 left-4 w-full h-full border border-orange-500 -z-10" />
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="relative w-full max-w-sm mx-auto">
                        <img
                            src={team3}
                            alt="Steven Porreca"
                            className="w-full object-cover"
                        />
                        <div className="absolute top-4 left-4 w-full h-full border border-orange-500 -z-10" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6">
                            Harry Riecke
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg tracking-widest max-w-xl mb-6 leading-relaxed">
                            With a razor-sharp eye for detail and a passion for creating stylish looks, he is the heart and soul of our barbershop. With over 10 years of experience in the industry, he is a true master of the craft, transforming haircuts into works of art.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#" className="text-[#cf814d] bg-[#1e1e1e] p-2 rounded-sm hover:bg-white transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-6">
                            Merilyn Axe
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg tracking-widest max-w-xl mb-6 leading-relaxed">
                            With a razor-sharp eye for detail and a passion for creating stylish
                            looks, he is the heart and soul of our barbershop. With over 10 years
                            of experience in the industry, he is a true master of the craft,
                            transforming haircuts into works of art.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#" className="text-[#cf814d] bg-[#1e1e1e] p-2 rounded-sm hover:bg-white transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="bg-[#1e1e1e] text-[#cf814d] p-2 rounded-sm hover:bg-white transition">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full max-w-sm mx-auto">
                        <img
                            src={team4}
                            alt="Steven Porreca"
                            className="w-full object-cover"
                        />
                        <div className="absolute top-4 left-4 w-full h-full border border-orange-500 -z-10" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team