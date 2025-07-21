'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './css/AppServices.module.css';
import { BsAndroid2 } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { SiPwa } from "react-icons/si";
import { RiApps2Line } from "react-icons/ri";

const AppServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const services = [
    {
      id: 1,
      icon: <BsAndroid2 />,
      title: 'Android App Development',
      description: 'Our skilled Android developers give your app ideas a tangible form, from intuitive UI/UX design to robust functionality. We create Android apps in line all that resonate with your target audience.',
      link: 'Get Android App Developed',
      color: '#4CAF50',
      gradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)'
    },
    {
      id: 2,
      icon: <GrApple />,
      title: 'iPhone App Development',
      description: 'Conquer the iOS ecosystem with our iPhone app development services in the UK. We combine flawless designs with optimized 3.X code, performance, and we ensure seamless performance, elegant design, and adherence to App Store guidelines.',
      link: 'Get iPhone App Developed',
      color: '#007AFF',
      gradient: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)'
    },
    {
      id: 3,
      icon: <TbBrandReactNative />,
      title: 'React Native App Development',
      description: 'React Native bridges the gap between native and cross-platform development. Our React Native app developers in the UK provide the native look and feel of both worlds—native performance and code reusability without compromising on quality.',
      link: 'Get React Native App Development',
      color: '#61DAFB',
      gradient: 'linear-gradient(135deg, #61DAFB 0%, #0088CC 100%)'
    },
    {
      id: 4,
      icon: <FaFlutter />,
      title: 'Flutter App Development',
      description: 'Flutter, Google\'s UI toolkit empowers us to build natively compiled apps for multiple platforms from a single codebase. Whether you need a dynamic mobile app or a web application, our Flutter developers deliver captivating experiences across devices.',
      link: 'Get Flutter App Development',
      color: '#02569B',
      gradient: 'linear-gradient(135deg, #02569B 0%, #0175C2 100%)'
    },
    {
      id: 5,
      icon: <SiPwa />,
      title: 'Progressive Web Apps (PWAs)',
      description: 'PWAs offer the best of web and app experiences. Theyre lightweight, responsive, and work seamlessly across all devices. They are a cheaper option best for validating your web idea to deliver a fluid experience to your users effectively.',
      link: 'Get PWA Development',
      color: '#FF6F00',
      gradient: 'linear-gradient(135deg, #FF6F00 0%, #FFA726 100%)'
    },
    {
      id: 6,
      icon: <RiApps2Line />,
      title: 'Hybrid App Development',
      description: 'Hybrid apps blend native and web technologies. With frameworks like Ionic and Cordova, our app developers in the UK deliver bespoke applications that run on both iOS and Android. Get the best of both platforms with a unified development efforts.',
      link: 'Get Hybrid App Development',
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0 0%, #E91E63 100%)'
    }
  ];

  return (
    <section className={styles.appServicesSection} ref={sectionRef}>
      {/* Animated background elements */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridOverlay}></div>
      </div>

      {/* Floating particles */}
      <div className={styles.particlesContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Our Comprehensive <span className={styles.highlight}>Mobile App Development</span>
            <br />
            <span className={styles.subtitle}>Services</span> in the UK
          </h2>
          <p className={styles.description}>
            We are a data-driven app development firm specializing in custom iOS, Android, and React Native hybrid apps. Our mobile app developers in the 
            UK collaborate with startups and established brands, delivering transparent, bespoke solutions. We provide full-spectrum mobile app 
            development services in the UK, ensuring high-end communication and envisioning your brand's values.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : ''}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{
                '--index': index,
                '--color': service.color
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background gradient */}
              <div 
                className={styles.cardGradient}
                style={{
                  background: hoveredCard === service.id ? service.gradient : 'transparent'
                }}
              />

              {/* Card content */}
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{service.icon}</span>
                  <div className={styles.iconGlow} />
                </div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>
                
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <a href="#" className={styles.serviceLink}>
                  {service.link}
                  <span className={styles.arrow}>→</span>
                </a>
              </div>

              {/* Hover effects */}
              <div className={styles.cardBorder} />
              <div className={styles.cardShine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppServices;