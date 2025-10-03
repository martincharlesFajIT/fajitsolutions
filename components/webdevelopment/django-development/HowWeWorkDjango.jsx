import React from 'react';
import './css/djangodev.css';

const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <div className="how-we-work-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="work-title">How We Work on django Development</h2>
            
            <p className="work-description">
              A successful application is more than just features or UI; it represents 
              reliability, performance, and scalability. Through thoughtful architecture 
              and clean coding practices, we build Node.js applications that connect 
              with users, handle growth seamlessly, and deliver lasting impact.
            </p>
            
            <p className="work-description">
              Our approach combines strategy with technology to highlight what makes 
              your product unique. Every component, from backend logic to API design, 
              works together to deliver a fast and consistent experience. Ultimately, 
              we help transform your app into a robust platform that inspires trust 
              and growth.
            </p>
            
            <button className="start-journey-btn">
              Start Your Journey!
            </button>
          </div>
          
          <div className="image-content">
            {/* Replace with your own image */}
            <img 
              src="/python.jpg" 
              alt="Django and Python Logo" 
              className="work-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;