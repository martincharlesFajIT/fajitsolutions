import React from 'react';
import './css/Sales-Digital-Marketing.css';

const CtaDigitalSales = ({ illustrationSrc }) => {
  return (
    <div className="hero-section-container">
      <div className="hero-content-left">
        <h1 className="hero-title">
          The Solutions You Need For <br /> The <span className="highlight-text">Success You Want</span>
        </h1>
        <p className="hero-subtitle">
          Take Charge of your future with FAJ IT Solutions
        </p>
        <button className="hero-button">
          Start Growing Today!
        </button>
      </div>
      <div className="hero-illustration-right">
        {/* Replace this with your actual image tag */}
        {illustrationSrc ? (
          <img src={illustrationSrc} alt="Business Growth Illustration" className="hero-illustration-img" />
        ) : (
          // Placeholder if no image source is provided
          <div className="hero-illustration-placeholder">
            {/* You could add a simple CSS-based placeholder here or just leave it empty */}
            Illustration Placeholder
          </div>
        )}
      </div>
    </div>
  );
};

export default CtaDigitalSales;