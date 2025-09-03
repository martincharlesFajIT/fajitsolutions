import React from 'react';
import './css/Sales-Digital-Marketing.css';

const DigitalSkillsSection = () => {
  return (
    <div className="digital-skills-section">
      <div className="logo-container">
        <div className="logo-text">FAJ IT Solutions</div>
      </div>
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="title">Transform Your Career With</h1>
          <h1 className="subtitle">Digital Skills That Matter</h1>
          <button className="see-programs-button">
            See Our Programs <span className="arrow">➔</span>
          </button>
        </div>
        <div className="illustration-container">
          {/* This is a placeholder for the illustration, you might replace it with an actual SVG or image component */}
          <div className="illustration-placeholder">
            {/* The complex illustration would go here, represented by simple shapes for now */}
            <div className="mobile-phone">
              <div className="screen-content"></div>
              <div className="icon code-icon">{"</>"}</div>
            </div>
            <div className="person person-1"></div>
            <div className="person person-2"></div>
            <div className="person person-3"></div>
            <div className="person person-4"></div>
            <div className="person person-5"></div>
            <div className="puzzle puzzle-1"></div>
            <div className="puzzle puzzle-2"></div>
            <div className="puzzle puzzle-3"></div>
            <div className="lightbulb-bubble"></div>
            <div className="chat-bubble"></div>
            <div className="gear-circle"></div>
            <div className="dots-connection"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSkillsSection;