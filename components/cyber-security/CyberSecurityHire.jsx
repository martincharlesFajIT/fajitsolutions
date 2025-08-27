import React from 'react';
import './css/CybersecurityHire.css';

const CyberSecurityHire = () => {
  return (
    <div className="cyber-security-container">
      <div className="cyber-content-wrapper">
        <div className="cyber-left-panel">
          <div className="cyber-image-container">
            {/* You can place your image or illustration here */}
            <img src="/hire-cyber.png" alt="Cyber Security Experts" />
          </div>
          <h1>Hire Cyber Security Experts to Prevent Data Breach</h1>
          <p className="cyber-subtitle">
            Build your cyber hygiene with our engineers, who have mastered the art of behavioral analytics, automated testing, incident investigation and mitigation tactics.
          </p>
          <button className="cyber-cta-button">Hire Top Cybersecurity Experts</button>
        </div>
        <div className="cyber-right-panel">
          <ul className="cyber-features-list">
            <li>
              <div className="feature-item">
                <span className="checkmark">✔</span>
                <div>
                  <h3>Top 1% Talent</h3>
                  <p>Professionalism — that’s what describes us. So hire cybersecurity professionals and capitalize on their 8+ years of experience.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="feature-item">
                <span className="checkmark">✔</span>
                <div>
                  <h3>In-Depth Cybersecurity Knowledge</h3>
                  <p>Aligning with your business strategy, our cybersecurity specialists stay up-to-date with evolving threats to build cyber immunity against the most advanced cyber adversaries.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="feature-item">
                <span className="checkmark">✔</span>
                <div>
                  <h3>Responsiveness</h3>
                  <p>Break free of the limits and respond to incidents instantly. We offer a 1-hour response time on all emergency calls, 24 hours a day.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="feature-item">
                <span className="checkmark">✔</span>
                <div>
                  <h3>Analytical Minds</h3>
                  <p>Enjoy precision that can only come from the analytical and rational minds of our top cyber security experts.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityHire;