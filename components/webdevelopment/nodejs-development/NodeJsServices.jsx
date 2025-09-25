import React from 'react'
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

import './css/nodejs.css';

const NodeJsServices = () => {
  const services = [
     {
       id: 1,
       title: "Node Js Application Development",
       icon: FaMobile
     },
     {
       id: 2,
       title: "Node Js Third-Party Integration",
       icon: FaShoppingCart
     },
     {
       id: 3,
       title: "Node Js Development",
       icon: FaHeadset
     },
     {
       id: 4,
       title: "Application Maintenance & Support",
       icon: FaCogs
     },
     {
       id: 5,
       title: "Third Party Node Js Customization",
       icon: FaBuilding
     },
     {
       id: 6,
       title: "Node Js Migration",
       icon: FaCode
     },
     {
       id: 7,
       title: "Node Js Development",
       icon: FaChartLine
     },
     {
       id: 8,
       title: "Node Js Consulting",
       icon: FaExchangeAlt
     }
   ];
 
   return (
     <div className="nodejs-container">
       <div className="nodejs-header">
         <h1 className="main-title">Node Js Development Services</h1>
         
         <div className="help-section">
           <div className="help-badge">
             <span className="help-icon">✓</span>
             <span className="help-text">We Help You Win</span>
           </div>
           <p className="help-description">
             Empowering Innovation with Premier Node Js Development Services
           </p>
           <p className="help-description">
             Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit nodejs developers do it with excellence. In view of this, we are known as the most coveted nodejs Development Company.
           </p>
         </div>
       </div>
 
       <div className="services-section">
         <div className="services-header">
           <h2 className="services-title">Node Js Development Services</h2>
           <h3 className="services-subtitle">
             <span className="next-gen">Node Js</span> Empowering Innovation with Premier <span className="professional">Professional Excellence</span>
           </h3>
         </div>
 
         <div className="services-grid">
           {services.map((service) => {
             const IconComponent = service.icon;
             return (
               <div key={service.id} className="service-card">
                 <div className="service-icon">
                   <IconComponent />
                 </div>
                 <h4 className="service-title">{service.title}</h4>
                 <div className="service-line"></div>
               </div>
             );
           })}
         </div>
 
         <div className="cta-section">
           <button className="inquire-btn">
             Inquire Now
             <span className="btn-arrow">→</span>
           </button>
         </div>
       </div>
     </div>
   );
 };

export default NodeJsServices