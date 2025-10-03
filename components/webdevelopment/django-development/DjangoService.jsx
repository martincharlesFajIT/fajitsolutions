import React from 'react';
import './css/djangodev.css';

const ExpertiseSection = () => {
  const services = [
    {
      id: 1,
      // Replace with your own image
      image: '/django.jpg',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="4" width="20" height="40" rx="3" stroke="currentColor" strokeWidth="2"/>
          <line x1="20" y1="38" x2="28" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Node.js Mobile App Development',
      description: 'Audiences engage far more with animations—making it up to 2x more effective than static images.'
    },
    {
      id: 2,
      image: '/python.jpg',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 10V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Node.js E-commerce Development',
      description: 'Animation simplifies complex ideas, turning them into easy-to-understand and engaging content.'
    },
    {
      id: 3,
      image: '/django-enterprise.jpg',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 20H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Node.js Enterprise Solutions',
      description: 'Businesses achieve up to 20% higher conversions with animated explainer videos.'
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <h2 className="expertise-title">
            Where Expertise Meets <span className="highlight">Innovation</span>
          </h2>
          <p className="expertise-description">
            In today's fast-paced digital world, slow or rigid backends can limit user experience. Node.js powers dynamic, real-time applications that bring your ideas to life with speed, scalability, and efficiency. Whether it's handling complex operations, delivering seamless user interactions, or supporting growing traffic, Node.js makes your applications responsive and highly engaging.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="card-image"
                />
                <div className="card-overlay"></div>
                <div className="card-icon">
                  {service.icon}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;