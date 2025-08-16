"use client"
import React from 'react'
import './css/UIUXSection.css'

const UIUXSection = () => {
  return (
    <section className="uiux-section">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          {/* Left Side - Images */}
          <div className="col-lg-6">
            <div className="images-container">
              {/* Mobile App Mockup */}
              <div className="mobile-mockup">
                <img 
                  src="/mobile-app-mockup.webp" 
                  alt="Mobile App Design" 
                  className="mobile-img"
                />
              </div>
              
              {/* Desktop/Website Mockup */}
              <div className="desktop-mockup">
                <img 
                  src="/desktop-mockup.webp" 
                  alt="Website Design" 
                  className="desktop-img"
                />
              </div>

              {/* Additional Mobile Mockup */}
              <div className="secondary-mobile-mockup">
                <img 
                  src="/mobile-app-secondary.webp" 
                  alt="Mobile App Features" 
                  className="secondary-mobile-img"
                />
              </div>

              {/* Floating Elements */}
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6">
            <div className="content-container">
              <div className="section-content">
                <h1 className="main-title">
                  Intuitive UI/UX Design For 
                  <span className="highlight-text">Mobile And Website</span> 
                  Applications
                </h1>
                
                <p className="description">
                  At FAJ IT Solutions, we create intuitive and impactful UI/UX designs 
                  specifically tailored for modern e-commerce and enterprise web platforms. 
                  We focus on crafting custom, brand-focused interfaces with effortless 
                  navigation, clear calls-to-action, and mobile-first responsive designs. Our 
                  solutions ensure fast, scalable, and reliable usability, empowering your 
                  business to stand out and grow in a competitive digital marketplace.
                </p>

                <button className="cta-button">
                  <span>Unlock Better UI/UX</span>
                  <svg className="arrow-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="bg-decoration decoration-1"></div>
      <div className="bg-decoration decoration-2"></div>
      <div className="bg-decoration decoration-3"></div>
    </section>
  )
}

export default UIUXSection