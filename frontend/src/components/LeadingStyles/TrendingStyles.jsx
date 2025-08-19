import { Swiper, SwiperSlide } from 'swiper/react';
import './TrendingStyle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import style1 from '../../assets/style1.jpg'
import style2 from '../../assets/style2.jpg'
import style3 from '../../assets/style3.jpg'
import style4 from '../../assets/style4.jpg'
import style5 from '../../assets/style5.jpg'
import style6 from '../../assets/style6.jpg'
import style7 from '../../assets/style7.jpg'
import style8 from '../../assets/style8.jpg'
import style9 from '../../assets/style9.jpg'
import style10 from '../../assets/style10.jpg'

const styles = [
  { id: 1, name: 'SLICK BACK', img: style1 },
  { id: 2, name: 'CLASSIC QUIFF', img: style2 },
  { id: 3, name: 'POMPADOUR', img: style3 },
  { id: 4, name: 'FRINGE', img: style4 },
  { id: 5, name: 'CURLY FADE', img: style5 },
  { id: 6, name: 'CREW CUT', img: style6 },
  { id: 7, name: 'BUZZ CUT', img: style7 },
  { id: 8, name: 'TEXTURED CROP', img: style8 },
  { id: 9, name: 'COMB OVER', img: style9 },
  { id: 10, name: 'FAUX HAWK', img: style10 },
];

const TrendingStyles = () => {
  return (
    <section className="py-15 bg-black">
      <div className="text-center mb-15">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
          Trending Styles
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="w-2 h-2 bg-[#cf814d] rotate-45"></div>
          <div className="h-[2px] w-28 sm:w-36 md:w-44 bg-[#cf814d]"></div>
          <div className="w-2 h-2 bg-[#cf814d] rotate-45"></div>
        </div>
      </div>

      <div className="px-4">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={true}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="!px-2"
        >
          {styles.map((style) => (
            <SwiperSlide key={style.id}>
              {({ isActive }) => (
                <div
                  className={`relative transition-all duration-300 rounded-2xl ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'
                    }`}
                >
                  <img
                    src={style.img}
                    alt={style.name}
                    className="rounded-2xl object-cover w-full h-[300px] sm:h-[350px] md:h-[400px]"
                  />
                  <div className="absolute bottom-6 w-full text-center text-white font-bold tracking-widest">
                    <div className="text-3xl sm:text-4xl md:text-5xl text-[#cf814d]">
                      #{style.id}
                    </div>
                    <div className="text-lg sm:text-xl">{style.name}</div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingStyles;
