// angularServices.jsx
"use client";
import { useState, useEffect } from 'react';
import './css/angulardev.css';
import { 
  FaMobile, 
  FaShoppingCart, 
  FaHeadset, 
  FaCogs, 
  FaBuilding, 
  FaCode, 
  FaChartLine, 
  FaExchangeAlt 
} from 'react-icons/fa';

const AngularServices = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "angular Mobile App Development",
      icon: FaMobile
    },
    {
      id: 2,
      title: "angular E-commerce Development",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: "Maintenance and Support",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Customized angular Development Services",
      icon: FaCogs
    },
    {
      id: 5,
      title: "angular Enterprise Solutions",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "angular Extension Development",
      icon: FaCode
    },
    {
      id: 7,
      title: "angular Consulting & Strategy",
      icon: FaChartLine
    },
    {
      id: 8,
      title: "Website Migration Using angular",
      icon: FaExchangeAlt
    }
  ];

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="angular-container">
        <div className="angular-header">
          <h1 className="angular-main-title">Professional angular Development Company You Can Trust</h1>
          
          <div className="angular-help-section">
            <div className="angular-help-badge">
              <span className="angular-help-icon">✓</span>
              <span className="angular-help-text">We Help You Win</span>
            </div>
            <p className="angular-help-description">
              We break the norms with our guaranteed angular development services, embracing strong brand presence with feature-packed web applications.
            </p>
            <p className="angular-help-description">
              Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit angular developers do it with excellence. In view of this, we are known as the most coveted angular Development Company.
            </p>
          </div>
        </div>

        <div className="angular-services-section">
          <div className="angular-ervices-header">
            <h2 className="angular--title">angular Development Services</h2>
            <h3 className="angular--subtitle">
              <span className="angular-next-gen">Next-Gen</span> angular Development Beside <span className="professional">Professional Excellence</span>
            </h3>
          </div>

          <div className="angular-services-grid">
            {services.map((service) => (
              <div key={service.id} className="angular-service-card">
                <div className="angular-service-icon">
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#7BE7EA', 
                    borderRadius: '4px',
                    opacity: 0.3
                  }}></div>
                </div>
                <h4 className="angular-service-title">{service.title}</h4>
                <div className="angular-service-line"></div>
              </div>
            ))}
          </div>

          <div className="angular-cta-section">
            <button className="angular-inquire-btn">
              Inquire Now
              <span className="angular-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="angular-container">
      <div className="angular-header">
        <h1 className="angular-main-title">Professional angular Development Company You Can Trust</h1>
        
        <div className="help-section">
          <div className="help-badge">
            <span className="help-icon">✓</span>
            <span className="help-text">We Help You Win</span>
          </div>
          <p className="help-description">
            We break the norms with our guaranteed angular development services, embracing strong brand presence with feature-packed web applications.
          </p>
          <p className="help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit angular developers do it with excellence. In view of this, we are known as the most coveted angular Development Company.
          </p>
        </div>
      </div>

      <div className="angular-services-section">
        <div className="angular-services-header">
          <h2 className="angular-services-title">angular Development Services</h2>
          <h3 className="angular-services-subtitle">
            <span className="angular-next-gen">Next-Gen</span> angular Development Beside <span className="professional">Professional Excellence</span>
          </h3>
          </div>

        <div className="angular-services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="angular-service-card">
                <div className="angular-service-icon">
                  <IconComponent />
                </div>
                <h4 className="angular-service-title">{service.title}</h4>
                <div className="angular-service-line"></div>
              </div>
            );
          })}
        </div>

        <div className="angular-cta-section">
          <button className="angular-inquire-btn">
            Inquire Now
            <span className="angular-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AngularServices;