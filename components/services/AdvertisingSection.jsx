"use client"
import styles from './css/AdvertisingSection.module.css';
import React, { useState, useEffect } from 'react';
import { TfiClipboard } from "react-icons/tfi";
import { MdOutlineStyle } from "react-icons/md";

const AdvertisingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(`.${styles.advertisingSection}`);
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: 'Whiteboard Video Animation',
      description: 'Engage your audience with hand-drawn storytelling that simplifies complex ideas into memorable visual narratives',
      icon: <TfiClipboard color="white" size={80} />,
      color: '#8b5cf6'
    },
     {
      title: 'Character Animation',
      description: 'Bring your brand to life with custom animated characters and mascots that connect with your audience',
      icon: <MdOutlineStyle color="white" size={80} />,
      color: '#89ff02ff'
    },
    {
      title: 'Video Game Trailers',
      description: 'Epic cinematic trailers that showcase your game\'s best features and create excitement',
      icon: <TfiClipboard color="white" size={80} />,
      color: '#ef4444'
    },
    {
      title: 'Product Demo Video',
      description: 'Show your product in action with compelling demonstration videos that drive conversions',
      icon: <MdOutlineStyle color="white" size={80} />,
      color: '#f59e0b'
    },
    {
      title: 'Explainer Videos',
      description: 'Clear, concise videos that explain your service or product simply and effectively',
      icon: <TfiClipboard color="white" size={80} />,
      color: '#10b981'
    },
    {
      title: 'Medical Animation',
      description: 'Professional medical and healthcare animations for education and marketing purposes',
      icon: <MdOutlineStyle color="white" size={80} />,
      color: '#ec4899'
    },
    {
      title: '3D Architectural Walkthroughs',
      description: 'Stunning 3D visualizations of architectural projects that bring blueprints to life',
      icon: <TfiClipboard color="white" size={80} />,
      color: '#48AAAD'
    }
  ];

  const currentService = services[activeTab];

  return (
    <section className={styles.advertisingSection}>
      <div className={styles.dynamicBackgroundGrid} />
      <div className={styles.animatedOrb1} />
      <div className={styles.animatedOrb2} />

      {!isMobile && (
        <div 
          className={styles.cursorLight}
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300
          }}
        />
      )}

      <div className={styles.advertisingContainer}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.animateIn : ''}`}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Creative Excellence</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Advertising & &nbsp;
            <span className={styles.titleGradient}>Creative</span>
          </h2>

          <p className={styles.sectionSubtitle}>
            Transform your vision into captivating visual stories that engage, inspire, and convert your audience
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.leftContent} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.contentCard}>
              <div className={styles.contentCardPattern} />
              <div className={styles.contentCardInner}>
                <h3 className={styles.contentTitle}>Digital Advertisement</h3>
                <p className={styles.contentDescription}>
                  Our comprehensive video production services combine cutting-edge technology with creative expertise to deliver content that captivates and converts.
                </p>

                <div className={styles.statsContainer}>
                  <div className={`${styles.statCard} ${styles.statCardTeal}`}>
                    <h4 className={`${styles.statNumber} ${styles.statNumberTeal}`}>500+</h4>
                    <p className={styles.statLabel}>Projects Completed</p>
                  </div>
                  <div className={`${styles.statCard} ${styles.statCardPurple}`}>
                    <h4 className={`${styles.statNumber} ${styles.statNumberPurple}`}>98%</h4>
                    <p className={styles.statLabel}>Client Satisfaction</p>
                  </div>
                </div>

                <button className={styles.ctaButton}>
                  <span>Quick Start →</span>
                </button>
              </div>
            </div>
          </div>

          <div className={`${styles.rightContent} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.serviceDisplay}>
              <div className={styles.holographicEffect} />
              <div 
                className={styles.serviceScreen}
                style={{
                  background: `radial-gradient(circle at center, ${currentService.color}20 0%, transparent 70%)`,
                  border: `2px solid ${currentService.color}40`
                }}
              >
                <div 
                  className={styles.dynamicGlow}
                  style={{
                    background: `radial-gradient(circle, ${currentService.color}30 0%, transparent 70%)`
                  }}
                />
                <div 
                  className={styles.floatingParticles}
                  style={{
                    '--service-color-60': `${currentService.color}60`,
                    '--service-color-40': `${currentService.color}40`
                  }}
                />
                <div className={styles.serviceContent}>
                  <div className={styles.serviceIcon}>
                    {currentService.icon}
                  </div>
                  <h4 className={styles.serviceTitle}>{currentService.title}</h4>
                  <p className={styles.serviceDescription}>{currentService.description}</p>
                </div>
              </div>
            </div>

            <div className={styles.serviceNav}>
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`${styles.serviceNavItem} ${
                    activeTab === index 
                      ? `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`
                      : styles.serviceNavItemInactive
                  }`}
                  style={{
                    borderColor: activeTab === index ? `${service.color}60` : undefined
                  }}
                >
                  <div className={styles.serviceNavItemIcon}>
                    {React.cloneElement(service.icon, { size: 24 })}
                  </div>
                  <div className={`${styles.serviceNavItemText} ${
                    activeTab === index ? styles.serviceNavItemTextActive : styles.serviceNavItemTextInactive
                  }`}>
                    {service.title.split(' ')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;