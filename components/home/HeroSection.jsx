"use client"
import React from 'react'
import './css/HeroSection.css'

const HeroSection = () => {
  const scrollToNextSection = () => {
    const brandsSection = document.querySelector('.brands-section')
    if (brandsSection) {
      brandsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="hero-container">
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/home-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Central Glow Effect */}
        <div className="glow-effect glow-large"></div>
        <div className="glow-effect glow-medium"></div>
        <div className="glow-effect glow-small"></div>

        {/* Scroll Indicator - Only on video section */}
        <div className="scroll-indicator" onClick={scrollToNextSection}>
          <p className="scroll-text">SCROLL</p>
          <div className="scroll-line"></div>
          <svg className="scroll-arrow" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSection