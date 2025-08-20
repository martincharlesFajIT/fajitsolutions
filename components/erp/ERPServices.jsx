import React from 'react';
import './css/ERPServices.css';
import { FaArrowRight } from 'react-icons/fa';

const ERPServices = () => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description: "We offer professional ERP consulting services to help companies map their needs, with ERP capabilities, and select the best ERP vendor.",
      color: "#FF6B35" // Orange
    },
    {
      id: 2,
      title: "Implementation",
      description: "We deliver tailored ERP software solutions by taking on the whole implementation process, from business needs analysis to platform deployment and after-launch support.",
      color: "#E91E63" // Pink/Magenta
    },
    {
      id: 3,
      title: "Development",
      description: "We build custom ERP systems with fully tailored functionality and integrations for organizations of all sizes and industries.",
      color: "#9C27B0" // Purple
    },
    {
      id: 4,
      title: "Customization",
      description: "We perform from high-level design overhauls to feature-level revamps to help companies customize ERP systems in line with their business needs and vision, following the industry's best practices.",
      color: "#FF6B35" // Orange
    },
    {
      id: 5,
      title: "Integration",
      description: "We connect ERP systems with existing IT infrastructure, and third-party solutions companies, using the most effective ERP integration approach and technology.",
      color: "#E91E63" // Pink/Magenta
    },
    {
      id: 6,
      title: "Support & optimization",
      description: "We provide ERP support and optimization services, monitoring your system performance, troubleshooting, and introducing updates and planned enhancements to ensure your ERP solution security, proper functioning, and evolution.",
      color: "#9C27B0" // Purple
    }
  ];

  return (
    <div className="erp-services-section">
      <div className="erp-container">
        <h2 className="erp-main-title">ERP services we offer</h2>
        
        <div className="erp-services-grid">
          {services.map((service) => (
            <div key={service.id} className="erp-service-card">
              <div className="service-header">
                <div 
                  className="service-line" 
                  style={{ backgroundColor: service.color }}
                ></div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className="service-content">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPServices;