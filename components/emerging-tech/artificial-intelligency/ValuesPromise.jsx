// components/ValuesPromise.js
import React from 'react';
import './css/ArtificialIntelligence.css';

const ValuesPromise = () => {
  return (
    <section className="values-promise-section">
      <div className="values-container">
        {/* Left Side - AI Robot Image */}
        <div className="values-image-container">
          <div className="robot-image-wrapper">
            <div className="robot-placeholder">
              <img 
                src="/robot-image.jpg" 
                alt="AI Robot with Data Analytics"
                className="robot-image"
              />
              <div className="charts-overlay">
                <div className="chart chart-1"></div>
                <div className="chart chart-2"></div>
                <div className="chart chart-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="values-content">
          <div className="values-header">
            <h2 className="values-title">
              The Values Behind Our Promise
            </h2>
            <p className="values-description">
              At FAJ IT Solutions, we specialize in seamlessly integrating AI and software 
              solutions tailored to your unique business needs. Rather than simply 
              implementing technology, we collaborate closely with you to ensure every 
              solution aligns with your goals and values. This personalized approach is why 
              businesses trust us to deliver innovative, efficient, and scalable solutions that 
              drive growth.
            </p>
          </div>

          <div className="values-features">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="feature-text">
                We're experienced engineers who truly understand your technical 
                requirements
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="feature-text">
                We immerse ourselves in your vision to bring it to life with precision 
                and care
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="checkmark">✓</span>
              </div>
              <div className="feature-text">
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