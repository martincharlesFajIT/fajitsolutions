'use client';

import React, { useState, useEffect } from 'react';
import './css/CTASection.css';

const CTASection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    // Fix hydration issue
    setIsClient(true);
    
    // Load Calendly CSS if not already loaded
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setIsCalendlyReady(true);
      };
      document.head.appendChild(script);
    } else {
      // Script already exists, check if Calendly is available
      const checkCalendly = () => {
        if (window.Calendly) {
          setIsCalendlyReady(true);
        } else {
          setTimeout(checkCalendly, 100);
        }
      };
      checkCalendly();
    }
  }, []);

  const handleCalendlyClick = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      try {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/fajitsolutions-info/30min'
        });
      } catch (error) {
        console.error('Error opening Calendly:', error);
        // Fallback - open Calendly in new tab
        window.open('https://calendly.com/fajitsolutions-info/30min', '_blank');
      }
    } else {
      console.log('Calendly not ready yet');
      // Fallback - open Calendly in new tab
      window.open('https://calendly.com/fajitsolutions-info/30min', '_blank');
    }
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h1 className="cta-title">Have a Project To Discuss?</h1>
            <h2 className="cta-subtitle">We're ready!</h2>
            <button className="cta-button">
              LET'S CONNECT
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h1 className="cta-title">Have a Project To Discuss?</h1>
          <h2 className="cta-subtitle">We're ready!</h2>
          <button 
            className="cta-button" 
            onClick={handleCalendlyClick}
          >
            LET'S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;