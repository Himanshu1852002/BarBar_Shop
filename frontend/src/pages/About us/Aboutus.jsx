import aboutus_img from '../../assets/aboutus.jpg'
import wallImg from '../../assets/wall2.jpg';
import OurTeam from "../../components/Our Team/OurTeam";

const Aboutus = () => {
    return (
        <>
            <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-28 md:pt-32">
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${aboutus_img})` }}
                >``
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
                </div>

                <div className="text-center text-white mt-10 z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
                        About Us
                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                        <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
                    </div>
                </div>

                <div className="w-full mt-20 bg-black/80 text-white py-10 px-6 sm:px-12 md:px-24 text-center z-10">
                    <p className="text-base sm:text-lg md:text-2xl leading-relaxed max-w-5xl mx-auto">
                        Immerse yourself in the ambience of our thoughtfully designed space, where modern aesthetics merge harmoniously with classic elements. 
                        We believe that a barbershop should be more than just a place to get a haircut; it should be a sanctuary where you can unwind, 
                        engage in great conversation, and leave feeling invigorated.
                    </p>
                </div>
            </section>
            <section className="relative w-full min-h-screen flex items-center py-20 justify-center overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${wallImg})` }}
                >
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col md:flex-row justify-center w-full px-6 md:px-12 lg:px-28 gap-10 lg:gap-20">
                    <div className="relative border border-[#cf814d] w-full md:w-1/2 p-8 sm:p-10 bg-black/70 text-center transition duration-300 hover:shadow-[0_0_20px_#cf814d]">
                        <div className="border border-[#cf814d] w-full h-full absolute top-3 left-3 -z-10" />
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase mb-6">
                            our vision
                        </h2>
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                        <p className="text-white text-lg leading-relaxed">
                            At the heart of our vision is a commitment to preserving the time-honored traditions of barbering while seamlessly blending them 
                            with contemporary techniques and trends. We envision a space where heritage and innovation coexist harmoniously, appealing to 
                            the modern man seeking both classic sophistication and cutting-edge styles.
                        </p>
                    </div>
                    <div className="relative border border-[#cf814d] w-full md:w-1/2 p-8 sm:p-10 bg-black/70 text-center transition duration-300 hover:shadow-[0_0_20px_#cf814d]">
                        <div className="border border-[#cf814d] w-full h-full absolute top-3 left-3 -z-10" />
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase mb-6">
                            our mission
                        </h2>
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                            <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]" />
                            <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
                        </div>
                        <p className="text-white text-lg leading-relaxed">
                            Our mission is to empower men to feel confident, stylish, and authentic in their appearance. Through our commitment to excellence, 
                            personalized service, inviting atmosphere, and a harmonious blend of tradition and innovation, we aspire to become the ultimate 
                            grooming destination for the modern gentleman.
                        </p>
                    </div>
                </div>
            </section>
            <OurTeam />
        </>
    )
}

export default Aboutus;
