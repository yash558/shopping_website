import React from 'react'
import './Hero.css';

import { Player } from 'video-react';
import video from '../../assets/shopping.mp4';
const Hero = () => {
  return (
    <div className="hero" id='home'>
      {/* <div className="hero_left">
        <div className="hero_img">
          <img src={design1} alt="" height={350} width={350} />
        </div>
      </div> */}
      <div className="hero_center">
        <div className="hero_title">
          <h1>Shopping becomes <br /> easier with our <br />  <span>Livvy Shopping App</span></h1>
        </div>
        <div className="hero_desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, obcaecati in nam praesentium vitae, unde aspernatur porro</p>
        </div>
        <div className="hero_btn">
          <button className="btn_1">Try it Now</button>
        </div>
      </div>
      <div className="hero_right">
        <video width="600" height="600" autoPlay loop muted  >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Hero