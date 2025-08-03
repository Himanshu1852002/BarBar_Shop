import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Servicess/Services';
import chairImg from '../../assets/chair.jpg';
import Prices from '../../components/Prices/Prices';

const AllServicePage = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden pt-30 md:pt-25 lg:px-10">
        <div
          className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${chairImg})` }}
        >
          <div className="absolute bottom-45 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        <div className="text-center text-white z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest uppercase">
            SERVICES
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-20 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-2 md:w-3 h-2 md:h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>

        <div className="w-full mt-25 bg-black bg-opacity-80 text-white py-8 px-4 sm:px-10 md:px-20 text-center z-10">
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            Step into our stylish and comfortable space, where the blend of vintage and contemporary decor sets the perfect backdrop for your grooming journey. We pay attention to every detail, from the moment you walk through our doors until you leave with a fresh, confident look.
          </p>
        </div>
      </section>
      <Prices/>

      <Services />
      <Footer />
    </>
  );
};

export default AllServicePage;
