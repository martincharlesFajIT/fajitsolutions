'use client';

import React, { useEffect, useState, useRef } from 'react';
import './css/mobile-app.css';

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
    <section className="whyWorkSection" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="backgroundEffects">
        <div className="gradientOrb1" />
        <div className="gradientOrb2" />
        <div className="gridPattern" />
        <div 
          className="mouseGlow"
          style={{
            '--mouse-x': mousePos.x,
            '--mouse-y': mousePos.y
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="particlesContainer">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.2}s`,
              '--duration': `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="contentWrapper">
          {/* Left Content */}
          <div className={`"leftContent" ${isVisible ? "visible" : ''}`}>
            <div className="titleWrapper">
              <h2 className="title">
                Why Work with <span className="highlight">Faj IT</span>?
              </h2>
              <div className="titleUnderline" />
            </div>

            <p className="description">
              Faj IT is an expert-led, full-cycle mobile app development agency in the 
              UK. We build scalable mobile app solutions with interactive frontends and 
              secure backends with a keen focus on user engagement, business growth, 
              and future readiness.
            </p>

            <div className="featureSection">
              <h3 className="featureTitle">
                High-Performing Mobile Apps for Sustainable Business Growth
              </h3>

              <p className="featureDescription">
                Faj IT's mobile app development services in the UK focus on scalable 
                business growth through high-performing mobile applications. Over 8 
                years, we've collaborated with multinationals, SMEs, and entrepreneurs, 
                efficiently overcoming app challenges.
              </p>

              <p className="featureDescription">
                Our UK team of top developers delivers disruptive mobile applications with 
                exceptional skill and experience. Faj IT now operates globally, providing 
                diverse digital solutions to businesses of all sizes.
              </p>
            </div>

            <button className="ctaButton">
              <span className="buttonText">Let's Build Your Chart-Topping App</span>
              <div className="buttonEffects">
                <div className="buttonGlow" />
                <div className="buttonShine" />
              </div>
            </button>

            {/* Stats */}
            <div className="stats">
              <div className="statItem">
                <span className="statNumber">500+</span>
                <span className="statLabel">Apps Delivered</span>
              </div>
              <div className="statItem">
                <span className="statNumber">8+</span>
                <span className="statLabel">Years Experience</span>
              </div>
              <div className="statItem">
                <span className="statNumber">98%</span>
                <span className="statLabel">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`"rightContent" ${isVisible ? "visible" : ''}`}>
            <div className="imageContainer">
              <div className="imageWrapper">
                <img 
                  src="/images/working_faj.webp" 
                  alt="Mobile App Development"
                  className="showcaseImage"
                />
                
                {/* Decorative elements */}
                <div className="imageGlow" />
                <div className="imageBorder" />
                <div className="floatingCircle1" />
                <div className="floatingCircle2" />
                <div className="floatingCircle3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithSection;