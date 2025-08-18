// components/ReadySection.js
"use client";

import { useEffect } from 'react';
import './css/ReadySection.css';

const ReadySection = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly Script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleCalendlyClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/fajitsolutions-info'
      });
    }
    return false;
  };

  return (
    <section className="ready-section">
      <div className="ready-geometric-bg"></div>
      <div className="ready-container">
        <div className="ready-content">
          <h3 className="ready-label">WE'RE READY</h3>
          <h2 className="ready-title">Let's talk about your new Website</h2>
          <p className="ready-description">
            Ready to bring your business to life or take it to the next level? FAJ IT Solutions 
            delivers web design that elevates your business. Stand out, attract customers, and 
            lead your market contact us today!
          </p>
          <button className="ready-button" onClick={handleCalendlyClick}>
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;