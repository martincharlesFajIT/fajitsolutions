'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './css/WhyWorkWithSection.module.css';

const WhyWorkWithSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.whyWorkSection} ref={sectionRef}>
      {/* Dynamic Background */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridPattern} />
        <div 
          className={styles.mouseGlow}
          style={{
            '--mouse-x': mousePos.x,
            '--mouse-y': mousePos.y
          }}
        />
      </div>

      {/* Floating particles */}
      <div className={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--delay': `${i * 0.2}s`,
              '--duration': `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={`${styles.leftContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>
                Why Work with <span className={styles.highlight}>Faj IT</span>?
              </h2>
              <div className={styles.titleUnderline} />
            </div>

            <p className={styles.description}>
              Faj IT is an expert-led, full-cycle mobile app development agency in the 
              UK. We build scalable mobile app solutions with interactive frontends and 
              secure backends with a keen focus on user engagement, business growth, 
              and future readiness.
            </p>

            <div className={styles.featureSection}>
              <h3 className={styles.featureTitle}>
                High-Performing Mobile Apps for Sustainable Business Growth
              </h3>

              <p className={styles.featureDescription}>
                Faj IT's mobile app development services in the UK focus on scalable 
                business growth through high-performing mobile applications. Over 8 
                years, we've collaborated with multinationals, SMEs, and entrepreneurs, 
                efficiently overcoming app challenges.
              </p>

              <p className={styles.featureDescription}>
                Our UK team of top developers delivers disruptive mobile applications with 
                exceptional skill and experience. Faj IT now operates globally, providing 
                diverse digital solutions to businesses of all sizes.
              </p>
            </div>

            <button className={styles.ctaButton}>
              <span className={styles.buttonText}>Let's Build Your Chart-Topping App</span>
              <div className={styles.buttonEffects}>
                <div className={styles.buttonGlow} />
                <div className={styles.buttonShine} />
              </div>
            </button>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Apps Delivered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`${styles.rightContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                {/* Replace with your actual image */}
                <img 
                  src="/images/working_faj.webp" 
                  alt="Mobile App Development"
                  className={styles.showcaseImage}
                />
                
                {/* Decorative elements */}
                <div className={styles.imageGlow} />
                <div className={styles.imageBorder} />
                <div className={styles.floatingCircle1} />
                <div className={styles.floatingCircle2} />
                <div className={styles.floatingCircle3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithSection;