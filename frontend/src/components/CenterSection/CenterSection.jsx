import wallImg from '../../assets/wall2.jpg';
import men2 from '../../assets/man-2.png';
import { useNavigate } from 'react-router-dom';
import { handleBookNow } from '../../utils/authHelper';

const CenterSection = ({ onLoginClick }) => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-screen flex items-center py-10 justify-center overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${wallImg})` }}
            >
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full px-6 md:px-16 lg:px-20 gap-8 md:gap-12">
                <div className="text-center md:text-left max-w-xl">
                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-widest text-white">
                        We’ll Crafting
                    </h3>
                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-widest text-white">
                        <span className="text-[#cf814d]">Confidence</span> Through
                    </h3>
                    <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-widest text-white">
                        Sharp Style
                    </h3>

                    <p className="mt-5 text-gray-200 text-sm sm:text-base">
                        We take pride in providing top-notch grooming services that blend
                        classic techniques with modern trends. Step into our warm and
                        inviting space, where you'll find a team of skilled barbers
                        dedicated to enhancing your style and confidence.
                    </p>
                    <button
                        onClick={() => handleBookNow(navigate, onLoginClick)}
                        className="mt-8 bg-[#cf814d] text-white font-semibold tracking-widest px-10 py-3 uppercase rounded-lg 
                                   hover:shadow-[0_0_25px_#cf814d] transition-all duration-300 cursor-pointer"
                    >
                        BOOK NOW
                    </button>
                </div>
                <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
                    <img src={men2} alt="man2" className="w-full h-auto object-contain" />
                </div>
            </div>
        </section>
    );
};

export default CenterSection;
