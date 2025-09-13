// components/SuccessPath.js
import React from 'react';
import './css/Sales-Digital-Marketing.css';

const SuccessPath = () => {
  return (
    <section className="success-path-container">
      <h2 className="success-path-main-title">
        Your Path to Digital Marketing Success <br />
        <span className="bold-text">Begins Here</span>
      </h2>

      <div className="path-cards-wrapper">
        {/* Card 1: Discover */}
        <div className="path-card path-card-1">
          <div className="path-number">1</div>
          <div className="path-card-content">
            <h3 className="path-card-title">Discover</h3>
            <p className="path-card-description">
              Request your free digital strategy audit and find out how our solutions can help your business grow.
            </p>
          </div>
          <div className="path-card-icon">
            {/* Replace with your actual SVG icon */}
            <img src="/discover-icon.png" alt="Discover Icon" />
          </div>
        </div>

        {/* Card 2: Engage */}
        <div className="path-card path-card-2">
          <div className="path-number">2</div>
          <div className="path-card-content">
            <h3 className="path-card-title">Engage</h3>
            <p className="path-card-description">
              Connect with our experts for actionable insights and customized marketing plans tailored to your business needs.
            </p>
          </div>
          <div className="path-card-icon">
            {/* Replace with your actual SVG icon */}
            <img src="/engage-icon.png" alt="Engage Icon" />
          </div>
        </div>

        {/* Card 3: Achieve Results */}
        <div className="path-card path-card-3">
          <div className="path-number">3</div>
          <div className="path-card-content">
            <h3 className="path-card-title">Achieve Results</h3>
            <p className="path-card-description">
              Launch campaigns and track real ROI—turn clicks into customers with our proven digital marketing systems.
            </p>
          </div>
          <div className="path-card-icon">
            {/* Replace with your actual SVG icon */}
            <img src="/result.png" alt="Achieve Results Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPath;