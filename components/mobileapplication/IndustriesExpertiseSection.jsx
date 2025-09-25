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
import './css/mobile-app.css';

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
      color: '#68BDC0',
      description: 'Scalable online shopping solutions'
    },
    {
      id: 2,
      icon: <FaCar />,
      title: 'Taxi Booking',
      color: '#68BDC0',
      description: 'On-demand transportation apps'
    },
    {
      id: 3,
      icon: <FaMapMarkedAlt />,
      title: 'Tourism',
      color: '#68BDC0',
      description: 'Travel and hospitality platforms'
    },
    {
      id: 4,
      icon: <FaHeartbeat />,
      title: 'Healthcare',
      color: '#68BDC0',
      description: 'Digital health and telemedicine'
    },
    {
      id: 5,
      icon: <FaStore />,
      title: 'Retail',
      color: '#68BDC0',
      description: 'Modern retail management systems'
    },
    {
      id: 6,
      icon: <FaHome />,
      title: 'Real Estate',
      color: '#68BDC0',
      description: 'Property management solutions'
    },
    {
      id: 7,
      icon: <FaVrCardboard />,
      title: 'Metaverse',
      color: '#68BDC0',
      description: 'Virtual reality experiences'
    },
    {
      id: 8,
      icon: <FaIndustry />,
      title: 'Oil & Gas',
      color: '#68BDC0',
      description: 'Energy sector digitalization'
    },
    {
      id: 9,
      icon: <FaUniversity />,
      title: 'Banking',
      color: '#68BDC0',
      description: 'Secure financial applications'
    },
    {
      id: 10,
      icon: <FaCogs />,
      title: 'Manufacturing',
      color: '#68BDC0',
      description: 'Industry 4.0 solutions'
    },
    {
      id: 11,
      icon: <FaTruck />,
      title: 'Logistics',
      color: '#68BDC0',
      description: 'Supply chain optimization'
    },
    {
      id: 12,
      icon: <FaWallet />,
      title: 'FinTech',
      color: '#68BDC0',
      description: 'Financial technology innovation'
    }
  ];

  return (
    <section className="industriesSection" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="backgroundPattern">
        <div className="patternGrid" />
        <div className="gradientOverlay" />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`header ${isVisible ? "visible" : ''}`}>
          <h2 className="title">
            Expertise Across Top-Performing Industries
          </h2>
          <p className="description">
            As a company that's been working for over two decades, we specialise in delivering industry-specific solutions. Our bespoke approach addresses modern demands across 
            various sectors, delivering custom, high-impact applications that drive growth and innovation tailored to each industry's specific needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className={`industriesGrid ${isVisible ? "visible" : ''}`}>
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`industryCard ${hoveredIndex === index ? "hovered" : ''}`}
              style={{ '--index': index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background Effects */}
              <div className="cardBg" />
              <div className="cardGlow" style={{ '--color': industry.color }} />
              
              {/* Icon */}
              <div className="iconWrapper">
                <div className="iconContainer" style={{ '--color': industry.color }}>
                  {industry.icon}
                </div>
                <div className="iconShadow" />
              </div>

              {/* Title */}
              <h3 className="industryTitle">{industry.title}</h3>

              {/* Description (always visible) */}
              <p className="industryDescription">{industry.description}</p>

              {/* Hover Effects */}
              <div className="hoverEffects">
                <div className="cornerTL" />
                <div className="cornerTR" />
                <div className="cornerBL" />
                <div className="cornerBR" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`"ctaSection" ${isVisible ? "bv-visible" : ''}`}>
          <p className="ctaText">Ready to transform your industry?</p>
          <button className="ctaButton">
            <span>Explore Our Solutions</span>
            <div className="buttonArrow">→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesExpertiseSection;