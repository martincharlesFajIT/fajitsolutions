'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaRocket, FaStar, FaArrowRight } from 'react-icons/fa';

const CosmicHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: 50,
    project: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      budget: 50,
      project: ''
    });
  };

  const formatBudget = (value) => {
    if (value < 100) return `AED ${value}K`;
    return `AED ${value}K+`;
  };

  return (
    <section className="cosmic-hero-section" ref={sectionRef}>
      <style jsx>{`
        .cosmic-hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0015 0%, #1a0025 50%, #0a0015 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 40px 20px;
        }

        /* Animated background stars */
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Nebula effect */
        .nebula {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 70%);
          filter: blur(60px);
          animation: nebulaPulse 8s ease-in-out infinite;
        }

        .nebula1 {
          top: -200px;
          right: -200px;
          background: radial-gradient(circle, rgba(255, 0, 128, 0.2) 0%, transparent 70%);
        }

        .nebula2 {
          bottom: -200px;
          left: -200px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 70%);
          animation-delay: 4s;
        }

        @keyframes nebulaPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
        }

        /* Planet */
        .planet-container {
          position: absolute;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        .planet {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at 30% 30%, #4a0e4e, #1a0033);
          border-radius: 50%;
          position: relative;
          box-shadow: 
            0 0 60px rgba(138, 43, 226, 0.5),
            inset -20px -20px 40px rgba(0, 0, 0, 0.5);
          animation: planetFloat 6s ease-in-out infinite;
          transform: translateX(${mousePos.x}px) translateY(${mousePos.y}px);
          transition: transform 0.3s ease-out;
        }

        @keyframes planetFloat {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-20px) rotateZ(5deg); }
        }

        .planet-ring {
          position: absolute;
          width: 150%;
          height: 30%;
          border: 2px solid rgba(138, 43, 226, 0.3);
          border-radius: 50%;
          top: 35%;
          left: -25%;
          transform: rotateX(65deg) rotateZ(-15deg);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
        }

        .planet-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 0, 128, 0.4) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          border-radius: 50%;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        /* Light beam */
        .light-beam {
          position: absolute;
          width: 800px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff0080, #8a2be2, transparent);
          top: 60%;
          right: 30%;
          transform: rotate(-25deg);
          opacity: 0.8;
          animation: beamMove 3s ease-in-out infinite;
        }

        @keyframes beamMove {
          0%, 100% { transform: rotate(-25deg) translateX(0); opacity: 0.8; }
          50% { transform: rotate(-25deg) translateX(-50px); opacity: 1; }
        }

        /* Content container */
        .content-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        /* Left content */
        .left-content {
          opacity: ${isVisible ? '1' : '0'};
          transform: translateX(${isVisible ? '0' : '-50px'});
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(138, 43, 226, 0.2);
          border: 1px solid rgba(138, 43, 226, 0.3);
          padding: 8px 20px;
          border-radius: 30px;
          color: #8a2be2;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .service-tag svg {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .hero-description {
          font-size: 18px;
          color: #b8b8b8;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        /* Right content - Form */
        .form-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 40px;
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 0 40px rgba(138, 43, 226, 0.1);
          opacity: ${isVisible ? '1' : '0'};
          transform: translateX(${isVisible ? '0' : '50px'});
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .form-title {
          font-size: 32px;
          font-weight: 600;
          color: white;
          margin-bottom: 30px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px 20px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #8a2be2;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.2);
        }

        .phone-input-group {
          display: flex;
          gap: 10px;
        }

        .country-code {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 16px;
          color: white;
          font-size: 16px;
          cursor: not-allowed;
          width: 80px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .country-code {
            padding: 12px 14px;
            font-size: 14px;
            width: 70px;
          }
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        /* Budget slider */
        .budget-group {
          margin-bottom: 30px;
        }

        .budget-label {
          color: white;
          font-size: 16px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .budget-value {
          font-size: 24px;
          font-weight: 600;
          color: #8a2be2;
        }

        .budget-slider {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          outline: none;
          -webkit-appearance: none;
          position: relative;
        }

        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: #8a2be2;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
          transition: all 0.3s ease;
        }

        .budget-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(138, 43, 226, 0.8);
        }

        .budget-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #8a2be2;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
        }

        .slider-track {
          position: absolute;
          height: 6px;
          background: linear-gradient(90deg, #ff0080, #8a2be2);
          border-radius: 3px;
          top: 50%;
          transform: translateY(-50%);
          width: ${(formData.budget / 100) * 100}%;
          pointer-events: none;
        }

        .budget-marks {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #ff0080 0%, #8a2be2 100%);
          border: none;
          border-radius: 12px;
          padding: 18px 40px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }

        .submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(138, 43, 226, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn span {
          position: relative;
          z-index: 1;
        }

        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .content-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .planet-container {
            display: none;
          }

          .hero-title {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .form-container {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Animated stars background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      <div className="nebula nebula1"></div>
      <div className="nebula nebula2"></div>

      {/* Planet */}
      <div className="planet-container">
        <div className="planet">
          <div className="planet-ring"></div>
          <div className="planet-glow"></div>
        </div>
      </div>

      {/* Light beam */}
      <div className="light-beam"></div>

      {/* Main content */}
      <div className="content-container">
        {/* Left content */}
        <div className="left-content">
          <div className="service-tag">
            <FaRocket />
            UX Design Services
          </div>
          
          <h1 className="hero-title">
            Empowering Your<br />
            Business With Strategic<br />
            UX Design Services
          </h1>
          
          <p className="hero-description">
            Gain a competitive advantage with our top-tier UX design services that will give your users the 
            experience they will love. Proficient at building UX strategies including UX research, interaction design, 
            and UX audit, Digital Gravity helps you achieve your business goals.
          </p>
        </div>

        {/* Right content - Form */}
        <div className="form-container">
          <h2 className="form-title">Have any questions?</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name*"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email*"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <div className="phone-input-group">
                <input
                  type="text"
                  value="+92"
                  className="country-code"
                  disabled
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="form-input"
                  style={{ flex: 1 }}
                />
              </div>
            </div>

            <div className="budget-group">
              <div className="budget-label">
                <span>Budget *</span>
                <span className="budget-value">{formatBudget(formData.budget)}</span>
              </div>
              <div style={{ position: 'relative' }}>
                <div className="slider-track"></div>
                <input
                  type="range"
                  name="budget"
                  min="5"
                  max="100"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="budget-slider"
                />
              </div>
              <div className="budget-marks">
                <span>AED 5K</span>
                <span>AED 100K+</span>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                placeholder="Tell us about your project *"
                className="form-input form-textarea"
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CosmicHeroSection;