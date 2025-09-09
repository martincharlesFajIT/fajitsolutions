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
    <div className="business-goal-solutions-container">
      <div className="business-goal-solutions-wrapper">
        {/* Header Section */}
        <div className="business-goal-header">
          <h2 className="business-goal-title">
            Custom <span className="business-goal-underlined-text">AI Solutions</span> Built Around<br />
            Your Business Goals
          </h2>
          <p className="business-goal-description">
            We provide AI solutions that adapt to your business at every stage. Whether you're launching
            a new project or automating across the enterprise, our engagement models ensure speed,
            efficiency, and long-term value. With scalable options, you can choose the approach that
            best fits your goals and budget, while driving innovation and measurable results.
          </p>
        </div>

        <div className="business-goal-content">
          {/* Left Side - Features */}
          <div className="business-goal-features-section">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`business-goal-feature-card ${activeFeature === index ? 'active' : ''}`}
                onClick={() => handleFeatureClick(index)}
              >
                <div className="business-goal-feature-icon">
                  <span className="business-goal-icon">{feature.icon}</span>
                </div>
                <div className="business-goal-feature-text">
                  <h3 className="business-goal-feature-title">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image Display */}
          <div className="business-goal-image-section">
            <div className="business-goal-image-container">
              <img 
                src={features[activeFeature].image} 
                alt={features[activeFeature].title}
                className="business-goal-feature-image"
              />
              <div className="business-goal-image-overlay">
                <h3 className="business-goal-overlay-title">{features[activeFeature].title}</h3>
                <p className="business-goal-overlay-description">{features[activeFeature].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="business-goal-navigation-dots">
          {features.map((_, index) => (
            <div 
              key={index} 
              className={`business-goal-dot ${activeFeature === index ? 'active' : ''}`}
              onClick={() => handleFeatureClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessGoal;
