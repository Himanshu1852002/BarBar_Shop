import { Swiper, SwiperSlide } from 'swiper/react';
import './TrendingStyle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { GiScissors } from 'react-icons/gi';

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
    <section className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="text-center mb-14">
        <p className="text-[#cf814d] text-xs tracking-[0.4em] uppercase mb-3 font-medium">Top Picks</p>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-widest uppercase">
          Trending Styles
        </h2>
        <div className="flex items-center justify-center mt-5">
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
          <GiScissors className="text-[#cf814d] mx-3" size={18} />
          <div className="h-[1px] w-16 bg-[#cf814d]/40" />
        </div>
        <p className="text-gray-500 mt-4 text-xs tracking-widest uppercase">Find your perfect look</p>
      </div>

      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          0:    { slidesPerView: 1.2 },
          640:  { slidesPerView: 2 },
          768:  { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="trending-swiper"
      >
        {styles.map((style) => (
          <SwiperSlide key={style.id}>
            {({ isActive }) => (
              <div className={`trending-card ${isActive ? 'active' : ''}`}>
                <img src={style.img} alt={style.name} className="trending-img" />
                <div className="trending-overlay">
                  <span className="trending-number">#{style.id}</span>
                  <span className="trending-name">{style.name}</span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingStyles;
