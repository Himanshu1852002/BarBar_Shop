import Services from '../../components/Servicess/Services';
import chairImg from '../../assets/chair.jpg';
import Prices from '../../components/Prices/Prices';
import AddressTime from '../../components/Address & Time/AddressTime';

const AllServicePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${chairImg})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-14 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Premium Grooming</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Step into our stylish space where vintage meets contemporary — crafted for your perfect grooming journey.
          </p>
        </div>
      </section>

      <Services showButton={false} />
      <Prices />
      <AddressTime />
    </>
  );
};

export default AllServicePage;
