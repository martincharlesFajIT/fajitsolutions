"use client";
import React, { useState, useEffect } from 'react';
import './css/SEOServices.css';

const SEOServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.seo-services-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="seo-services-section">
      <div className="seo-container">
        <div className="seo-content-wrapper">
          {/* Left Side - Static Image */}
          <div className={`seo-image-container ${isVisible ? 'animate-in' : ''}`}>
            <img 
              src="/images/seo-ai-search.png" 
              alt="AI Search Ecosystem"
              className="seo-diagram-image"
            />
          </div>

          {/* Right Side - Content */}
          <div className={`seo-content ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="seo-title">
              <span className="title-animate">SEO Services</span>{' '}
              <span className="title-animate-delay">For The Future</span>
            </h2>
            
            <p className="seo-subtitle fade-in-1">
              Google remains the undisputed leader in search, driving massive traffic and sales daily. But search is evolving fast.
            </p>

            <div className="seo-description">
              <p className="fade-in-2">
                AI-powered platforms like ChatGPT, Perplexity, and Gemini are reshaping how users discover brands, with AI search projected to hit 1 billion monthly visitors by the end of 2025.
              </p>

              <p className="fade-in-3">
                AI-driven search has grown 494% since 2023, signalling a shift in how users seek brands and products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;