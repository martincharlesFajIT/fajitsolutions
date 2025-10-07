import React from 'react';
import '../css/innerpages.css';

const HowWeWorkNetCore = () => {
  return (
    <section className="innerpages-how-we-work-section">
      <div className="innerpages-how-we-work-container">
        <div className="innerpages-content-wrapper">
          <div className="innerpages-text-content">
            <h2 className="innerpages-work-title">How We Work on .NetCore Development</h2>
            
            <p className="innerpages-work-description">
              A successful application is more than just features or UI; it represents 
              reliability, performance, and scalability. Through thoughtful architecture 
              and clean coding practices, we build Node.js applications that connect 
              with users, handle growth seamlessly, and deliver lasting impact.
            </p>
            
            <p className="innerpages-work-description">
              Our approach combines strategy with technology to highlight what makes 
              your product unique. Every component, from backend logic to API design, 
              works together to deliver a fast and consistent experience. Ultimately, 
              we help transform your app into a robust platform that inspires trust 
              and growth.
            </p>
            
            <button className="innerpages-start-journey-btn">
              Start Your Journey!
            </button>
          </div>
          
          <div className="innerpages-image-content">
            <img 
              src="/python.jpg" 
              alt=".NetCore and Python Logo" 
              className="innerpages-work-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkNetCore;