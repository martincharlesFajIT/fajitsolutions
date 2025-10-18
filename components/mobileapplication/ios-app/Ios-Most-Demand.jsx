"use client";

import { useEffect, useRef } from 'react';
import '../../css/Mobileinnerpages.css';

const IosMostDemand = () => {
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

  const functionalities = [
    {
      id: 1,
      title: 'Cloud-Based Hybrid Infrastructure',
      description: 'Leverage cloud tech for seamless data storage, app deployment, and collaboration for adaptability and scalability.'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Integrate AI/ML for personalized experiences, predictive analytics, chatbots, recommendation models, improving engagement and decision-making.'
    },
    {
      id: 3,
      title: '5G & IoT',
      description: 'Use 5G and IoT for faster data, lower latency, and advanced features like AR/VR and smart automation.'
    },
    {
      id: 4,
      title: 'Robotic Process Automation',
      description: 'Implement RPA to automate tasks, boosting productivity and allowing focus on strategic growth initiatives.'
    }
  ];

  return (
    <section ref={sectionRef} className="functionalities-section scroll-animate">
      <div className="functionalities-container">
        <h2 className="functionalities-title">
          Land in the Mobile Market with Most In-Demand Functionalities
        </h2>
        
        <p className="functionalities-description">
          We have a team of 40+ IoT experts including UI/UX designers, core developers, performance testers, business analysts, and product growth technologists. Combined with smart technologies and Apple-influenced trends we help startups, scaleups, and enterprises get a solution that functions best, engages users, and grows with you.
        </p>

        <div className="functionalities-grid">
          {functionalities.map((functionality, index) => (
            <div 
              key={functionality.id} 
              className="functionality-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="functionality-title">{functionality.title}</h3>
              
              <p className="functionality-description">{functionality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosMostDemand;