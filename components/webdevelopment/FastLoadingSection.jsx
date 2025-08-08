'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaDesktop, 
  FaSyncAlt, 
  FaShoppingCart,
  FaArrowRight,
} from 'react-icons/fa';

const FastLoadingSection = () => {
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
      icon: <FaDesktop />,
      title: "Optimize Images & Media",
      description: "WebP format, compress files, and lazy-load assets.",
      link: "/services/static-web-design",
      color: "#7BE7EA",
      delay: 0
    },
    {
      icon: <FaSyncAlt />,
      title: "Minify Code & Enable Caching",
      description: "Reduce CSS/JS size and leverage browser cache for faster delivery.",
      link: "/services/dynamic-web-design",
      color: "#7BE7EA",
      delay: 0.1
    },
    {
      icon: <FaShoppingCart />,
      title: "Use a Lightweight Theme & Fast Hosting",
      description: "Avoid bloated templates and choose a high-performance server.",
      link: "/services/ecommerce-web",
      color: "#7BE7EA",
      delay: 0.2
    }
  ];

  return (
    <section className="web-designs-section" ref={sectionRef}>
      <style jsx>{`
        .web-designs-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }

        /* Background with overlay */
        .section-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url('https://cdn.pixabay.com/photo/2021/10/08/08/45/city-6690602_960_720.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        /* Animated particles */
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #48AAAD;
          border-radius: 50%;
          animation: float-up 15s linear infinite;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Section header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out;
        }

        .section-title {
          font-size: 3.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .title-highlight {
          color: #ffffffff;
        }

        .title-underline {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #0080ff, #00d4ff);
          border-radius: 2px;
          transform: scaleX(${isVisible ? '1' : '0'});
          transition: transform 0.8s ease-out 0.3s;
        }

        .section-subtitle {
          font-size: 18px;
          color: #b0b0b0;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '20px'});
          transition: all 0.8s ease-out 0.2s;
        }

        /* Services grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        /* Service card */
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px 30px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '50px'});
          transition-delay: calc(var(--delay) * 1s);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px -20px var(--color);
        }

        /* Glow effect */
        .card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--color) 0%, transparent 70%);
          opacity: 0;
          filter: blur(60px);
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover .card-glow {
          opacity: 0.3;
        }

        /* Icon container */
        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(0, 128, 255, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          position: relative;
          transition: all 0.3s ease;
        }

        .service-card:hover .icon-wrapper {
          background: rgba(0, 128, 255, 0.2);
          transform: scale(1.1) rotate(-5deg);
        }

        .service-icon {
          font-size: 36px;
          color: var(--color);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.2);
          filter: drop-shadow(0 0 20px var(--color));
        }

        /* Content */
        .service-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-title {
          color: var(--color);
        }

        .service-description {
          font-size: 16px;
          color: #b0b0b0;
          line-height: 1.8;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-description {
          color: #d0d0d0;
        }

        /* Learn more link */
        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color);
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .learn-more::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color);
          transition: width 0.3s ease;
        }

        .service-card:hover .learn-more::after {
          width: 100%;
        }

        .learn-more svg {
          transition: transform 0.3s ease;
        }

        .service-card:hover .learn-more svg {
          transform: translateX(5px);
        }

        /* Additional service badges */
        .service-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 128, 255, 0.2);
          color: var(--color);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-badge {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .service-card {
            padding: 30px 20px;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .service-icon {
            font-size: 28px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-description {
            font-size: 14px;
          }
        }

        /* Grid pattern overlay */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 128, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 128, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>

      {/* Background with overlay */}
      <div className="section-background">
        <div className="bg-image"></div>
        <div className="bg-overlay"></div>
        <div className="grid-overlay"></div>
        
        {/* Animated particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-highlight">Fast</span> Loading Web Designs
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Explore our diverse range of web design services tailored to meet your business needs, from static and dynamic websites to e-commerce platforms. Our expertise ensures responsive, high-quality designs that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ 
                '--color': service.color,
                '--delay': service.delay
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="service-badge">Popular</div>
              
              <div className="icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <a href={service.link} className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastLoadingSection;