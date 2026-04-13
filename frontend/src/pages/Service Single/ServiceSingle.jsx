import chairImg from '../../assets/chair.jpg';
import hero_men_img from '../../assets/hero-men-bg.png';
import wallImg from '../../assets/wall2.jpg';
import style1 from '../../assets/style1.jpg';
import style2 from '../../assets/style2.jpg';
import style3 from '../../assets/style3.jpg';
import style4 from '../../assets/style4.jpg';
import style5 from '../../assets/style5.jpg';
import style6 from '../../assets/style6.jpg';
import style7 from '../../assets/style7.jpg';
import style8 from '../../assets/style8.jpg';
import style9 from '../../assets/style9.jpg';
import { GiScissors } from 'react-icons/gi';
import { FiCheck } from 'react-icons/fi';

const styles = [
  { img: style1, name: "Pompadour" },
  { img: style2, name: "Classic Quiff" },
  { img: style3, name: "High Fade" },
  { img: style4, name: "Side Part" },
  { img: style5, name: "Undercut" },
  { img: style6, name: "Buzz Cut" },
  { img: style7, name: "Crew Cut" },
  { img: style8, name: "Slick Back" },
  { img: style9, name: "Textured Crop" },
];

const features = [
  "Precision cuts by expert barbers",
  "Hot towel shave experience",
  "Premium grooming products",
  "Relaxing & comfortable atmosphere",
  "Tailored to your unique style",
  "Walk-ins & appointments welcome",
];

const ServiceSingle = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[320px] flex flex-col justify-end items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${chairImg})` }}>
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center pb-10 px-4">
          <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-2 font-medium">Expert Grooming</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-3">
            Haircut Service
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-xs sm:text-sm">
            <span>Home</span>
            <span className="text-[#cf814d]">/</span>
            <span>Services</span>
            <span className="text-[#cf814d]">/</span>
            <span className="text-[#cf814d]">Haircut</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0a0a0a] py-14 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative mx-6 mb-8 lg:mb-0">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#cf814d]/30 rounded-2xl" />
              <img
                src={hero_men_img}
                alt="barber"
                className="relative z-10 w-60 sm:w-72 md:w-96 object-cover rounded-2xl"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-[#cf814d] text-black rounded-xl px-4 py-3 text-center shadow-xl">
                <p className="text-2xl font-extrabold leading-none">10+</p>
                <p className="text-xs font-semibold tracking-wider uppercase mt-1">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 w-full text-white">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">About This Service</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-2 leading-tight">
              Crafting <span className="text-[#cf814d]">Confidence</span>,<br />One Cut At A Time
            </h2>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <div className="w-2 h-2 bg-[#cf814d] rotate-45" />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              A haircut is more than trimming unruly locks — it's an art form that transforms your entire look and boosts your confidence. We offer a comprehensive range of haircut services tailored to your unique preferences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-7 text-sm">
              We believe in creating an environment where you can relax and unwind — a place to escape the hustle and walk out feeling like the best version of yourself.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-[#cf814d]/15 border border-[#cf814d]/30 flex items-center justify-center flex-shrink-0">
                    <FiCheck size={11} className="text-[#cf814d]" />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hair Styles Gallery */}
      <section className="relative py-20 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wallImg})` }}>
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Inspiration</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-widest">
              Hair <span className="text-[#cf814d]">Styles</span>
            </h2>
            <div className="flex items-center justify-center mt-5">
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
              <GiScissors className="text-[#cf814d] mx-3" size={18} />
              <div className="h-[1px] w-16 bg-[#cf814d]/40" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {styles.map((style, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={style.img}
                    alt={style.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 border border-[#cf814d]/0 group-hover:border-[#cf814d]/50 rounded-2xl transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-6 h-[2px] bg-[#cf814d] mb-2 group-hover:w-10 transition-all duration-300" />
                  <p className="text-white font-bold tracking-widest uppercase text-sm">{style.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSingle;
