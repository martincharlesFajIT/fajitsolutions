// components/MarketingSection.js
import React from 'react';
import './css/Sales-Digital-Marketing.css';

const MarketingSection = () => {
  return (
    <section className="marketing-section-container">
      <h1 className="section-title">
        Strategies Designed To Drive Measurable Growth In The <span className="highlight">Digital World</span>
      </h1>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-icon">
            {/* Replace with an actual SVG or image icon */}
            <img src="https://img.freepik.com/premium-vector/editable-design-icon-seo-analysis_362714-4809.jpg" alt="SEO Optimization Icon" />
          </div>
          <h2 className="card-title">SEO Optimization</h2>
          <p className="card-description">
            Master the art of SEO optimization to boost visibility and drive traffic. Perfect for businesses aiming to rank higher and attract the right audience.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://e7.pngegg.com/pngimages/868/841/png-clipart-social-media-marketing-social-networking-service-social-media-content-marketing-logo.png" alt="Social Media Marketing Icon" />
          </div>
          <h2 className="card-title">Social Media Marketing</h2>
          <p className="card-description">
            Master the art of SEO optimization to boost visibility and drive traffic. Perfect for businesses aiming to rank higher and attract the right audience.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/8164/8164219.png" alt="Content Marketing Icon" />
          </div>
          <h2 className="card-title">Content Marketing</h2>
          <p className="card-description">
            Master the art of SEO optimization to boost visibility and drive traffic. Perfect for businesses aiming to rank higher and attract the right audience.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/2472/2472076.png" alt="PPC Advertising Icon" />
          </div>
          <h2 className="card-title">PPC Advertising</h2>
          <p className="card-description">
            Master the art of SEO optimization to boost visibility and drive traffic. Perfect for businesses aiming to rank higher and attract the right audience.
          </p>
        </div>
      </div>
      <button className="marketing-plan-button">Get Your Free Marketing Plan</button>
    </section>
  );
};

export default MarketingSection;