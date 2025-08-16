import React from 'react';
import './css/TechSection.css';

const TechSection = () => {
  const tools = [
    {
      id: 1,
      name: 'Figma',
      icon: '🎨', // You can replace with actual icons/images
      bgColor: 'figma-bg'
    },
    {
      id: 2,
      name: 'Adobe XD',
      icon: '🔺', // You can replace with actual icons/images
      bgColor: 'adobe-bg'
    },
    {
      id: 3,
      name: 'Sketch',
      icon: '💎', // You can replace with actual icons/images
      bgColor: 'sketch-bg'
    },
    {
      id: 4,
      name: 'Prototyping',
      icon: '🛠️', // You can replace with actual icons/images
      bgColor: 'prototype-bg'
    }
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h1 className="tech-title">The Tech Behind Our Designs</h1>
          <p className="tech-description">
            We specialize in delivering innovative, next-generation digital solutions that empower 
            businesses to thrive in a competitive world. Every project is meticulously crafted around 
            your unique vision, combining creativity, precision, and advanced technology to drive 
            lasting success
          </p>
        </div>
        
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className={`tool-card ${tool.bgColor}`}>
              <div className="tool-icon">
                {tool.icon}
              </div>
              <h3 className="tool-name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;