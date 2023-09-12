import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img3 from "../../images/rs_main_1944x.webp"


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container">

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          freeMode={true}
          autoplay={{ delay: 4 }}
      
        >
          <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://shopdressup.com/cdn/shop/files/faith_main_hero_1944x.webp?v=1686146000" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://shopdressup.com/cdn/shop/files/main_hero_6_9_23_2_1944x.webp?v=1686319603" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Hero