import React from 'react';
import './css/CtaSection.css'; // Import the dedicated CSS file

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <p className="cta-pre-heading">IF YOU'RE</p>
        <h2 className="cta-heading">
          READY <span className="outline-text">TO GO</span>
        </h2>
        <button className="cta-button">Get started</button>
      </div>
    </section>
  );
};

export default CtaSection;