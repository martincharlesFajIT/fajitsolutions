import React from 'react';
import './css/ValuesSection.css';

const ValuesSection = () => {
  return (
    <section className="values-section">
      <div className="values-container">
        <h1 className="values-title">The Values Behind Our Tech Solutions</h1>
        
        <div className="values-cards">
          {/* Our Mission Card */}
          <div className="value-card">
            <div className="card-icon">
              <div className="icon-circle blue"></div>
            </div>
            <h3 className="card-title">Our Mission</h3>
            <p className="card-subtitle">
              To be forever curious and impactful in revolutionizing technology for our partner
            </p>
            
            <div className="card-content">
              <p className="content-heading">At FAJ IT Solutions, we:</p>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Empower businesses with tailored digital solutions</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Drive growth and improve operational efficiency</span>
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="value-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" className="lightbulb-icon">
                <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.973 7.84 14.441 10.5 15.5V17C10.5 17.8284 11.1716 18.5 12 18.5C12.8284 18.5 13.5 17.8284 13.5 17V15.5C16.16 14.441 18 11.973 18 9C18 5.68629 15.3137 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Our Vision</h3>
            <p className="card-subtitle">
              Transforming the world through technologies that disrupt
            </p>
            
            <div className="card-content">
              <p className="content-heading">We aim to:</p>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Transform the world through innovative technologies</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Disrupt traditional systems with forward-thinking solutions</span>
              </div>
            </div>
          </div>

          {/* Our Values Card */}
          <div className="value-card">
            <div className="card-icon">
              <div className="icon-diamond orange"></div>
            </div>
            <h3 className="card-title">Our Values</h3>
            <p className="card-subtitle">
              Empowering progress through trust, creativity, and collaboration
            </p>
            
            <div className="card-content">
              <p className="content-heading">Our Values:</p>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span><strong>Innovation</strong> – We embrace creativity to deliver cutting-edge solutions</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span><strong>Integrity</strong> – We act with honesty, transparency, and accountability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;