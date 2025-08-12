import React from 'react';
import './css/DigitalGrowthSection.css';
import { SiOpenai } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
const DigitalGrowthSection = () => {
  return (
    <section className="digital-growth-section">
      <div className="growth-container">
        <div className="growth-content">
          <div className="text-content">
            <h1 className="growth-title">
              Driving Digital Growth with<br />
              Innovative Solutions and<br />
              Expert Teams
            </h1>
            
            <div className="story-section">
              <h3 className="story-heading">OUR STORY</h3>
              
              <p className="story-description">
                FAJ IT Solutions was founded with the vision of helping businesses and 
                start-ups thrive in the digital world.
              </p>
              
              <p className="story-description">
                Starting as a small team passionate about technology and design, we 
                have grown into a full-service IT solutions company. Today, we provide a 
                wide range of services including UI/UX design, web and e-commerce 
                development, ERP solutions, and IT resource outsourcing — empowering 
                businesses to achieve digital success globally.
              </p>
            </div>
          </div>
          
          <div className="visual-content">
            {/* Main Image */}
            <div className="main-image">
              <img 
                src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg" 
                alt="Digital Growth Technology"
                className="growth-image"
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="devices-container">
             
              
              {/* Floating Elements */}
              <div className="floating-element element-1">
                <div><SiOpenai /></div>
              </div>
              <div className="floating-element element-2">
                <div><FaRobot /></div>
              </div>
              <div className="floating-element element-3">
                <div><FaChartBar /></div>
              </div>
              <div className="floating-element element-4">
                <div><LuCodeXml /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGrowthSection;