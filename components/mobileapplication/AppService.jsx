'use client';

import React, { useEffect, useState, useRef } from 'react';
import './css/mobile-app.css';
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
    <section className="app-dev-services" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="app-dev-background-effects">
      </div>

      {/* Floating particles */}
      <div className="app-dev-particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="app-dev-particle"
            style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="app-dev-container">
        {/* Header */}
        <div className={`app-dev-header ${isVisible ? "visible" : ''}`}>
          <h2 className="app-dev-title">
            Our Comprehensive <span className="app-dev-highlight">Mobile App Development</span>
            <br />
            <span className="app-dev-subtitle">Services</span> in the UK
          </h2>
          <p className="app-dev-description">
            We are a data-driven app development firm specializing in custom iOS, Android, and React Native hybrid apps. Our mobile app developers in the 
            UK collaborate with startups and established brands, delivering transparent, bespoke solutions. We provide full-spectrum mobile app 
            development services in the UK, ensuring high-end communication and envisioning your brand's values.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`app-dev-services-grid ${isVisible ? "visible" : ''}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="app-dev-service-card"
              style={{
                '--index': index,
                '--color': service.color
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background gradient */}
              <div 
                className="app-dev-card-gradient"
                style={{
                  background: hoveredCard === service.id ? service.gradient : 'transparent'
                }}
              />

              {/* Card content */}
              <div className="app-dev-card-content">
                <div className="app-dev-app-dev-icon-wrapper">
                  <span className="app-dev-icon">{service.icon}</span>
                  <div className="app-dev-icon-glow" />
                </div>

                <h3 className="app-dev-service-title">{service.title}</h3>
                
                <p className="app-dev-service-description">
                  {service.description}
                </p>

                <a href="#" className="app-dev-service-link">
                  {service.link}
                  <span className="app-dev-arrow">→</span>
                </a>
              </div>

              {/* Hover effects */}
              <div className="app-dev-card-border" />
              <div className="app-dev-card-shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppServices;