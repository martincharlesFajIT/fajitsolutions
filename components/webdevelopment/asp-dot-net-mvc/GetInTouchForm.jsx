// components/GetInTouchForm.jsx
"use client"
import { useState } from 'react';
import './css/AspDotNetMvc.css';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        
        <div className="contact-content">
          {/* Contact Information Card */}
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon email-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-title">Email Address</h3>
                <p className="info-detail">info@fajitsolutions.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon phone-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="info-content">
                <h3 className="info-title">Phone Number</h3>
                <p className="info-detail">+971-506913152</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Country Code <span className="required">*</span>
                  </label>
                  <select
                    name="countryCode"
                    className="form-select"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+91">+97 (UAE)</option>
                    <option value="+61">+61 (Pakistan)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Your Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Enter number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Enter Your Comments"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;