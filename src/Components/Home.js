import React from "react";
import BannerBackground from "../Assets/ofilr-removebg-preview.png";
import BannerImage from "../Assets/Coffee-Cheesecake-photoaidcom-cropped.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Baked to Perfection, Loved by All.
          </h1>
          <p className="primary-text">
          "Indulge in the perfect blend of sweetness, freshness, and irresistible flavors in every bite!"
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;