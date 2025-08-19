"use client";
import React from 'react'
import './css/BuildSuccess.css'

const BuildSuccess = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg className="service-icon" width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Tailored Solutions",
      description: "We meticulously tailor our design solutions to align with your brand identity and user needs, recognizing the uniqueness of each project",
      isHighlighted: false
    },
    {
      id: 2,
      icon: (
        <svg className="service-icon" width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "User-centric approach",
      description: "Our guiding principle is to prioritize users above all else. We perform thorough user research to design experiences that enhance engagement and satisfaction",
      isHighlighted: true
    },
    {
      id: 3,
      icon: (
        <svg className="service-icon" width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cross-platform expertise",
      description: "From web to mobile and beyond, our expertise spans across platforms including iOS, Android, and responsive web design and development",
      isHighlighted: false
    }
  ]

  return (
    <section className="uiux-services-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center mb-5">
              <h2 className="section-title">
                Our UI/UX Design Services Built for
                <br />
                <span className="underlined-text">Your Success</span>
              </h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className={`service-card ${service.isHighlighted ? 'highlighted' : ''}`}>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                
                <p className="service-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
    </section>
  )
}

export default BuildSuccess