"use client"
import React, { useState, useEffect } from 'react';
import './css/HireDeveloperSection.css';

const HireDeveloperSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [codeRainColumns, setCodeRainColumns] = useState([]);

  const skills = [
    { name: "React Developers", color: "#61dafb" },
    { name: "Node.js Experts", color: "#43853d" },
    { name: "Laravel Expert", color: "#8b5cf6" },
    { name: "Mobile App Developers", color: "#06b6d4" },
    { name: "AI/ML Engineers", color: "#10b981" }
  ];

  useEffect(() => {
    setMounted(true);
    // Generate random values only on client side
    const columns = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${i * 7}%`,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setCodeRainColumns(columns);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.hire-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section className={`hire-section ${isMobile ? 'mobile' : ''}`}>
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Code Rain Effect */}
        {mounted && (
          <div className="code-rain-container">
            {codeRainColumns.map((column) => (
              <div
                key={column.id}
                className="code-rain-column"
                style={{
                  left: column.left,
                  animationDuration: `${column.duration}s`,
                  animationDelay: `${column.delay}s`
                }}
              >
                {`{code}
                </>`}
                <br />
                {`function()
                {}`}
                <br />
                {`=>{}
                const`}
                <br />
                {`[...]
                async`}
              </div>
            ))}
          </div>
        )}

        {/* Gradient Orbs */}
        <div className="gradient-orb"></div>
      </div>

      <div className={`hire-container ${isMobile ? 'mobile' : ''}`}>
        {/* Hero Section */}
        <div className={`hire-grid ${isMobile ? 'mobile' : ''}`}>
          {/* Left Content */}
          <div className={`hire-content ${isVisible ? 'animate-in' : ''}`}>

            <h1 className="hire-title">
              <span className="title-white">Hire Expert</span>
              <br />
              <span className="title-gradient" style={{ color: skills[activeSkill].color }}>
                {skills[activeSkill].name}
              </span>
              <br />
              <span className="title-white">for Your Next Project</span>
            </h1>

            <p className="hire-description">
              Access our pool of pre-vetted developers who can transform your ideas into reality. 
              From startups to enterprises, we provide the perfect talent match for your needs.
            </p>

            <div className="hire-buttons">
              <button className="btn-primary">
                Hire Developers →
              </button>

              <button className="btn-secondary">
                View Portfolio
              </button>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
              {[
                { number: '200+', label: 'Expert Developers' },
                { number: '95%', label: 'Client Retention' },
                { number: '24hr', label: 'Avg Response Time' }
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Developer Image */}
          <div className={`developer-image ${isVisible ? 'animate-in' : ''} ${isMobile ? 'mobile' : ''}`}>
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop"
                alt="Expert Developer"
                className="developer-img"
              />
              {/* Gradient Overlay */}
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloperSection;