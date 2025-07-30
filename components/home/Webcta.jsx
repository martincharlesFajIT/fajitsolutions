"use client";
import React, { useState } from "react";
import './css/Webcta.css';

const WebCtaSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="web-cta-section">
      <h2 className="web-cta-title">
        Design Your Responsive{" "}
        <span className="web-cta-highlight">Website</span>
      </h2>
      <div className="web-cta-divider"></div>
      <p className="web-cta-description">
        Elate CRM assists service sectors of various scales in simplifying their
        sales processes and fostering loyal clientele through enhanced customer
        experiences.
      </p>
      <button
        onClick={() => setShowPopup(true)}
        className="web-cta-button"
      >
        Sign Up For Free
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              {/* Left: Form */}
              <div className="form-section">
                <h3>Speak with Our Team!</h3>
                <input type="text" placeholder="Name *" className="form-input" />
                <input type="email" placeholder="Email *" className="form-input" />
                <input type="tel" placeholder="+971" className="form-input" />
                <textarea placeholder="Your Message" rows="4" className="form-textarea" />
                <button className="form-submit-button">Submit</button>
              </div>

              {/* Right: Info */}
              <div className="info-section">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="message"
                  className="info-icon"
                />
                <h4>Hey, it's good to see you!</h4>
                <p>Fill out the form, we are ready to assist you.</p>
                <p>info@fajitsolutions.com</p>
                <p> Dubai, UAE</p>
                <div className="social-links">
                  &nbsp; <a href="#">Facebook</a> &nbsp; | &nbsp;
                  <a href="#">Twitter</a> &nbsp; | &nbsp; <a href="#">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="close-btn"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebCtaSection;