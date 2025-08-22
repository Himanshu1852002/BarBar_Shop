import { Link } from 'react-router-dom';
import service1 from '../../assets/services1.jpg';
import service2 from '../../assets/services2.jpg';
import service3 from '../../assets/services3.jpg';
import service4 from '../../assets/services4.jpg';

const services = [
    { title: 'Haircuts', img: service1 },
    { title: 'Beard', img: service2 },
    { title: 'Shaving', img: service3 },
    { title: 'Razor Blade', img: service4 },
];

const Services = ({ showButton = true }) => {
    return (
        <section className="py-20 bg-black">
            <div className="text-center mb-16">
                <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase">
                    Our Services
                </h2>
                <div className="flex items-center justify-center mt-5">
                    <div className="w-2 h-2 bg-[#cf814d] rotate-45"></div>
                    <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]"></div>
                    <div className="w-2 h-2 bg-[#cf814d] rotate-45"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-10 md:px-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative w-full flex flex-col items-center group"
                    >
                        <div className="relative w-full max-w-[250px]">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="z-10 w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full border-2 border-[#cf814d] z-10 translate-x-2 -translate-y-2"></div>
                            <div className="absolute top-0 left-0 w-full h-full border-2 border-[#cf814d] z-10 -translate-x-2 translate-y-2"></div>
                        </div>

                        <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-widest mt-10 uppercase z-10 text-center">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </div>

            {showButton && (
                <div className='flex justify-center items-center mt-10'>
                    <Link to='/services'>
                        <button
                            className="bg-[#cf814d] text-white font-semibold tracking-widest px-10 py-3 uppercase rounded-lg 
                           hover:shadow-[0_0_25px_#cf814d] transition-all duration-300 cursor-pointer"
                        >
                            ALL SERVICES & PRICES
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Services;
