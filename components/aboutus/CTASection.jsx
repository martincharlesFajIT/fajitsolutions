import React from 'react';
import './css/CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h1 className="cta-title">Have a Project To Discuss?</h1>
          <h2 className="cta-subtitle">We're ready!</h2>
          <button className="cta-button">
            LET'S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;