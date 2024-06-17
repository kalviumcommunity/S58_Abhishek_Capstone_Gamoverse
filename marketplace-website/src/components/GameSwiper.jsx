import React,{useState} from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './GameSwiper.css';
import {EffectCoverFlow,Navigation,Autoplay} from 'swiper';

function GameSwiper({games}) {
  const[active,setActive]=useState(false);
  const handleToggleVideo=()=>{
    setActive(!active);
  }
  return (
   <Swiper
   effect={'coverflow'}
   grabCursor={true}
   navigation={true}
   slidesPerView={'auto'}
   coverflowEffect={{
    rotate:35,
    stretch:200,
    depth:250,
    modifier:1,
    slideShadows:true,
   }}
  //  autoplay={{
  //   delay:2500,
  //   disableOnInteraction:false,
  //  }}
   modules={{EffectCoverFlow,Navigation,Autoplay}}
   className="gameSwiper"
   >
    {games.map(game=>(
        <SwiperSlide key={game._id}>
          <div className='gameSlider'>
            <img src={game.img_link} alt="Game Image"/>
            <div className='content'>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
              <div className='buttons'>
                <a href="#" className="orderbtn">Buy Now</a>
                <a href="#" className={`playBtn ${active?'active':undefined}`} onClick={handleToggleVideo}></a>
                <span className='pause'>
                  <i className="bi bi-pause-fill"></i>
                </span>
                <span className="paly">
                  <i class="bi bi-play-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
   </Swiper>
    

  )
}

export default GameSwiper