"use client";
import { useEffect, useRef } from 'react';
import '../../css/Mobileinnerpages.css';

const ReactBenefit = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
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

  const benefits = [
    {
      id: '01',
      title: 'Robust Technology Integration',
      description: 'Drive your business forward with our React Native mobile app development, utilizing hi-tech technologies for unmatched results.'
    },
    {
      id: '02',
      title: 'Adaptable Solutions for Mobile Success',
      description: 'Achieve business goals through high-performing applications with our tailored and practical approach, customized to meet your exclusive requirements.'
    },
    {
      id: '03',
      title: 'Clarity in the Development Journey',
      description: 'Ensure transparency at each development stage with clear processes, keeping you informed through cutting-edge project management tools for a seamless journey.'
    },
    {
      id: '04',
      title: 'Economical Project Investment',
      description: 'Get precise cost estimates for React Native application development with our budget-friendly pricing, ensuring economic effectiveness throughout the project.'
    }
  ];

  return (
    <section ref={sectionRef} className="benefits-section scroll-animate">
      <div className="benefits-container">
        <h2 className="benefits-main-title">
          Benefits of Working with a Proficient <span className="highlight-orange">React Native App Development</span> Company
        </h2>
        
        <p className="benefits-description">
          Partnering with FAJ IT Solutions experienced React Native developers guarantees a flawless digital transformation. We are dedicated to fostering your concepts and ideas, rendering them into result-focused, user-oriented digital experiences. Dive into novelty with our dedicated team.
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="benefit-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="benefit-header">
                <span className="benefit-number">{benefit.id}</span>
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="benefit-title">{benefit.title}</h3>
              
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactBenefit;