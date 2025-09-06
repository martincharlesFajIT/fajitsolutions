import React from 'react';
import './css/Sales-Digital-Marketing.css';
import Image from 'next/image';

const BusinessGrowthSection = () => {
  return (
    <div className="business-growth-section">
      <div className="images-column">
        <div className="image-card top-image-card">
          <Image
            src="./target.jpg"
            alt="Digital Marketing Grid"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="image-card bottom-image-card">
          <Image
            src="/path/to/bottom-image.jpg"
            alt="Growth Chart Upwards"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="content-column">
        <h2 className="section-title">Your Partner in Business Growth</h2>
        <p className="description">
          At FAJ IT Solutions, we help businesses grow with data-driven digital marketing
          strategies. From boosting visibility to driving sales, our solutions are built for results. We
          craft tailored campaigns that align with your unique goals and audience.
        </p>

        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon targeted-campaigns-icon">⚡</span> {/* Replace with actual icon if desired */}
            <div>
              <h3>Targeted Campaigns</h3>
              <p>Reach the right audience with precision ads that convert.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon roi-focused-icon">🎯</span> {/* Replace with actual icon if desired */}
            <div>
              <h3>ROI-Focused Strategies</h3>
              <p>Every campaign is designed to maximize your returns.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon fast-scalable-icon">🚀</span> {/* Replace with actual icon if desired */}
            <div>
              <h3>Fast & Scalable Results</h3>
              <p>From quick wins to long-term growth, we scale with your goals.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          From quick wins to long-term growth, we scale with your goals.
          From quick wins to long-term growth, we scale with your goals.
        </p>
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            <Image
              src="/path/to/reviewer-avatar.jpg" // Replace with actual avatar image path
              alt="Reviewer Name"
              width={60}
              height={60}
              objectFit="cover"
            />
          </div>
          <p className="reviewer-name">Name</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowthSection;