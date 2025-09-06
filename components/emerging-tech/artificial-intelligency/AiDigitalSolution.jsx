// components/HeroSection.js
import React from 'react';
import './css/ArtificialIntelligence.css'; 

const AiDigitalSolution = ({ imageUrl }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Leading AI-Powered Digital Solutions
          <span className="animated-line"></span>
        </h1>
        <p className="aiabout-description">
          Artificial intelligence is reshaping the digital world, and we help you stay
          ahead. With custom AI integration, we make automation smarter, insights
          clearer, and customer interactions more impactful. Our solutions are
          designed to fit your unique business needs – from streamlining workflows
          and improving decision-making to delivering personalized customer
          experiences. By combining innovation with scalability, we ensure your
          business is equipped for long-term success in the AI-driven future.
        </p>
        <button className="aiabout-button">Get In Touch</button>
      </div>
      <div className="hero-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt="AI Powered Digital Solutions" className="hero-visual" />
        ) : (
          <div className="hero-visual placeholder">
            <img src="/artificial-intelligence.avif" alt="" className="hero-visual" />
          </div>
        )}
      </div>
    </section>
  );
};

export default AiDigitalSolution;