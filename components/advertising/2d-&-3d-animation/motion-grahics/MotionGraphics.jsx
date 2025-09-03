// components/MotionGraphics.js
import React from 'react';
import './css/MotionGraphics.css'
const MotionGraphics = () => {
  return (
    <section className="motion-graphics-hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left side - Image */}
          <div className="hero-image">
            <img 
              src="/motion-graphics-illustration.jpg" 
              alt="Motion Graphics Design Illustration" 
              className="hero-illustration"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="hero-text">
            <h1 className="hero-title">Motion Graphics Design Services</h1>
            <div className="hero-description">
              <p>
                Motion graphics design services bring your brand to life through animated 
                visuals. These services include creating animated logos, explainer videos, and 
                kinetic typography. This helps your brand stand out, simplify complex 
                messages, and captivate audiences.
              </p>
              <p>
                We can help you craft dynamic visual stories that boost engagement, enhance 
                brand recall, and drive conversions across digital platforms.
              </p>
            </div>
            <button className="hero-button">Contact Us Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionGraphics;