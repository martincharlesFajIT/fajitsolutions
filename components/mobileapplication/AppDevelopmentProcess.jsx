'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaShieldAlt, FaRocket, FaStar } from 'react-icons/fa';
import styles from './css/AppDevelopmentProcess.module.css';

const AppDevelopmentProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

  const processSteps = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: 'App Conceptualisation & Roadmap',
      description: 'We analyse market trends to craft a detailed development roadmap.',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
      delay: '0s'
    },
    {
      id: 2,
      icon: <FaPencilRuler />,
      title: 'App Design & Prototype',
      description: 'Designers create engaging UI/UX with functional prototypes for feedback.',
      color: '#9333ea',
      gradient: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
      delay: '0.1s'
    },
    {
      id: 3,
      icon: <FaCode />,
      title: 'Ingenious App Development',
      description: 'We use advanced coding practices to build scalable, secure apps.',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
      delay: '0.2s'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Rigorous Testing & Quality Assurance',
      description: 'Automated testing and QA ensure seamless performance and bug-free apps.',
      color: '#c084fc',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #d8b4fe 100%)',
      delay: '0.3s'
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: 'Performance Optimisation',
      description: 'We fine-tune app performance for speed, efficiency, and responsiveness.',
      color: '#d8b4fe',
      gradient: 'linear-gradient(135deg, #d8b4fe 0%, #e9d5ff 100%)',
      delay: '0.4s'
    },
    {
      id: 6,
      icon: <FaStar />,
      title: 'Deployment & Post-Launch Support',
      description: 'We deploy your app, monitor feedback, and provide ongoing updates.',
      color: '#e9d5ff',
      gradient: 'linear-gradient(135deg, #e9d5ff 0%, #f3e8ff 100%)',
      delay: '0.5s'
    }
  ];

  const handleCardHover = (index) => {
    setActiveStep(index);
    // Tilt effect for adjacent cards
    cardsRef.current.forEach((card, i) => {
      if (card) {
        if (i === index) {
          card.style.transform = 'rotateY(0deg) scale(1.05)';
        } else if (i === index - 1) {
          card.style.transform = 'rotateY(5deg) scale(0.98)';
        } else if (i === index + 1) {
          card.style.transform = 'rotateY(-5deg) scale(0.98)';
        } else {
          card.style.transform = 'rotateY(0deg) scale(1)';
        }
      }
    });
  };

  const handleCardLeave = () => {
    setActiveStep(null);
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.transform = 'rotateY(0deg) scale(1)';
      }
    });
  };

  return (
    <section className={styles.processSection} ref={sectionRef}>
      {/* Dynamic background */}
      <div className={styles.dynamicBackground}>
        <div className={styles.gradientOrbs}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>
        <div className={styles.noiseTexture} />
        <div 
          className={styles.spotlightEffect}
          style={{
            '--mouse-x': mousePos.x,
            '--mouse-y': mousePos.y
          }}
        />
      </div>

      {/* Floating particles */}
      <div className={styles.particleField}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--x': Math.random(),
              '--y': Math.random(),
              '--duration': `${20 + Math.random() * 20}s`,
              '--delay': `${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* 3D Grid Lines */}
      <div className={styles.perspectiveGrid}>
        <div className={styles.gridLines} />
      </div>

      <div className={styles.container}>
        {/* Header with split text animation */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>Our</span>
              <span className={styles.titleWord}>Lean,</span>
              <span className={styles.titleWord}>Friction-Free</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>App</span>
              <span className={styles.titleWord}>
                <span className={styles.gradientText}>Development</span>
              </span>
              <span className={styles.titleWord}>
                <span className={styles.gradientText}>Process</span>
              </span>
            </span>
          </h2>
          <p className={styles.subtitle}>
            <span className={styles.subtitleLine}>
              We use lean project management and agile methodologies to build efficient,
            </span>
            <span className={styles.subtitleLine}>
              fail-safe user-facing applications with fast-tracked delivery.
            </span>
          </p>
        </div>

        {/* Process Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelinePath}>
            <svg viewBox="0 0 1200 100" className={styles.pathSvg}>
              <path
                d="M 0 50 Q 200 20 400 50 T 800 50 T 1200 50"
                className={styles.flowPath}
              />
            </svg>
          </div>
        </div>

        {/* Process Cards with 3D effect */}
        <div className={`${styles.processCards} ${isVisible ? styles.visible : ''}`}>
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.cardWrapper}
              style={{ '--delay': step.delay }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div
                className={`${styles.processCard} ${activeStep === index ? styles.active : ''}`}
                style={{
                  '--color': step.color,
                  '--gradient': step.gradient
                }}
              >

                
                {/* Card layers for depth */}
                <div className={styles.cardLayer1} />
                <div className={styles.cardLayer2} />
                <div className={styles.cardLayer3} />

                {/* Animated background pattern */}
                <div className={styles.cardPattern}>
                  <div className={styles.patternGrid} />
                  <div className={styles.patternWave} />
                </div>

                {/* Step indicator */}
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumber}>{step.id}</div>
                  <div className={styles.stepPulse} />
                  <div className={styles.stepOrbit}>
                    <span className={styles.orbitDot} />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  {/* Animated icon */}
                  <div className={styles.iconContainer}>
                    <div className={styles.iconFloat}>
                      {step.icon}
                    </div>
                    <div className={styles.iconShadow} />
                    <div className={styles.iconRings}>
                      <div className={styles.ring1} />
                      <div className={styles.ring2} />
                      <div className={styles.ring3} />
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <span className={styles.titleText}>{step.title}</span>
                    <span className={styles.titleGlow}>{step.title}</span>
                  </h3>

                  <p className={styles.cardDescription}>{step.description}</p>

                  {/* Interactive elements */}
                  <div className={styles.cardFooter}>
                    <div className={styles.progressIndicator}>
                    </div>
                  </div>
                </div>

                {/* Card effects */}
                <div className={styles.cardGlow} />
                <div className={styles.cardReflection} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with morphing button */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <button className={styles.ctaButton}>
            <div className={styles.buttonBg} />
            <span className={styles.buttonText}>Start Your App Journey</span>
            <div className={styles.buttonEffects}>
              <div className={styles.buttonGlow} />
              <div className={styles.buttonPulse} />
              <div className={styles.buttonShine} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentProcess;