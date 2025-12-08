"use client"
import { useState, useEffect, useRef } from 'react';
import './css/Ecom-website.css'

const EcommerceSolutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const solutions = [
    {
      id: 1,
      service: 'Service',
      icon: (
        <svg viewBox="0 0 100 100" className="solution-icon">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="currentColor" opacity="0.3"/>
          <path d="M35 45h10M35 55h20M35 65h15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="25" cy="45" r="2" fill="currentColor"/>
          <circle cx="25" cy="55" r="2" fill="currentColor"/>
          <circle cx="25" cy="65" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'WooCommerce',
      description: 'We build WooCommerce sites tailored to your business. Our focus is on creating websites that convert visits into sales while delivering an outstanding user experience through one of the industry\'s leading CMS platforms.'
    },
    {
      id: 2,
      service: 'Service',
      icon: (
        <svg viewBox="0 0 100 100" className="solution-icon">
          <path d="M50 20L30 35V65L50 80L70 65V35L50 20Z" fill="currentColor" opacity="0.3"/>
          <path d="M50 30L40 37V63L50 70L60 63V37L50 30Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Shopify',
      description: 'As one of the most widely used eCommerce CMSs, Shopify is a popular choice particularly for startup or smaller retail businesses. Our development and design teams can support in the creation of a bespoke, branded shopfront with the power of Shopify behind it.'
    },
    {
      id: 3,
      service: 'Service',
      icon: (
        <svg viewBox="0 0 100 100" className="solution-icon">
          <rect x="35" y="20" width="30" height="60" rx="5" fill="currentColor" opacity="0.3"/>
          <rect x="40" y="30" width="20" height="35" fill="currentColor"/>
          <circle cx="50" cy="72" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Mobile Applications',
      description: 'We develop tailored mobile apps designed to enhance user interaction and improve engagement with your ecommerce business, for customers on both iOS and Android.'
    },
    {
      id: 4,
      service: 'Service',
      icon: (
        <svg viewBox="0 0 100 100" className="solution-icon">
          <rect x="25" y="35" width="50" height="30" rx="3" fill="currentColor" opacity="0.3"/>
          <path d="M40 45h20M40 55h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Custom Solutions',
      description: 'Our team specializes in creating custom ecommerce platforms tailored specifically to your unique business needs and requirements.'
    }
  ];

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

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

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % solutions.length;
      cards.push(solutions[index]);
    }
    return cards;
  };

  const getCardStyle = () => {
    return {
      transform: `translateX(-${currentIndex * (100 / 3)}%)`
    };
  };

  return (
    <section ref={sectionRef} className="solutions-section scroll-animate">
      <div className="solutions-container">
        <h2 className="new-solutions-title">Our ecommerce solutions</h2>

        <div 
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="nav-button prev-button" 
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous solution"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="cards-wrapper">
            <div className="cards-track">
              {getVisibleCards().map((solution, idx) => (
                <div 
                  key={`${solution.id}-${idx}`} 
                  className={`solution-card ${idx === 1 ? 'center-card' : ''}`}
                >
                  <div className="card-header">
                    <div className="service-badge">
                      <span className="badge-dot"></span>
                      <span className="badge-text">{solution.service}</span>
                    </div>
                  </div>
                  
                  <div className="card-icon">
                    {solution.icon}
                  </div>

                  <h3 className="newecom-card-title">{solution.title}</h3>
                  
                  <p className="card-description">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-button next-button" 
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next solution"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSolutions;