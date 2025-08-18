// components/PotentialSection.js
"use client"
import { useState, useEffect } from 'react';
import './css/PotentialSection.css';

const PotentialSection = () => {
  const textOptions = [
    "A Whole New Market",
    "Endless Possibilities",
    "Digital Innovation",
    "Business Growth",
    "Success Awaits",
    "Your Vision Realized"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [textOptions.length]);

  return (
    <section className="potential-section">
      <div className="potential-geometric-bg"></div>
      <div className="potential-container">
        <div className="potential-content">
          <h2 className="potential-title">UNLEASH YOUR POTENTIAL</h2>
          <p className="potential-subtitle">
            Just Imagine. 
            <span className={`potential-highlight ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {textOptions[currentTextIndex]}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;