"use client"
import React, { useState } from 'react'
import './css/UIUXProcessSection.css'

const UIUXProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      step: "01/06",
      title: "Understanding",
      description: "Every Great Design Begins With Clarity. We Take Time To Understand Your Brand, Your Audience, And The Challenges You Aim To Solve. This Discovery Phase Helps Us Align Our Vision With Yours, Ensuring The End Result Meets Both User Expectations And Business Objectives",
      image: "/process-understanding.jpg",
      buttonText: "Book Now",
      navText: "Understanding"
    },
    {
      id: 2,
      step: "02/06",
      title: "Research",
      description: "We Dive Deep Into Market Analysis And User Behavior Studies. Our Research Phase Includes Competitor Analysis, User Interviews, And Market Trends Assessment To Create A Solid Foundation For Your Design Strategy",
      image: "/process-research.jpg",
      buttonText: "Learn More",
      navText: "Research"
    },
    {
      id: 3,
      step: "03/06",
      title: "Design",
      description: "Here, Creativity Meets Strategy. We Develop Information Architecture, Create Wireframes, And Build Interactive Prototypes That Bring Ideas To Life. Every Pixel, Color, And Interaction Is Thoughtfully Designed To Enhance Usability While Reflecting Your Brand's Identity",
      image: "/process-design.jpg",
      buttonText: "Get Started Now",
      navText: "Design"
    },
    {
      id: 4,
      step: "04/06",
      title: "Development",
      description: "Bringing Your Design To Life Through Clean Code And Modern Technologies. We Transform Visual Designs Into Functional, Responsive, And Optimized Digital Experiences That Perform Seamlessly Across All Devices",
      image: "/process-development.jpg",
      buttonText: "Start Project",
      navText: "Development"
    },
    {
      id: 5,
      step: "05/06",
      title: "Testing",
      description: "Quality Assurance Through Comprehensive Testing. We Conduct Usability Testing, Performance Optimization, And Cross-Browser Compatibility Checks To Ensure Your Product Delivers Exceptional User Experience",
      image: "/process-testing.jpg",
      buttonText: "View Process",
      navText: "Testing"
    },
    {
      id: 6,
      step: "06/06",
      title: "Launch",
      description: "Strategic Launch With Ongoing Support. We Ensure Smooth Deployment, Monitor Performance, And Provide Continuous Support To Help Your Digital Product Succeed In The Market",
      image: "/process-launch.jpg",
      buttonText: "Launch Now",
      navText: "Launch"
    }
  ]

  const [currentStep, setCurrentStep] = useState(2) // Start with Design (03/06)
  const [slideDirection, setSlideDirection] = useState('')
  const [navSlideDirection, setNavSlideDirection] = useState('')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextStep = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setSlideDirection('slide-exit-left')
    setNavSlideDirection('nav-slide-exit-left')
    
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
      setSlideDirection('slide-enter-right')
      setNavSlideDirection('nav-slide-enter-right')
      
      setTimeout(() => {
        setSlideDirection('slide-active')
        setNavSlideDirection('nav-slide-active')
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const prevStep = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setSlideDirection('slide-exit-right')
    setNavSlideDirection('nav-slide-exit-right')
    
    setTimeout(() => {
      setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
      setSlideDirection('slide-enter-left')
      setNavSlideDirection('nav-slide-enter-left')
      
      setTimeout(() => {
        setSlideDirection('slide-active')
        setNavSlideDirection('nav-slide-active')
        setIsTransitioning(false)
      }, 50)
    }, 300)
  }

  const current = processSteps[currentStep]
  const prevStepData = processSteps[(currentStep - 1 + processSteps.length) % processSteps.length]
  const nextStepData = processSteps[(currentStep + 1) % processSteps.length]

  return (
    <section className="uiux-process-section">
      <div className="container-fluid h-100">
        {/* Header */}
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">
                Our UI/UX <span className="underlined-text">Design Process</span>
              </h2>
              <p className="section-description">
                We design more than just good-looking screens—we create seamless digital experiences 
                that bring real value to your business. By blending smart design principles, your goals, and 
                our creativity, we craft intuitive and engaging interfaces that boost usability, increase 
                engagement, and turn visitors into loyal customers
              </p>
            </div>
          </div>
        </div>

        {/* Main Process Layout */}
        <div className="process-layout">
          {/* Left Side Navigation Panel */}
          <div className="side-nav-panel left-panel">
            <div className={`nav-panel-content ${navSlideDirection}`}>
              <button className="nav-control-btn" onClick={prevStep}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="nav-text-vertical">{prevStepData.navText}</div>
            </div>
          </div>

          {/* Center Content Area */}
          <div className="center-content">
            <div className={`content-wrapper ${slideDirection}`}>
              {/* Image Container */}
              <div className="image-section">
                <div className="process-image-container">
                  <img 
                    src={current.image} 
                    alt={current.title}
                    className="process-image"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-content">
                <div className="step-info">
                  <div className="step-number">{current.step}</div>
                  <h3 className="step-title">{current.title}</h3>
                  <p className="step-description">{current.description}</p>
                  <button className="cta-button">
                    {current.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Navigation Panel */}
          <div className="side-nav-panel right-panel">
            <div className={`nav-panel-content ${navSlideDirection}`}>
              <button className="nav-control-btn" onClick={nextStep}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="nav-text-vertical">{nextStepData.navText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UIUXProcessSection