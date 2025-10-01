// phpServices.jsx
"use client";
import { useState, useEffect } from 'react';
import './css/phpdev.css';
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

const PhpServices = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "php Mobile App Development",
      icon: FaMobile
    },
    {
      id: 2,
      title: "php E-commerce Development",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: "Maintenance and Support",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Customized php Development Services",
      icon: FaCogs
    },
    {
      id: 5,
      title: "php Enterprise Solutions",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "php Extension Development",
      icon: FaCode
    },
    {
      id: 7,
      title: "php Consulting & Strategy",
      icon: FaChartLine
    },
    {
      id: 8,
      title: "Website Migration Using php",
      icon: FaExchangeAlt
    }
  ];

  if (!isClient) {
    return (
      <div className="php-container">
        <div className="php-header">
          <h1 className="php-main-title">Professional php Development Company You Can Trust</h1>
          
          <div className="php-help-section">
            <div className="php-help-badge">
              <span className="php-help-icon">✓</span>
              <span className="php-help-text">We Help You Win</span>
            </div>
            <p className="php-help-description">
              We break the norms with our guaranteed php development services, embracing strong brand presence with feature-packed web applications.
            </p>
            <p className="php-help-description">
              Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit php developers do it with excellence. In view of this, we are known as the most coveted php Development Company.
            </p>
          </div>
        </div>

        <div className="php-services-section">
          <div className="php-services-header">
            <h2 className="php-services-title">php Development Services</h2>
            <h3 className="php-services-subtitle">
              <span className="php-next-gen">Next-Gen</span> php Development Beside <span className="professional">Professional Excellence</span>
            </h3>
          </div>

          <div className="php-services-grid">
            {services.map((service) => (
              <div key={service.id} className="php-service-card">
                <div className="php-service-icon">
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#7BE7EA', 
                    borderRadius: '4px',
                    opacity: 0.3
                  }}></div>
                </div>
                <h4 className="php-service-title">{service.title}</h4>
                <div className="php-service-line"></div>
              </div>
            ))}
          </div>

          <div className="php-cta-section">
            <button className="php-inquire-btn">
              Inquire Now
              <span className="php-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="php-container">
      <div className="php-header">
        <h1 className="php-main-title">Professional php Development Company You Can Trust</h1>
        
        <div className="php-help-section">
          <div className="php-help-badge">
            <span className="php-help-icon">✓</span>
            <span className="php-help-text">We Help You Win</span>
          </div>
          <p className="php-help-description">
            We break the norms with our guaranteed php development services, embracing strong brand presence with feature-packed web applications.
          </p>
          <p className="php-help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit php developers do it with excellence. In view of this, we are known as the most coveted php Development Company.
          </p>
        </div>
      </div>

      <div className="php-services-section">
        <div className="php-services-header">
          <h2 className="php-services-title">php Development Services</h2>
          <h3 className="php-services-subtitle">
            <span className="php-next-gen">Next-Gen</span> php Development Beside <span className="professional">Professional Excellence</span>
          </h3>
          </div>

        <div className="php-services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="php-service-card">
                <div className="php-service-icon">
                  <IconComponent />
                </div>
                <h4 className="php-service-title">{service.title}</h4>
                <div className="php-service-line"></div>
              </div>
            );
          })}
        </div>

        <div className="php-cta-section">
          <button className="php-inquire-btn">
            Inquire Now
            <span className="php-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhpServices;