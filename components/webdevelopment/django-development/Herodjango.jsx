import React from 'react';
import './css/djangodev.css';

const DjangoHero = () => {
  return (
    <section className="django-hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Django-Powered Web Apps</h1>
          <p className="hero-subtitle">
            Delivering fast, secure, and scalable web solutions with Django Python.
          </p>
          <p className="hero-description">
            Harness the power of Django Python to build modern, feature-rich, and future-ready web applications that drive innovation and digital success.
          </p>
        </div>
        <img 
          src="./herodjango.png" 
          alt="Cityscape Background" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default DjangoHero;