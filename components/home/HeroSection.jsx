"use client"
import React, { useState, useEffect } from 'react'
import './css/HeroSection.css'

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Check on mount
    checkMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
        {/* Desktop Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`background-video ${isMobile ? 'desktop-video' : ''}`}
          style={{ display: isMobile ? 'none' : 'block' }}
        >
          <source src="/home-section.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`background-video ${isMobile ? 'mobile-video' : ''}`}
          style={{ display: isMobile ? 'block' : 'none' }}
        >
          <source src="/home-section-mobile.mp4" type="video/mp4" />
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