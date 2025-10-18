"use client";
import { useEffect, useRef } from 'react';
import '../../css/Mobileinnerpages.css';

const IosBenefit = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      id: '01',
      title: 'Robust Core Data Management',
      description: 'Our developers specialize in implementing Core Data for efficient data storage and retrieval to make sure smooth performance and reliable data management across all iOS applications, tailored to complex business needs.'
    },
    {
      id: '02',
      title: 'Seamless API Integration',
      description: 'Our iPhone app development services include seamless integration of third-party APIs, enhancing app functionality and user experience. We ensure secure, efficient connections to external services using advanced techniques and best practices.'
    },
    {
      id: '03',
      title: 'Scalable Cloud Integration',
      description: 'Our iOS development services include scalable cloud integration using iCloud and third-party services like AWS and Firebase, ensuring seamless data synchronization and robust backend support for your app.'
    }
  ];

  return (
    <section ref={sectionRef} className="benefits-section scroll-animate">
      <div className="benefits-container">
        <h2 className="benefits-main-title">
         Built-to-Perform <span className="highlight-orange">iOS Software</span>
        </h2>
        
        <p className="benefits-description">
          Our in-house, expert iOS app developers help businesses BRIDGE (Build, Review, Integrate, Deliver, Grow, and Evaluate) modern customer engagement needs with purpose-driven iOS application development services.
        </p>

        <div className="flutter-benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="benefit-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="benefit-header">
                <span className="benefit-number">{benefit.id}</span>
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="benefit-title">{benefit.title}</h3>
              
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosBenefit;