'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaShoppingCart, 
  FaCar, 
  FaMapMarkedAlt, 
  FaHeartbeat, 
  FaStore, 
  FaHome,
  FaVrCardboard,
  FaIndustry,
  FaUniversity,
  FaCogs,
  FaTruck,
  FaWallet
} from 'react-icons/fa';
import styles from './css/IndustriesExpertiseSection.module.css';

const IndustriesExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const industries = [
    {
      id: 1,
      icon: <FaShoppingCart />,
      title: 'E-commerce',
      color: '#8b5cf6',
      description: 'Scalable online shopping solutions'
    },
    {
      id: 2,
      icon: <FaCar />,
      title: 'Taxi Booking',
      color: '#8b5cf6',
      description: 'On-demand transportation apps'
    },
    {
      id: 3,
      icon: <FaMapMarkedAlt />,
      title: 'Tourism',
      color: '#8b5cf6',
      description: 'Travel and hospitality platforms'
    },
    {
      id: 4,
      icon: <FaHeartbeat />,
      title: 'Healthcare',
      color: '#8b5cf6',
      description: 'Digital health and telemedicine'
    },
    {
      id: 5,
      icon: <FaStore />,
      title: 'Retail',
      color: '#8b5cf6',
      description: 'Modern retail management systems'
    },
    {
      id: 6,
      icon: <FaHome />,
      title: 'Real Estate',
      color: '#8b5cf6',
      description: 'Property management solutions'
    },
    {
      id: 7,
      icon: <FaVrCardboard />,
      title: 'Metaverse',
      color: '#8b5cf6',
      description: 'Virtual reality experiences'
    },
    {
      id: 8,
      icon: <FaIndustry />,
      title: 'Oil & Gas',
      color: '#8b5cf6',
      description: 'Energy sector digitalization'
    },
    {
      id: 9,
      icon: <FaUniversity />,
      title: 'Banking',
      color: '#8b5cf6',
      description: 'Secure financial applications'
    },
    {
      id: 10,
      icon: <FaCogs />,
      title: 'Manufacturing',
      color: '#8b5cf6',
      description: 'Industry 4.0 solutions'
    },
    {
      id: 11,
      icon: <FaTruck />,
      title: 'Logistics',
      color: '#8b5cf6',
      description: 'Supply chain optimization'
    },
    {
      id: 12,
      icon: <FaWallet />,
      title: 'FinTech',
      color: '#8b5cf6',
      description: 'Financial technology innovation'
    }
  ];

  return (
    <section className={styles.industriesSection} ref={sectionRef}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <div className={styles.patternGrid} />
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Expertise Across Top-Performing Industries
          </h2>
          <p className={styles.description}>
            As a company that's been working for over two decades, we specialise in delivering industry-specific solutions. Our bespoke approach addresses modern demands across 
            various sectors, delivering custom, high-impact applications that drive growth and innovation tailored to each industry's specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className={`${styles.industriesGrid} ${isVisible ? styles.visible : ''}`}>
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`${styles.industryCard} ${hoveredIndex === index ? styles.hovered : ''}`}
              style={{ '--index': index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background Effects */}
              <div className={styles.cardBg} />
              <div className={styles.cardGlow} style={{ '--color': industry.color }} />
              
              {/* Icon */}
              <div className={styles.iconWrapper}>
                <div className={styles.iconContainer} style={{ '--color': industry.color }}>
                  {industry.icon}
                </div>
                <div className={styles.iconShadow} />
              </div>

              {/* Title */}
              <h3 className={styles.industryTitle}>{industry.title}</h3>

              {/* Description (always visible) */}
              <p className={styles.industryDescription}>{industry.description}</p>

              {/* Hover Effects */}
              <div className={styles.hoverEffects}>
                <div className={styles.cornerTL} />
                <div className={styles.cornerTR} />
                <div className={styles.cornerBL} />
                <div className={styles.cornerBR} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.ctaText}>Ready to transform your industry?</p>
          <button className={styles.ctaButton}>
            <span>Explore Our Solutions</span>
            <div className={styles.buttonArrow}>→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesExpertiseSection;