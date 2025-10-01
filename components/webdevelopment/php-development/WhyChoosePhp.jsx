"use client";

import React, { useState, useEffect } from 'react';
import './css/phpdev.css';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrServicePlay } from "react-icons/gr";
import { SiInstructure } from "react-icons/si";
import { AiOutlineFileDone } from "react-icons/ai";
import { LuCalendarClock } from "react-icons/lu";

const WhyChoosePhp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      id: 1,
      icon: (
        <AiFillSafetyCertificate className='why-icon'/>
      ),
      title: "Proven Expertise",
      description: "With 10+ years of experience, we've expert over a decade refining the art of digital marketing. Our team focuses on crafting impactful results-driven campaigns that engage your target audiences and drive measurable business growth."
    },
    {
      id: 2,
      icon: (
       <MdOutlineMiscellaneousServices className='why-icon' />
      ),
      title: "Customize Solutions",
      description: "We don't believe in one-size-fits-all approach. Our team designs customized digital marketing solutions that fit your unique goals and audience. From strategic planning to execution, every term growth, every campaign is built to deliver measurable ROI."
    },
    {
      id: 3,
      icon: (
       <GrServicePlay className='why-icon' />
      ),
      title: "End-to-End Services",
      description: "From initial strategy and creative design to execution, monitoring and optimization, we provide complete digital marketing solutions under one roof. Experience seamless project consultancy, and measurable results at every stage of your project."
    },
    {
      id: 4,
      icon: (
        <SiInstructure  className='why-icon' />
      ),
      title: "Scalable Architecture",
      description: "We build Laravel applications with scalable architecture that grows with your business. Our modular approach ensures your application can handle increased traffic and feature additions seamlessly."
    },
    {
      id: 5,
      icon: (
        <AiOutlineFileDone className='why-icon' />
      ),
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing including unit tests, integration tests, and performance testing. We ensure your Laravel application is bug-free, secure, and performs optimally across all devices."
    },
    {
      id: 6,
      icon: (
        <LuCalendarClock className='why-icon' />
      ),
      title: "24/7 Support",
      description: "Get round-the-clock technical support and maintenance for your Laravel applications. Our dedicated support team ensures your application runs smoothly with quick response times and proactive monitoring."
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(features.length / cardsPerSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="why-choose-laravel">
      <div className="why-choose-container">
        <div className="why-choose-section-header">
          <h2 className="why-choose-section-title">
            Why Choose FAJ For Your Laravel Development?
          </h2>
          <p className="why-choose-section-description">
            We follow a streamlined Laravel development workflow that turns ideas into powerful web solutions. Starting with 
            planning and architecture, we design robust features, develop scalable applications, and thoroughly test performance 
            with ongoing optimization and maintenance. Our comprehensive approach ensures long-lasting solutions that drive 
            business growth and user satisfaction.
          </p>
        </div>
        
        <div 
          className="why-choose-slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="why-choose-slider-wrapper">
            <div 
              className="why-choose-slides-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="why-choose-slide-group">
                  {features
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((feature) => (
                      <div key={feature.id} className="why-choose-slide-card">
                        <div className="why-choose-feature-card">
                          <div className="why-choose-feature-icon">
                            {feature.icon}
                          </div>
                          <h3 className="why-choose-feature-title">{feature.title}</h3>
                          <p className="why-choose-feature-description">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="why-choose-slider-arrow why-choose-slider-arrow-prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="why-choose-slider-arrow why-choose-slider-arrow-next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="why-choose-slider-indicators">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePhp;