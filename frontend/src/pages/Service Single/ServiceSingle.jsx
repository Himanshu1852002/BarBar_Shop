import chairImg from '../../assets/chair.jpg';
import hero_men_img from '../../assets/hero-men-bg.png';
import wallImg from '../../assets/wall2.jpg';
import style1 from '../../assets/style1.jpg';
import style2 from '../../assets/style2.jpg';
import style3 from '../../assets/style3.jpg';
import style4 from '../../assets/style4.jpg';
import style5 from '../../assets/style5.jpg';
import style6 from '../../assets/style6.jpg';

const styles = [
  { img: style1, name: "Pompadour" },
  { img: style2, name: "Classic Quiff" },
  { img: style3, name: "High Fade" },
  { img: style4, name: "Side Part" },
  { img: style5, name: "Undercut" },
  { img: style6, name: "Buzz Cut" },
];

const ServiceSingle = () => {
  return (
    <>
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 lg:px-10">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${chairImg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="text-center text-white z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Services
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
            <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-[#cf814d]" />
            <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center bg-black py-16">
        <div className="relative max-w-lg w-full flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-[#b87333] w-72 h-80 md:w-[540px] md:h-[400px]" />
          </div>
          <img
            src={hero_men_img}
            alt="profile"
            className="relative z-10 -mb-12 w-64 md:w-[480px] object-cover rounded-md"
          />
        </div>
      </section>
      <section className="bg-black text-white -mt-20 pb-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-6 mt-18 md:mt-0">
          Blaxcut Crafting{" "}
          <span className="text-[#d87b3f]">Confidence</span>, <br />
          One Cut At A Time
        </h2>
        <div className="flex items-center justify-center mb-10">
          <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
          <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-[#cf814d]" />
          <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
        </div>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
          <p>
            When it comes to personal grooming and style, a haircut can make all
            the difference. It's not just about trimming those unruly locks; it's
            an art form that can transform your entire look and boost your
            confidence. At our establishment, we take immense pride in offering a
            comprehensive range of haircut services that cater to your unique
            preferences and individuality.
          </p>
          <p>
            Our commitment to excellence extends beyond the scissors and clippers.
            We believe in creating an environment where you can relax and unwind,
            a place where you can escape the hustle and bustle of everyday life.
            That's why we offer more than just haircuts; we provide an opportunity
            to rejuvenate, to chat, and to walk out feeling like the best version
            of yourself.
          </p>
        </div>
      </section>
      <section className="relative w-full min-h-screen flex flex-col items-center py-16 px-6 md:px-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallImg})` }}
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold uppercase mb-8 tracking-widest text-white">
          Hair <span className="text-[#d87b3f]">Styles</span>
        </h2>
        <div className="flex items-center justify-center mb-12">
          <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
          <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-[#cf814d]" />
          <div className="w-3 h-3 bg-[#cf814d] rotate-45" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {styles.map((style, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer rounded-lg shadow-lg"
            >
              <img
                src={style.img}
                alt={style.name}
                className="w-full h-96 object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#d87b3f]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <span className="text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
                  {style.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceSingle;
