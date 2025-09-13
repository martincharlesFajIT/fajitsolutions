// components/InnovativeBranding.js
import React from 'react';
import './css/Digital-Brand-Creative.css';
const InnovativeBranding = () => {
  return (
    <section className="innovative-branding-section">
      <div className="branding-container">
        {/* Left Content */}
        <div className="branding-content">
          <h1 className="branding-title">
            Innovative Branding & Creatives
          </h1>
          
          <p className="branding-description">
            Brands go beyond just a logo, font, or color palette they represent relationships 
            and personality. Through creative thinking and attention to detail, we craft digital 
            branding and creatives that connect with audiences, build trust, and leave a 
            lasting impression.
          </p>
          
          <p className="branding-approach">
            Our approach blends strategy with creativity to highlight what makes your brand 
            unique. We ensure every design element works together to tell your story with 
            impact and consistency. Ultimately, we help transform your brand into an 
            experience that inspires loyalty and growth
          </p>
          
          <button className="creative-journey-btn">
            Start Your Creative Journey!
          </button>
        </div>

        {/* Right Illustration - Image */}
        <div className="branding-illustration">
          <div className="illustration-container">
            <img 
              src="/branding-illustration.png" 
              alt="Creative Branding Illustration" 
              className="branding-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeBranding;