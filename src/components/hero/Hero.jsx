import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import hero from "../../images/hero.png"


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-container">
        <img src={hero} alt="" />
        <div className="hero-info">
          <div className="title">Dress Up</div>
          <h1 >Everything you love in one place</h1>
          <span>Watch this space for the ultimate shopping experience —minus the crowds.</span>
          <button>#Show Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero