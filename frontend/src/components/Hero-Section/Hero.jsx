import bg_img from '../../assets/hero-bg.jpg';
import hero_men from "../../assets/hero-men.png"

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg_img})`,
                }}
            >
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            </div>
            <div className="container mx-auto md:px-0 px-20 lg:px-20 py-5 md:py-0 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10 text-white">
                <div className="relative w-[400px] md:w-[550px] flex justify-center">
                    <div className="absolute top-6 left-6 w-full h-full bg-transparent -z-10"></div>
                    <img src={hero_men} alt="Hero" className="w-full object-cover" />
                </div>
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-widest">
                        Unleash Your
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-widest">
                        <span className="text-[#cf814d]">Best Look</span>, Right
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-widest">
                        In Our Chair!
                    </h1>
                    <p className="mt-4 text-gray-200">
                        Established with a passion for the art of barbering, we take great pride in
                        our craft and strive to create an atmosphere that feels like home.
                    </p>
                    <button className="mt-6 cursor-pointer bg-[#cf814d] text-text font-semibold py-2 px-6  hover:shadow-[0_0_25px_#cf814d] transition duration-400 tracking-widest">
                        BOOK NOW
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Hero