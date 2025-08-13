"use-client"

import React from 'react';
import './css/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contactSection">
      <div className="container">
        <div className="content">
          <h2 className="title">Contact FAJ IT Solutions?</h2>
          <p className="description">
            If you've got any questions, please fill out the short form below to drop
            us an email and we promise to get back to you shortly.
          </p>
          <div className="buttonGroup">
            <button className="contactBtn">
              <span className="btnIcon">📧</span>
              Contact US
            </button>
            <button className="consultationBtn">
              <span className="btnIcon">📞</span>
              Book a Free Consultation
            </button>
          </div>
        </div>
        <div className="imageContainer">
          <img 
            src="/contact-illustration.gif" 
            alt="Contact FAJ IT Solutions" 
            className="contactImage"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;