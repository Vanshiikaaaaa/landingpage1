import React from "react";
import AboutBackground from "../Assets/ofilr__1_-removebg-preview.png";
import AboutBackgroundImage from "../Assets/cakes-photoaidcom-cropped.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Delicious Cakes Crafted for Every Special Moment
        </h1>
        <p className="primary-text">
       

Satisfy your cravings with our exquisite cakes, freshly baked with love. 
        </p>
        <p className="primary-text">
        Whether it's a birthday, anniversary, or casual treat, we promise to bring sweetness and joy to your special moments.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;