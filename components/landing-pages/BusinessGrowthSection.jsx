import React from 'react';
import Image from 'next/image';
import './css/Sales-Digital-Marketing.css';

const BusinessGrowthSection = () => {
  return (
    <div className="business-growth-section">
      {/* Images Column */}
      <div className="images-column">
        <div className="image-card top-image-card relative w-[300px] h-[200px]">
          <Image
            src="/target.jpg"
            alt="Digital Marketing Grid"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="image-card bottom-image-card relative w-[300px] h-[200px]">
          <Image
            src="/bottom-image.jpg"
            alt="Growth Chart Upwards"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="content-column">
        <h2 className="section-title">Your Partner in Business Growth</h2>
        <p className="description">
          At FAJ IT Solutions, we help businesses grow with data-driven digital marketing
          strategies. From boosting visibility to driving sales, our solutions are built for results.
          We craft tailored campaigns that align with your unique goals and audience.
        </p>

        <div className="features-list">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <div>
              <h3>Targeted Campaigns</h3>
              <p>Reach the right audience with precision ads that convert.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <div>
              <h3>ROI-Focused Strategies</h3>
              <p>Every campaign is designed to maximize your returns.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <div>
              <h3>Fast & Scalable Results</h3>
              <p>From quick wins to long-term growth, we scale with your goals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial-card">
        <p className="testimonial-text">
          From quick wins to long-term growth, we scale with your goals.
          From quick wins to long-term growth, we scale with your goals.
        </p>
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            <Image
              src="https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Reviewer Name"
              width={60}
              height={60}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <p className="reviewer-name">Name</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowthSection;
