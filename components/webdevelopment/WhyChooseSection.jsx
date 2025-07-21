'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaCode, 
  FaRocket, 
  FaExpandArrowsAlt, 
  FaUserFriends, 
  FaShieldAlt,
  FaCogs,
  FaLightbulb
} from 'react-icons/fa';

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  const features = [
    {
      icon: <FaCogs />,
      title: "End-to-End Expertise",
      description: "We provide comprehensive web development services covering strategy, design, development, and ongoing support. Our team ensures a seamless process and high-quality, scalable web solutions.",
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.1)"
    },
    {
      icon: <FaRocket />,
      title: "Cutting-Edge Technologies",
      description: "We use the latest technologies like React, Angular, Node.js, and Laravel to deliver high-performance, future-ready websites. Our developers stay ahead of industry trends for optimal results.",
      color: "#7b68ee",
      bgColor: "rgba(123, 104, 238, 0.1)"
    },
    {
      icon: <FaExpandArrowsAlt />,
      title: "Scalability & Flexibility",
      description: "Our web solutions are designed to grow with your business, allowing for easy adjustments and scalability. We ensure long-term value by building flexible and adaptable websites.",
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.1)"
    },
    {
      icon: <FaUserFriends />,
      title: "User-Centered Design",
      description: "We focus on creating intuitive and visually appealing designs that enhance user engagement. Our responsive designs ensure a seamless experience across all devices and platforms.",
      color: "#4ecdc4",
      bgColor: "rgba(78, 205, 196, 0.1)"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security and Compliance",
      description: "We prioritize website security by implementing robust protocols and conducting regular audits. Your website will always comply with the latest security standards and regulations.",
      color: "#ff9ff3",
      bgColor: "rgba(255, 159, 243, 0.1)"
    }
  ];

  return (
    <>
      <section className="why-choose-section" ref={sectionRef}>
        <style jsx>{`
          .why-choose-section {
            padding: 80px 0;
            background: radial-gradient(circle at center, #0f0f15 0%, #09090f 100%);
            position: relative;
            overflow: hidden;
          }
          
          .section-header {
            text-align: center;
            margin-bottom: 60px;
            opacity: ${isVisible ? '1' : '0'};
            transform: translateY(${isVisible ? '0' : '20px'});
            transition: all 0.6s ease-out;
          }
          
          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, #845FF6, #7b68ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.6s ease-out;
          }
          
          .section-subtitle {
            color: #aaa;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
            transition: all 0.6s ease-out 0.2s;
          }
          
          .features-container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          
          .feature-card {
            background: rgba(30, 30, 40, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            opacity: ${isVisible ? '1' : '0'};
            transform: translateY(${isVisible ? '0' : '20px'});
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          
          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            border-color: rgba(255, 255, 255, 0.2);
          }
          
          .feature-icon-container {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            background: rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
          }
          
          .feature-card:hover .feature-icon-container {
            transform: rotate(10deg);
          }
          
          .feature-icon {
            font-size: 1.5rem;
          }
          
          .feature-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: white;
          }
          
          .feature-description {
            color: #aaa;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .feature-btn {
            display: inline-block;
            padding: 8px 20px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: inherit;
            transition: all 0.3s ease;
          }
          
          .feature-card:hover .feature-btn {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .cta-card {
            background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(102, 16, 242, 0.1));
            border: 1px solid rgba(0, 123, 255, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .cta-card::before {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 150px;
            height: 150px;
            background: rgba(0, 123, 255, 0.1);
            border-radius: 50%;
            filter: blur(40px);
          }
          
          .cta-btn {
            background: linear-gradient(90deg, #00d4ff, #7b68ee);
            color: white;
            border: none;
            width: 100%;
            padding: 12px;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          
          .cta-btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
          }
          
          .feature-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          
          .feature-modal.active {
            opacity: 1;
            pointer-events: auto;
          }
          
          .modal-content {
            background: #1a1a2e;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            padding: 30px;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            transform: scale(0.9);
            transition: all 0.3s ease;
          }
          
          .feature-modal.active .modal-content {
            transform: scale(1);
          }
          
          .modal-header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 15px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
          }
          
          .modal-icon {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
          }
          
          .modal-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            margin: 0;
          }
          
          .modal-body {
            color: #aaa;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          .modal-footer {
            display: flex;
            justify-content: flex-end;
          }
          
          .modal-btn {
            padding: 8px 20px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .modal-btn:hover {
            opacity: 0.9;
          }
          
          /* Animation delays for cards */
          .feature-card:nth-child(1) {
            transition-delay: 0.1s;
          }
          .feature-card:nth-child(2) {
            transition-delay: 0.2s;
          }
          .feature-card:nth-child(3) {
            transition-delay: 0.3s;
          }
          .feature-card:nth-child(4) {
            transition-delay: 0.4s;
          }
          .feature-card:nth-child(5) {
            transition-delay: 0.5s;
          }
          .feature-card:nth-child(6) {
            transition-delay: 0.6s;
          }
          
          /* Responsive styles */
          @media (max-width: 768px) {
            .why-choose-section {
              padding: 60px 0;
            }
            
            .section-title {
              font-size: 2rem;
            }
            
            .section-subtitle {
              font-size: 1rem;
            }
            
            .features-grid {
              grid-template-columns: 1fr;
            }
            
            .feature-card {
              padding: 20px;
            }
          }
        `}</style>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">
              Why Choose FAJ IT Solutions?
            </h2>
            <p className="section-subtitle">
              Discover the unique advantages that set us apart in the tech industry
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-container">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="feature-card"
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                    borderColor: `rgba(${parseInt(feature.color.slice(1, 3), 16)}, ${parseInt(feature.color.slice(3, 5), 16)}, ${parseInt(feature.color.slice(5, 7), 16)}, 0.2)`
                  }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div 
                    className="feature-icon-container"
                    style={{ color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
              
              {/* CTA Card */}
              <div 
                className="feature-card cta-card"
                style={{
                  transitionDelay: '0.6s',
                  opacity: isVisible ? '1' : '0',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="feature-icon-container" style={{ color: '#7b68ee' }}>
                  <FaLightbulb />
                </div>
                <h3 className="feature-title">Ready to Start?</h3>
                <p className="feature-description">
                  Let's discuss how we can bring your project to life with our expertise and innovative solutions.
                </p>
                <button className="feature-btn cta-btn">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Modal */}
        <div className={`feature-modal ${activeFeature !== null ? 'active' : ''}`} onClick={() => setActiveFeature(null)}>
          {activeFeature !== null && (
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <div 
                  className="modal-icon"
                  style={{
                    backgroundColor: features[activeFeature].bgColor,
                    color: features[activeFeature].color
                  }}
                >
                  {features[activeFeature].icon}
                </div>
                <h3 className="modal-title">{features[activeFeature].title}</h3>
              </div>
              <div className="modal-body">
                <p>{features[activeFeature].description}</p>
              </div>
              <div className="modal-footer">
                <button 
                  className="modal-btn"
                  style={{
                    backgroundColor: features[activeFeature].color,
                    color: 'white'
                  }}
                  onClick={() => setActiveFeature(null)}
                >
                  Got it!
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;