'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaLightbulb, FaPencilRuler, FaCode, FaShieldAlt, FaRocket, FaStar } from 'react-icons/fa';
import './css/mobile-app.css';

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
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0s'
    },
    {
      id: 2,
      icon: <FaPencilRuler />,
      title: 'App Design & Prototype',
      description: 'Designers create engaging UI/UX with functional prototypes for feedback.',
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0.1s'
    },
    {
      id: 3,
      icon: <FaCode />,
      title: 'Ingenious App Development',
      description: 'We use advanced coding practices to build scalable, secure apps.',
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0.2s'
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Rigorous Testing & Quality Assurance',
      description: 'Automated testing and QA ensure seamless performance and bug-free apps.',
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0.3s'
    },
    {
      id: 5,
      icon: <FaRocket />,
      title: 'Performance Optimisation',
      description: 'We fine-tune app performance for speed, efficiency, and responsiveness.',
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0.4s'
    },
    {
      id: 6,
      icon: <FaStar />,
      title: 'Deployment & Post-Launch Support',
      description: 'We deploy your app, monitor feedback, and provide ongoing updates.',
      color: '#7BE7EA',
      gradient: 'linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)',
      delay: '0.5s'
    }
  ];

  const handleCardHover = (index) => {
    setActiveStep(index);
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
    <section className="dev-processSection" ref={sectionRef}>
      <div className="dev-dynamicBackground">
        <div className="dev-gradientOrbs">
          <div className="dev-orb1" />
          <div className="dev-orb2" />
          <div className="dev-orb3" />
        </div>
        <div className="dev-noiseTexture" />
        <div 
          className="dev-spotlightEffect"
          style={{
            '--mouse-x': mousePos.x,
            '--mouse-y': mousePos.y
          }}
        />
      </div>

      <div className="dev-particleField">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="dev-particle"
            style={{
              '--x': Math.random(),
              '--y': Math.random(),
              '--duration': `${20 + Math.random() * 20}s`,
              '--delay': `${Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="dev-perspectiveGrid">
        <div className="dev-gridLines" />
      </div>

      <div className="dev-container">
        <div className={`header ${isVisible ? "visible" : ''}`}> {/* Fixed here */}
          <h2 className="dev-title">
            <span className="dev-titleLine">
              <span className="dev-titleWord">Our</span>
              <span className="dev-titleWord">Lean,</span>
              <span className="dev-titleWord">Friction-Free</span>
            </span>
            <span className="dev-titleLine">
              <span className="dev-titleWord">App</span>
              <span className="dev-titleWord">
                <span className="dev-gradientText">Development</span> {/* Fixed here: removed extra quotes */}
              </span>
              <span className="dev-titleWord">
                <span className="dev-gradientText">Process</span> {/* Fixed here: removed extra quotes */}
              </span>
            </span>
          </h2>
          <p className="dev-subtitle">
            <span className="dev-subtitleLine">
              We use lean project management and agile methodologies to build efficient,
            </span>
            <span className="dev-subtitleLine">
              fail-safe user-facing applications with fast-tracked delivery.
            </span>
          </p>
        </div>

        <div className={`dev-processCards ${isVisible ? "visible" : ''}`}> {/* Fixed here */}
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="dev-cardWrapper"
              style={{ '--delay': step.delay }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div
                className={`dev-processCard ${activeStep === index ? "active" : ''}`}
                style={{
                  '--color': step.color,
                  '--gradient': step.gradient
                }}
              >
                
                <div className="dev-cardLayer1" />
                <div className="dev-cardLayer2" />
                <div className="dev-cardLayer3" />

                <div className="dev-cardPattern">
                  <div className="dev-patternGrid" />
                  <div className="dev-patternWave" />
                </div>

                <div className="dev-stepIndicator">
                  <div className="dev-stepNumber">{step.id}</div>
                  <div className="dev-stepPulse" />
                  <div className="dev-stepOrbit">
                    <span className="dev-orbitDot" />
                  </div>
                </div>

                <div className="dev-cardContent">
                  <div className="dev-iconContainer">
                    <div className="dev-iconFloat">
                      {step.icon}
                    </div>
                    <div className="dev-iconShadow" />
                    <div className="dev-iconRings">
                      <div className="dev-ring1" />
                      <div className="dev-ring2" />
                      <div className="dev-ring3" />
                    </div>
                  </div>

                  <h3 className="dev-cardTitle">
                    <span className="dev-titleText">{step.title}</span>
                    <span className="dev-titleGlow">{step.title}</span>
                  </h3>

                  <p className="dev-cardDescription">{step.description}</p>

                  <div className="dev-cardFooter">
                    <div className="dev-progressIndicator">
                    </div>
                  </div>
                </div>

                <div className="dev-cardGlow" />
                <div className="dev-cardReflection" />
              </div>
            </div>
          ))}
        </div>

        <div className={`dev-ctaSection ${isVisible ? "visible" : ''}`}> {/* Fixed here */}
          <button className="dev-ctaButton">
            <div className="dev-buttonBg" />
            <span className="dev-buttonText">Start Your App Journey</span>
            <div className="dev-buttonEffects">
              <div className="dev-buttonGlow" />
              <div className="dev-buttonPulse" />
              <div className="dev-buttonShine" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentProcess;