"use client";
import { useEffect, useRef } from 'react';
import '../../css/Mobileinnerpages.css';
import { IoInformationCircleSharp } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
import { GrVmMaintenance } from "react-icons/gr";
import { GrShift } from "react-icons/gr";

const CrossServices = () => {
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

  const services = [
    {
      id: 1,
      icon: (
        <IoInformationCircleSharp className="service-icon" />
      ),
      title: 'React Native App Development Consultation',
      description: 'Our React Native app development consultants guide you through every phase of app creation—from initial concept and design to development, testing, and deployment. As a trusted partner in React Native development, we ensure that your app idea has high-performance, cross-platform solutions for both iOS and Android.'
    },
    {
      id: 2,
      icon: (
        <SiAffinitydesigner className="service-icon"/>
      ),
      title: 'UI/UX Design for React Native',
      description: 'Our UI/UX process leverages React Native benefits to create the most interactive and responsive interfaces. Focused on delivering seamless experiences for actual users, we make sure that navigation flows are streamlined and that flow feels smooth and effective on all devices.'
    },
    {
      id: 3,
      icon: (
        <FaAppStoreIos className="service-icon"/>
      ),
      title: 'iOS App Development',
      description: 'As experts in iOS development through React Native, we combine Swift and Objective-C modules within the React Native framework for optimal performance. Our methodology prioritizes optimized memory usage, seamless API integration, and a scalable architecture designed to adapt to specific app needs.'
    },
    {
      id: 4,
      icon: (
        <TiVendorAndroid  className="service-icon" />
      ),
      title: 'Android App Development',
      description: 'Using React Native alongside Java and Kotlin, our Android app development process is optimized for rapid deployment and cost-effectiveness. By integrating native modules when needed and using refined UI rendering, we build applications that perform reliably under high user demand.'
    },
    {
      id: 5,
      icon: (
        <GrVmMaintenance className="service-icon"/>
      ),
      title: 'React Native Support & Maintenance',
      description: 'Our team understands that React Native application development doesn\'t end at deployment. We offer ongoing support to handle everything from bug fixes and feature updates to security patches and technology upgrades, keeping your app updated and fully optimized.'
    },
    {
      id: 6,
      icon: (
        <GrShift className="service-icon"/>
      ),
      title: 'React Native Migration',
      description: 'Our expert team simplifies the migration of your iOS or Android app to a cross-platform environment with React Native. With a focus on preserving quality and functionality while leveraging the shared codebase of the web and IoT, ensuring a consistent, glitch-free experience across all devices.'
    }
  ];

  return (
    <section ref={sectionRef} className="services-section scroll-animate">
      <div className="services-container">
        <h2 className="services-main-title">
          Our Comprehensive Suite of <span className="highlight-text">React Native App</span> Development Services
        </h2>
        
        <p className="services-description">
          FAJ IT Solutions stands out in providing top-tier custom React Native app development services, combining innovation, efficiency, and performance. With expertise in the latest technologies and lean methodologies, our React Native app developers excel at identifying optimal solutions tailored to the distinct requirements of clients from various sectors.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-wrapper">
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

export default CrossServices;