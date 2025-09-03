import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for every one</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}
export default Hero;
