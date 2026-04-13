import bg_img from '../../assets/hero-bg.jpg';
import hero_men from "../../assets/hero-men.png";
import { useNavigate } from 'react-router-dom';
import { handleBookNow } from '../../utils/authHelper';

const Hero = ({ onLoginClick }) => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg_img})` }}
            >
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            </div>

            <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-20 py-10 gap-6 md:gap-10 text-white">
                <div className="w-[220px] sm:w-[300px] md:w-[420px] lg:w-[500px] flex justify-center">
                    <img src={hero_men} alt="Hero" className="w-full object-contain rounded-3xl shadow-lg" />
                </div>
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-widest">
                        Unleash Your
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-widest mt-2">
                        <span className="text-[#cf814d]">Best Look</span>, Right
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-widest mt-2">
                        In Our Chair!
                    </h1>
                    <p className="mt-5 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                        Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home.
                    </p>
                    <button
                        onClick={() => handleBookNow(navigate, onLoginClick)}
                        className="mt-7 bg-[#cf814d] text-white font-semibold tracking-widest uppercase px-8 py-3 rounded-lg hover:shadow-[0_0_25px_#cf814d] cursor-pointer transition-all duration-300 text-sm sm:text-base"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
