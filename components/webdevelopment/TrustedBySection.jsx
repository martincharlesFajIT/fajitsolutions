'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '../webdevelopment/css/TrustedBySection.module.css';

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

  // Generate particles only after component mounts (client-side only)
  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 10,
      animationDuration: 10 + Math.random() * 10
    }));
    setParticles(particleArray);
  }, []);

  // Logo data - replace src with your actual logo paths
  const logos = [
    { name: 'ERPNext', src: '/images/logos/erpnext.png', color: '#3498db' },
    { name: 'Odoo', src: '/images/logos/odoo.png', color: '#875a7b' },
    { name: 'QuickBooks', src: '/images/logos/quickbooks.png', color: '#2ca01c' },
    { name: 'Sage', src: '/images/logos/sage.png', color: '#6366f1' },
    { name: 'TallyPrime', src: '/images/logos/tallyprime.png', color: '#ff6b6b' },
  ];

  // Generate particles data only on client side
  const [particles, setParticles] = useState([]);

  return (
    <section className={styles.trustedBySection} ref={sectionRef}>
      {/* Background effects */}
      <div className={styles.gradientBg}></div>
      <div className={styles.gridPattern}></div>
      <div 
        className={styles.spotlight}
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`
        }}
      ></div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleGradient}>Trusted by</span>{' '}
            <span className={styles.titleAccent}>Industry Leaders</span>
          </h2>
          <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
            Join thousands of businesses that rely on our expertise to transform their digital presence
          </p>
        </div>

        {/* Logo Grid */}
        <div className={styles.logosContainer}>
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`${styles.logoCard} ${isVisible ? styles.visible : ''}`}
              style={{ 
                '--logo-color': logo.color
              }}
            >
              <div className={styles.glassCard}>
                <div className={styles.shine}></div>
              </div>
              <div className={styles.glowEffect}></div>
              <div className={styles.logoContent}>
                {/* Replace with actual image */}
                {/* <img 
                  src={logo.src} 
                  alt={logo.name}
                  className={styles.logoImage}
                /> */}
                
                {/* Placeholder - Remove when adding real logos */}
                <div className={styles.logoPlaceholder}>
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