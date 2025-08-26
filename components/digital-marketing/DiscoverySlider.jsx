"use client";
import React, { useState } from 'react';
import './css/DiscoverySlider.css';

const slides = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We dive deep into your business, target audience, and competitors to build a strong foundation for your marketing efforts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop',
    bgColor: '#45a299',
  },
  {
    id: 2,
    title: 'Strategy Development',
    description: 'Our team develops a comprehensive, data-driven strategy tailored to your goals, creating a clear roadmap for success.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    bgColor: '#40968f',
  },
  {
    id: 3,
    title: 'Creative Execution',
    description: 'We bring the strategy to life with compelling visuals and messaging designed to engage your audience and drive action.',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf25c86?w=500&h=400&fit=crop',
    bgColor: '#3b8b85',
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Our team launches the campaigns across all channels, ensuring a seamless and coordinated rollout for maximum impact.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&h=400&fit=crop',
    bgColor: '#357f7a',
  },
  {
    id: 5,
    title: 'Ongoing Support',
    description: 'We continuously monitor performance, optimize campaigns, and provide regular reports to ensure your long-term growth.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop',
    bgColor: '#307470',
  }
];

const DiscoverySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to a specific slide index
  const navigateTo = (index) => {
    if (index < 0 || index >= slides.length) return;
    setCurrentSlide(index);
  };

  // Go to the next slide if not on the last one
  const goNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Go to the previous slide if not on the first one
  const goPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Determines the style for the main content slides (sliding in/out)
  const getContentStyle = (index) => {
    if (index === currentSlide) {
      return { transform: 'translateX(0)', opacity: 1, zIndex: 2 };
    }
    if (index < currentSlide) {
      return { transform: 'translateX(-100%)', opacity: 0, zIndex: 1 };
    }
    return { transform: 'translateX(100%)', opacity: 0, zIndex: 1 };
  };

  // Determines the style for the navigation tabs on the right
  const getTabStyle = (index) => {
    const position = index - currentSlide;
    return {
      transform: `translateX(${position * 100}px)`,
      zIndex: slides.length - Math.abs(position),
      backgroundColor: slides[index].bgColor,
      opacity: position < 0 ? 0 : 1, // Hides past slides
    };
  };

  return (
    <div className="discovery-container">
      
      {/* Main Content Area (Left) */}
      <div className="content-wrapper">
        {slides.map((slide, index) => (
          <div className="main-content-slide" style={getContentStyle(index)} key={slide.id}>
            <div className="image-section">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="text-section">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="cta-button">Get Started Now</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Left Arrow for navigating back */}
      {currentSlide > 0 && (
        <div className="left-nav-control" onClick={goPrev}>
          <div className="left-arrow">
             →
          </div>
        </div>
      )}
      
      {/* Main Right Arrow for navigating forward */}
      {currentSlide < slides.length - 1 && (
        <div className="right-nav-control" onClick={goNext}>
          <div className="right-arrow">
        ←
          </div>
        </div>
      )}
      
      {/* Right Navigation Tabs */}
      <div className="navigation-wrapper">
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          const isPast = index < currentSlide;

          return (
            <div 
              className="nav-tab"
              style={getTabStyle(index)}
              key={slide.id}
              onClick={() => navigateTo(index)}
            >
              <div className="tab-arrow-container">
                {/* Show back arrow for past slides, forward arrow for current, nothing for future */}
                {isPast && (
                  <div 
                    className="tab-arrow back-arrow"
                    onClick={(e) => { 
                      e.stopPropagation();
                      navigateTo(index);
                    }}
                  >
                     ←
                  </div>
                )}
                
                {isCurrent && index < slides.length - 1 && (
                  <div 
                    className="tab-arrow forward-arrow"
                    onClick={(e) => { 
                      e.stopPropagation();
                      goNext();
                    }}
                  >
                    
                    ←
                  </div>
                )}
              </div>
              
              <div className="tab-title">
                {slide.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverySlider;