import Services from '../../components/Servicess/Services';
import chairImg from '../../assets/chair.jpg';
import Prices from '../../components/Prices/Prices';
import AddressTime from '../../components/Address & Time/AddressTime';

const AllServicePage = () => {
  return (
    <>
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-28 lg:px-10">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${chairImg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-98 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="text-center text-white z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Services
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-24 sm:w-36 md:w-44 bg-[#cf814d]" />
            <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
        <div className="w-full mt-12 bg-black/80 text-white py-8 px-6 sm:px-12 md:px-20 text-center z-10">
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Step into our stylish and comfortable space, where the blend of
            vintage and contemporary decor sets the perfect backdrop for your
            grooming journey. We pay attention to every detail, from the moment
            you walk through our doors until you leave with a fresh, confident
            look.
          </p>
        </div>
      </section>
      <Prices />

      <Services showButton={false} />
      <AddressTime />
    </>
  );
};

export default AllServicePage;
