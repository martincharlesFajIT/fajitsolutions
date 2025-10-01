// cmsServices.jsx
"use client";
import { useState, useEffect } from 'react';
import './css/cmsdev.css';
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

const CmsServices = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "cms Mobile App Development",
      icon: FaMobile
    },
    {
      id: 2,
      title: "cms E-commerce Development",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: "Maintenance and Support",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Customized cms Development Services",
      icon: FaCogs
    },
    {
      id: 5,
      title: "cms Enterprise Solutions",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "cms Extension Development",
      icon: FaCode
    },
    {
      id: 7,
      title: "cms Consulting & Strategy",
      icon: FaChartLine
    },
    {
      id: 8,
      title: "Website Migration Using cms",
      icon: FaExchangeAlt
    }
  ];

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="cms-container">
        <div className="cms-header">
          <h1 className="cms-main-title">Professional cms Development Company You Can Trust</h1>
          
          <div className="cms-help-section">
            <div className="cms-help-badge">
              <span className="cms-help-icon">✓</span>
              <span className="cms-help-text">We Help You Win</span>
            </div>
            <p className="cms-help-description">
              We break the norms with our guaranteed cms development services, embracing strong brand presence with feature-packed web applications.
            </p>
            <p className="cms-help-description">
              Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit cms developers do it with excellence. In view of this, we are known as the most coveted cms Development Company.
            </p>
          </div>
        </div>

        <div className="cms-services-section">
          <div className="cms-services-header">
            <h2 className="cms-services-title">cms Development Services</h2>
            <h3 className="cms-services-subtitle">
              <span className="cms-next-gen">Next-Gen</span> cms Development Beside <span className="professional">Professional Excellence</span>
            </h3>
          </div>

          <div className="cms-services-grid">
            {services.map((service) => (
              <div key={service.id} className="cms-service-card">
                <div className="cms-service-icon">
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#7BE7EA', 
                    borderRadius: '4px',
                    opacity: 0.3
                  }}></div>
                </div>
                <h4 className="cms-service-title">{service.title}</h4>
                <div className="cms-service-line"></div>
              </div>
            ))}
          </div>

          <div className="cms-cta-section">
            <button className="cms-inquire-btn">
              Inquire Now
              <span className="cms-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cms-container">
      <div className="cms-header">
        <h1 className="cms-main-title">Professional cms Development Company You Can Trust</h1>
        
        <div className="cms-help-section">
          <div className="cms-help-badge">
            <span className="cms-help-icon">✓</span>
            <span className="cms-help-text">We Help You Win</span>
          </div>
          <p className="cms-help-description">
            We break the norms with our guaranteed cms development services, embracing strong brand presence with feature-packed web applications.
          </p>
          <p className="cms-help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit cms developers do it with excellence. In view of this, we are known as the most coveted cms Development Company.
          </p>
        </div>
      </div>

      <div className="cms-services-section">
        <div className="cms-services-header">
          <h2 className="cms-services-title">cms Development Services</h2>
          <h3 className="cms-services-subtitle">
            <span className="cms-next-gen">Next-Gen</span> cms Development Beside <span className="professional">Professional Excellence</span>
          </h3>
          </div>

        <div className="cms-services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="cms-service-card">
                <div className="cms-service-icon">
                  <IconComponent />
                </div>
                <h4 className="cms-service-title">{service.title}</h4>
                <div className="cms-service-line"></div>
              </div>
            );
          })}
        </div>

        <div className="cms-cta-section">
          <button className="cms-inquire-btn">
            Inquire Now
            <span className="cms-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CmsServices;