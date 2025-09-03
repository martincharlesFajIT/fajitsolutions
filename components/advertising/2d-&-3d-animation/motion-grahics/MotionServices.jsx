// components/MotionServices.js
import React from 'react';
import { MdAnimation, MdVideoSettings, MdToys } from 'react-icons/md';
import './css/MotionGraphics.css'

const MotionServices = () => {
  const services = [
    {
      id: 1,
      icon: <MdAnimation />,
      title: "2D Animation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    {
      id: 2,
      icon: <MdVideoSettings />,
      title: "Visual Effects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    },
    {
      id: 3,
      icon: <MdToys />,
      title: "3D Animation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    }
  ];

  return (
    <section className="motion-services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Motion Graphic Design Services</h2>
          <p className="services-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionServices;