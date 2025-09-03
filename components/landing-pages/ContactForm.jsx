import React from 'react';
import './css/Sales-Digital-Marketing.css';

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Take the First Step Toward <br /> Business Growth</h2>
        <p className="form-subtitle">Request Your Free Program Guide From The FAJ IT Solutions</p>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="projectDetails">Tell Us About Your Project *</label>
            <textarea id="projectDetails" name="projectDetails" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;