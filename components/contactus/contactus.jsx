"use client"
import React, { useState } from 'react';
import './css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Project Details:
        ${formData.project}
      `;

      // Create mailto link
      const mailtoLink = `mailto:info@fajitsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open user's default email client
      window.location.href = mailtoLink;


      setSubmitStatus({ 
        success: true, 
        message: 'Email sent successfully! Thank you for contacting us.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
        </div>
        <div className="form-group">
          <textarea
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Tell us about your project"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {submitStatus.message && (
        <p className={submitStatus.success ? "success-message" : "error-message"}>
          {submitStatus.message}
        </p>
      )}
    </section>
  );
};

export default ContactForm;