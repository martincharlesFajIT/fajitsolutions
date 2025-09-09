// components/ValuesPromise.js
import React from 'react';
import './css/ArtificialIntelligence.css';

const ValuesPromise = () => {
  return (
    <section className="aivalues-promise-section">
      <div className="aivalues-container">
        {/* Left Side - AI Robot Image */}
        <div className="aivalues-image-container">
          <div className="airobot-image-wrapper">
            <div className="airobot-placeholder">
              <img 
                src="/robot-image.jpg" 
                alt="AI Robot with Data Analytics"
                className="airobot-image"
              />
              <div className="aicharts-overlay">
                <div className="aichart chart-1"></div>
                <div className="aichart chart-2"></div>
                <div className="aichart chart-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="aivalues-content">
          <div className="aivalues-header">
            <h2 className="aivalues-title">
              The Values Behind Our Promise
            </h2>
            <p className="aivalues-description">
              At FAJ IT Solutions, we specialize in seamlessly integrating AI and software 
              solutions tailored to your unique business needs. Rather than simply 
              implementing technology, we collaborate closely with you to ensure every 
              solution aligns with your goals and values. This personalized approach is why 
              businesses trust us to deliver innovative, efficient, and scalable solutions that 
              drive growth.
            </p>
          </div>

          <div className="aivalues-features">
            <div className="valuefeature-card">
              <div className="valuefeature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="valuefeature-text">
                We're experienced engineers who truly understand your technical 
                requirements
              </div>
            </div>

            <div className="valuefeature-card">
              <div className="valuefeature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="valuefeature-text">
                We immerse ourselves in your vision to bring it to life with precision 
                and care
              </div>
            </div>

            <div className="valuefeature-card">
              <div className="valuefeature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="valuefeature-text">
                We prioritize direct and clear communication; no unnecessary 
                middlemen, just straightforward collaboration
              </div>
            </div>
          </div>

          <div className="consultation-button-wrapper">
            <button className="consultation-btn">
              Get a Free AI Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesPromise;