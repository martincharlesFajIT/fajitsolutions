import React from 'react';
import '../../css/Webinnerpages.css';

const HeroPhp = () => {
  return (
    <section className="innerpages-hero-section">
      <div className="innerpages-hero-container">
        <div className="innerpages-hero-content">
          <h1 className="innerpages-hero-title">PHP-Powered Web Apps</h1>
          <p className="innerpages-hero-subtitle">
            Delivering fast, secure, and scalable web solutions with PHP Python.
          </p>
          <p className="innerpages-hero-description">
            Harness the power of PHP Python to build modern, feature-rich, and future-ready web applications that drive innovation and digital success.
          </p>
        </div>
        <img 
          src="./Php-banner.avif" 
          alt="Cityscape Background" 
          className="innerpages-hero-image"
        />
      </div>
    </section>
  );
};

export default HeroPhp;