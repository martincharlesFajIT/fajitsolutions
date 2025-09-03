// components/MotionCtaBanner.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './css/MotionGraphics.css'
const MotionCtaBanner = () => {
  return (
    <section className="motion-cta-banner">
      {/* Background Image */}
      <div className="cta-background">
        <img 
          src="/cta-background-image.png" 
          alt="Motion Graphics Background" 
          className="background-image"
        />
        <div className="overlays"></div>
      </div>
      
      {/* Content */}
      <div className="cta-banner-container">
        <div className="cta-banner-content">
          <h1 className="cta-banner-title">
            We Are The Best Motion Graphics Studio in the World
          </h1>
          <p className="cta-banner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam
          </p>
          <button className="cta-banner-button">
            Book Now
            <FaArrowRight className="button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MotionCtaBanner;