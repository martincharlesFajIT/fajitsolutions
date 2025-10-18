"use client";

import { useState } from 'react';
import './css/Ecom-website.css'

const RecentDesigns = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          alt: 'Design 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          alt: 'Design 2'
        }
      ]
    },
    {
      id: 2,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop',
          alt: 'Design 3'
        },
        {
          url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
          alt: 'Design 4'
        }
      ]
    },
    {
      id: 3,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
          alt: 'Design 5'
        },
        {
          url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
          alt: 'Design 6'
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="recent-designs-section">
      <div className="designs-container">
        <h2 className="section-title">Recent Designs</h2>

        <div className="carousel-wrapper">
          {/* Previous Button */}
          <button 
            className="carousel-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="carousel-content">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="carousel-slide">
                  <div className="slide-images">
                    {slide.images.map((image, idx) => (
                      <div key={idx} className="image-card">
                        <div className="image-wrapper">
                          <img 
                            src={image.url} 
                            alt={image.alt}
                            loading="lazy"
                          />
                          <div className="image-overlay">
                            <span className="view-text">View Project</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="carousel-btn next-btn" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentDesigns;