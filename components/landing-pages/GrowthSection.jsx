// components/GrowthSection.js
import React from 'react';
import './css/Sales-Digital-Marketing.css';

const GrowthSection = () => {
  return (
    <section className="growth-section-container">
      <div className="growth-content-left">
        <h1 className="growth-title">
          Strategies Designed To Drive Measurable Growth In The <span className="highlight">Digital World</span>
        </h1>
        <p className="growth-paragraph">
          We don’t just create campaigns we deliver measurable growth.
        </p>
        <p className="growth-paragraph">
          Our team uses cutting-edge tools and proven strategies to help your brand dominate the digital space.
          From SEO and paid advertising to social media and content marketing, we focus on results that truly
          matter more traffic, higher conversions, and stronger ROI.
        </p>
        <p className="growth-paragraph">
          With a data-driven approach and creative execution, we ensure your business stays ahead of
          competitors and connects with the right audience at the right time.
        </p>
      </div>

      <div className="growth-image-right">
        <img src="/digital-world-team.png" alt="Team collaborating on digital world" className="main-growth-image" />
        <div className="stats-overlay">
          <p className="stat-item">
            <span className="icon">📈</span> 200% increase in client website traffic
          </p>
          <p className="stat-item">
            <span className="icon">💡</span> 3x more qualified leads generated
          </p>
          <p className="stat-item">
            <span className="icon">💰</span> 150% ROI on paid ad campaigns
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;