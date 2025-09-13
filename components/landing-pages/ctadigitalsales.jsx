import React from 'react';
import './css/Sales-Digital-Marketing.css';

const CtaDigitalSales = () => {
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
          <img src="/illustrationSrc.png" alt="Business Growth Illustration" className="hero-illustration-img" />
      </div>
    </div>
  );
};

export default CtaDigitalSales;