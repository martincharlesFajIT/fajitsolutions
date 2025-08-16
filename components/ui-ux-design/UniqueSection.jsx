import React from 'react'
import './css/UniqueSection.css'

const UniqueSection = () => {
  const features = [
    {
      id: 1,
      title: "Quality Focus",
      description: "High standards in every project we deliver",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Growth-Oriented",
      description: "Helping you grow faster and smarter",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Creativity",
      description: "Innovative ideas that make your solutions stand out",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Technical Expertise",
      description: "Skilled team with strong technical knowledge",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "User-First Approach",
      description: "Designs and solutions tailored for the end user",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Long-Term Value",
      description: "Solutions built to last and scale with your needs",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="unique-section">
      <div className="unique-container">
        {/* Header */}
        <div className="unique-header">
          <h2 className="unique-title">
            What Makes Us <span className="unique-title-underlined">Unique</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="unique-content">
          {/* Left Side - Image */}
          <div className="unique-image-section">
            <div className="unique-image-container">
              <img 
                src="/unique-tech-illustration.jpg" 
                alt="3D Tech Illustration"
                className="unique-image"
              />
              
              {/* Floating Elements */}
              <div className="floating-element small"></div>
              <div className="floating-element medium"></div>
              <div className="floating-element large"></div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="unique-features-section">
            <ul className="features-list">
              {features.map((feature) => (
                <li key={feature.id} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}:</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniqueSection