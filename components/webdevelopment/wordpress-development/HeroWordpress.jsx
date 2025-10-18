import React from 'react';
import '../../css/Webinnerpages.css';

const HeroWordpress = () => {
  return (
    <section className="innerpages-hero-section">
      <div className="innerpages-hero-container">
        <div className="innerpages-hero-content">
          <h1 className="innerpages-hero-title">Wordpress-Powered Web Apps</h1>
          <p className="innerpages-hero-subtitle">
            Delivering fast, secure, and scalable web solutions with Wordpress Python.
          </p>
          <p className="innerpages-hero-description">
            Harness the power of Wordpress Python to build modern, feature-rich, and future-ready web applications that drive innovation and digital success.
          </p>
        </div>
        <img 
          src="./wordpress-banner.avif"
          alt="Cityscape Background" 
          className="innerpages-hero-image"
        />
      </div>
    </section>
  );
};

export default HeroWordpress;