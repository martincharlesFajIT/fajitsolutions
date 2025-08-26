// components/DigitalMarketingSection.jsx
'use client';

import React from 'react';
import './css/AboutDigital.css'
const AboutDigital = () => {
  return (
    <section className="digital-marketing-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>What Digital Marketing Can Do For Your Business</h1>
            <p>
              Whether you're running an eCommerce store aiming to increase sales, 
              a startup focused on fast growth, or a local business seeking wider 
              visibility, digital marketing can transform your reach and impact.
            </p>
            <p>
              At Faj IT Solutions, we specialize in building data-driven marketing 
              strategies that optimize funnels, attract qualified leads, and strengthen 
              brand presence. By combining proven techniques with innovative approaches, 
              we ensure measurable results—not empty promises.
            </p>
            <p>
              Since 2010, our team has helped businesses expand their audiences, 
              improve engagement, and establish stronger customer connections, 
              driving long-term growth and authority in competitive markets.
            </p>
          </div>
          <div className="image-content">
            {/* Replace with your own image */}
            <img 
              src="/digital-img.png" 
              alt="Digital Marketing Illustration" 
            />
            
          </div>
          
        </div>
        <button className="cta-button">
            <span>Unlock Better UI/UX</span>
            <svg className="arrow-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutDigital;