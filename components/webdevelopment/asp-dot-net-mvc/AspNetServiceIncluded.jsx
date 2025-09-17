import React from 'react';
import './css/AspDotNetMvc.css';
import { FaMobileScreen } from "react-icons/fa6";
import { IoPieChart } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAspectRatio } from "react-icons/md";
import { LuDatabaseBackup } from "react-icons/lu";
const AspNetServiceIncluded = () => {
  const services = [
    {
      id: 1,
      title: "ASP.NET Enterprise App Development",
      icon: <FaMobileScreen />, 
      description: "Build robust enterprise applications with scalable ASP.NET solutions"
    },
    {
      id: 2,
      title: "Legacy Application Conversion",
      icon: <IoPieChart />,
      description: "Modernize your legacy systems with efficient ASP.NET conversion"
    },
    {
      id: 3,
      title: ".NET Web Application Development",
      icon: <CgWebsite />,
      description: "Create high-performance web applications using latest .NET technologies"
    },
    {
      id: 4,
      title: "ASP.NET Maintenance and Sustenance",
      icon: <MdOutlineAspectRatio />,
      description: "Comprehensive maintenance and support for your ASP.NET applications"
    },
    {
      id: 5,
      title: "ASP.NET Integration and Migration",
      icon: <LuDatabaseBackup />,
      description: "Seamless integration and migration services for ASP.NET platforms"
    }
  ];

  return (
    <div className="aspnet-services-container">
      <div className="aspnet-services-content">
        <h1 className="services-main-title">Our Core ASP.NET Services include:</h1>
        
        <p className="services-description">
          We are a leading custom ASP.NET development company that delivers all-inclusive .NET app development services to build high-quality web, cloud, and 
          mobile applications. You can even Hire ASP.NET developers from TechWize to work on your .NET-based software project solutions and products.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">
                <span className="icon-placeholder">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AspNetServiceIncluded;