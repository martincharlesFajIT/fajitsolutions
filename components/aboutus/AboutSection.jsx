import React from 'react';
import './css/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="text-content">
            <h1 className="about-title">
              About <span className="highlight">FAJ IT Solutions</span>
            </h1>
            <p className="about-description">
              FAJ IT Solutions is a digital solutions company that has been 
              empowering businesses and start-ups since 2010. We specialize in 
              designing and developing user-friendly websites, engaging e-commerce 
              platforms, and innovative IT services. Our focus is on delivering tailored 
              solutions that align with your business goals, driving growth and 
              ensuring long-term success.
            </p>
            <p className="about-tagline">
              It's not just About Us, it's about doing More together
            </p>
          </div>
          
          <div className="world-map">
            <div className="map-container">
              {/* World map SVG or background image */}
              <div className="world-map-bg"></div>
              
              {/* Location dots */}
              <div className="location-dot dot-1"></div>
              <div className="location-dot dot-2"></div>
              <div className="location-dot dot-3"></div>
              <div className="location-dot dot-4"></div>
              <div className="location-dot dot-5"></div>
              <div className="location-dot dot-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;