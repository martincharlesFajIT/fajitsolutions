'use client';

import React, { useState, useEffect, useRef } from 'react';
import '../components/HeroServiceDetail.css';

const HeroServiceDetail = ({ title, description }) => {
    const [hasMounted, setHasMounted] = useState(false);
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
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const sectionRef = useRef(null);

    // Combined useEffect for mounting and visibility
    useEffect(() => {
        setHasMounted(true);
        setIsVisible(true);
    }, []);

    // Separate useEffect for mouse movement
    useEffect(() => {
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

    const formatBudget = (value) => {
        if (value < 100) return `AED ${value}K`;
        return `AED ${value}K+`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '96d1fa48-d0bc-4033-9d8d-966e6dfede5d',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone ? `+92${formData.phone}` : 'Not provided',
                    budget: formatBudget(formData.budget),
                    message: formData.project,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: formData.name,
                    to: 'chaudharybilal1990@gmail.com'
                })
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.'
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    budget: 50,
                    project: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
            }, 5000);
        }
    };

    return (
        <section className="cosmic-hero-section" ref={sectionRef}>
            {/* Animated stars background */}
            {hasMounted && (
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
            )}

            {/* Nebula effects */}
            <div className="nebula nebula1"></div>
            <div className="nebula nebula2"></div>

            {/* Planet */}
            <div className="planet-container">
                <div 
                    className="planet" 
                    style={{
                        transform: `translateX(${mousePos.x}px) translateY(${mousePos.y}px)`
                    }}
                >
                    <div className="planet-ring"></div>
                    <div className="planet-glow"></div>
                </div>
            </div>

            {/* Light beam */}
            <div className="light-beam"></div>

            {/* Main content */}
            <div className="content-container">
                {/* Left content */}
                <div 
                    className="left-content"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <h1 className="hero-title">
                        {title}
                    </h1>

                    <p className="hero-description">
                        {description}
                    </p>
                </div>

                {/* Right content - Form */}
                <div 
                    className="form-container"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                    }}
                >
                    <h2 className="form-title">Have any questions?</h2>

                    {/* Status Message */}
                    {submitStatus.message && (
                        <div 
                            style={{
                                padding: '12px 16px',
                                borderRadius: '8px',
                                marginBottom: '20px',
                                backgroundColor: submitStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
                                border: `1px solid ${submitStatus.type === 'success' ? '#22c55e' : '#ef4444'}`,
                                color: submitStatus.type === 'success' ? '#16a34a' : '#dc2626',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}
                        >
                            {submitStatus.message}
                        </div>
                    )}

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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="budget-group">
                            <div className="budget-label">
                                <span>Budget *</span>
                                <span className="budget-value">{formatBudget(formData.budget)}</span>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <div 
                                    className="slider-track"
                                    style={{
                                        width: `${(formData.budget / 100) * 100}%`,
                                    }}
                                ></div>
                                <input
                                    type="range"
                                    name="budget"
                                    min="5"
                                    max="100"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="budget-slider"
                                    disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                        </div>

                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            <span>
                                {isSubmitting ? (
                                    <>
                                        <span style={{ marginRight: '8px' }}>⏳</span>
                                        Sending...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroServiceDetail;