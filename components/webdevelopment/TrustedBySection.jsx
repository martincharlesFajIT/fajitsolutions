'use client';

import React, { useEffect, useState, useRef } from 'react';

const TrustedBySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Logo data - replace src with your actual logo paths
  const logos = [
    { name: 'ERPNext', src: '/images/logos/erpnext.png', color: '#3498db' },
    { name: 'Odoo', src: '/images/logos/odoo.png', color: '#875a7b' },
    { name: 'QuickBooks', src: '/images/logos/quickbooks.png', color: '#2ca01c' },
    { name: 'Sage', src: '/images/logos/sage.png', color: '#6366f1' },
    { name: 'TallyPrime', src: '/images/logos/tallyprime.png', color: '#ff6b6b' },
  ];

  return (
    <section className="trusted-by-section" ref={sectionRef}>
      <style jsx>{`
        .trusted-by-section {
          padding: 120px 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        /* Animated gradient background */
        .gradient-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          animation: gradientShift 10s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Moving grid pattern */
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Spotlight effect following mouse */
        .spotlight {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
          left: ${mousePosition.x - 300}px;
          top: ${mousePosition.y - 300}px;
          transition: all 0.3s ease-out;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 10;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '50px'});
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-title {
          font-size: 60px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
          letter-spacing: -1px;
        }

        .title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #666666 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-accent {
          color: #845FF6;
          position: relative;
        }

        .title-accent::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffc107, #ff6b6b);
          border-radius: 2px;
          transform: scaleX(${isVisible ? '1' : '0'});
          transition: transform 0.8s ease-out 0.5s;
        }

        .subtitle {
          font-size: 18px;
          color: #888888;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '20px'});
          transition: all 1s ease-out 0.2s;
        }

        /* Logo grid */
        .logos-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          align-items: center;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Logo card */
        .logo-card {
          position: relative;
          width: 180px;
          height: 120px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '60px'}) scale(${isVisible ? '1' : '0.8'});
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: calc(var(--index) * 0.1s);
          cursor: pointer;
        }

        /* Glass card effect */
        .glass-card {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .logo-card:hover .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.3),
            0 0 30px -5px var(--logo-color);
        }

        /* Glow effect on hover */
        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--logo-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          filter: blur(40px);
          pointer-events: none;
        }

        .logo-card:hover .glow-effect {
          opacity: 0.3;
        }

        /* Logo content */
        .logo-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .logo-placeholder {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          opacity: 0.6;
          transition: all 0.3s ease;
          text-align: center;
        }

        .logo-card:hover .logo-placeholder {
          opacity: 1;
          transform: scale(1.1);
          color: var(--logo-color);
          text-shadow: 0 0 20px var(--logo-color);
        }

        /* Actual logo styling */
        .logo-image {
          max-width: 140px;
          max-height: 60px;
          filter: brightness(0) invert(1) opacity(0.6);
          transition: all 0.3s ease;
        }

        .logo-card:hover .logo-image {
          filter: brightness(1) invert(0) opacity(1);
          transform: scale(1.1);
        }

        /* Shine effect */
        .shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transform: translateX(0);
          transition: transform 0.6s ease;
          pointer-events: none;
        }

        .logo-card:hover .shine {
          transform: rotate(45deg) translateX(100%);
        }

        /* Floating particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #ffffff;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 10s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 40px;
          }

          .logos-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .logo-card {
            width: 150px;
            height: 100px;
          }
        }

        /* Stats counter */
        .stats-container {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin-top: 80px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 1s ease-out 0.8s;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, #ffc107 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .stats-container {
            gap: 40px;
          }

          .stat-number {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Background effects */}
      <div className="gradient-bg"></div>
      <div className="grid-pattern"></div>
      <div className="spotlight"></div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Trusted by</span>{' '}
            <span className="title-accent">Industry Leaders</span>
          </h2>
          <p className="subtitle">
            Join thousands of businesses that rely on our expertise to transform their digital presence
          </p>
        </div>

        {/* Logo Grid */}
        <div className="logos-container">
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className="logo-card"
              style={{ 
                '--index': index,
                '--logo-color': logo.color
              }}
            >
              <div className="glass-card">
                <div className="shine"></div>
              </div>
              <div className="glow-effect"></div>
              <div className="logo-content">
                {/* Replace with actual image */}
                {/* <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="logo-image"
                /> */}
                
                {/* Placeholder - Remove when adding real logos */}
                <div className="logo-placeholder">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;