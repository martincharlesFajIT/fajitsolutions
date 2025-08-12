import React from 'react';
import './css/ImpactSection.css';

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-content">
          <div className="visual-content">
            <div className="cube-container">
              <div className="organic-shape">
                <div className="cube-wrapper">
                  <div className="cube">
                    <div className="cube-face front"></div>
                    <div className="cube-face back"></div>
                    <div className="cube-face right"></div>
                    <div className="cube-face left"></div>
                    <div className="cube-face top"></div>
                    <div className="cube-face bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-content">
            <h1 className="impact-title">Our Impact</h1>
            <h3 className="impact-subtitle">Impact 2010 & Beyond!</h3>
            
            <p className="impact-description">
              At FAJ IT Solutions, we are committed to empowering communities through technology 
              and innovation.
            </p>
            
            <p className="impact-description">
              Our vision is to create meaningful opportunities in employment, education, and digital 
              growth. We strive to make a lasting impact by helping businesses and individuals 
              embrace digital transformation, ensuring long-term success and progress for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;