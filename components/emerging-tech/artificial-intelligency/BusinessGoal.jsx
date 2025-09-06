"use client";

import React, { useState } from 'react';
import './css/ArtificialIntelligence.css';

const BusinessGoal = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "📋",
      title: "Fixed Scope Projects",
      description: "Clear project boundaries with defined deliverables",
      image: "/fixed-scope.jpeg"
    },
    {
      icon: "👥",
      title: "Dedicated AI Teams",
      description: "Expert teams focused on your specific requirements",
      image: "/dedicated-teams.jpeg"
    },
    {
      icon: "⚙️",
      title: "Time & Materials Model",
      description: "Flexible engagement with transparent billing",
      image: "/images/time-materials.png"
    }
  ];

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
  };

  return (
    <div className="ai-solutions-container">
      <div className="ai-solutions-wrapper">
        {/* Header Section */}
        <div className="ai-header">
          <h2 className="ai-title">
            Custom <span className="underlined-text">AI Solutions</span> Built Around<br />
            Your Business Goals
          </h2>
          <p className="ai-description">
            We provide AI solutions that adapt to your business at every stage. Whether you're launching
            a new project or automating across the enterprise, our engagement models ensure speed,
            efficiency, and long-term value. With scalable options, you can choose the approach that
            best fits your goals and budget, while driving innovation and measurable results.
          </p>
        </div>

        <div className="ai-content">
          {/* Left Side - Features */}
          <div className="features-section">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onClick={() => handleFeatureClick(index)}
              >
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image Display */}
          <div className="image-section">
            <div className="image-container">
              <img 
                src={features[activeFeature].image} 
                alt={features[activeFeature].title}
                className="feature-image"
              />
              <div className="image-overlay">
                <h3 className="overlay-title">{features[activeFeature].title}</h3>
                <p className="overlay-description">{features[activeFeature].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="navigation-dots">
          {features.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${activeFeature === index ? 'active' : ''}`}
              onClick={() => handleFeatureClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessGoal;
