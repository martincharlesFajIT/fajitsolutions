// components/BrandingSection.jsx
import React from 'react';
import './css/Digital-Brand-Creative.css';
const CreativeObjective = () => {
  return (
    <section className="dbrbranding-section">
      <h1 className="branding-title">Creative Objectives in Digital Branding</h1>
      <p className="branding-description">
        Branding design services start with a purpose. The primary goal is to effectively communicate the
        brand's values and essence. Our brand identity services ensure every creative element from colors
        and typography to imagery and style aligns with your brand story and speaks directly to your
        audience. This helps to:
      </p>

      <div className="objectives-grid">
        <div className="objective-card">
          <div className="objective-icon">
            {/* Replace with your actual icon image */}
            <img src="/icons/credibility.svg" alt="Establish Credibility" />
          </div>
          <h3 className="objective-title">Establish Credibility</h3>
          <p className="objective-description">
            A unified brand image fosters confidence and loyalty
          </p>
        </div>

        <div className="objective-card">
          <div className="objective-icon">
            {/* Replace with your actual icon image */}
            <img src="/icons/visibility.svg" alt="Enhance Visibility" />
          </div>
          <h3 className="objective-title">Enhance Visibility</h3>
          <p className="objective-description">
            Brands stand out when their designs are one-of-a-kind
          </p>
        </div>

        <div className="objective-card">
          <div className="objective-icon">
            {/* Replace with your actual icon image */}
            <img src="/icons/loyalty.svg" alt="Build Loyalty" />
          </div>
          <h3 className="objective-title">Build Loyalty</h3>
          <p className="objective-description">
            A lasting impression brings customers back to your brand
          </p>
        </div>

        <div className="objective-card">
          <div className="objective-icon">
            {/* Replace with your actual icon image */}
            <img src="/icons/business-value.svg" alt="Increase Business Value" />
          </div>
          <h3 className="objective-title">Increase Business Value</h3>
          <p className="objective-description">
            A strong brand presence increases perceived value
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeObjective;