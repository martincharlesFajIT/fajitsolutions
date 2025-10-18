"use client";
import { useEffect, useRef } from 'react';
import '../../css/Mobileinnerpages.css';
import { IoInformationCircleSharp } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";
import { GrShift } from "react-icons/gr";

const IosServices = () => {
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
      title: 'iOS App Consultation',
      description: 'Our iOS app development process begins with need-based analysis to determine feature stack, resources, and time-to-market. This initial roadmap paves the way for a purpose-built, compatible final product for different Apple devices including the iPhone, iPad, Apple Watch, and Apple TV.'
    },
    {
      id: 2,
      icon: (
        <SiAffinitydesigner className="service-icon"/>
      ),
      title: 'iOS App UI/UX Design',
      description: 'Users remember apps for an easy-to-navigate intuitive design – and our iOS app development service is a hallmark for creating user-centric solutions. Based on tested user personas and modern usability benchmarks our iOS UI/UX designers craft appealing interfaces, that also fit with functional needs.'
    },
    {
      id: 3,
      icon: (
        <FaAppStoreIos className="service-icon"/>
      ),
      title: 'Core iOS Development',
      description: 'Transform your concepts into polished, end-user-focused iOS apps for diverse Apple devices like iPhone, iPad, Apple Watch, and Apple TV. Our skilled iOS application developers use Swift and Objective-C with Xcode for scalable, high-performance development and App Store deployment.'
    },
    {
      id: 4,
      icon: (
        <SiTestinglibrary  className="service-icon" />
      ),
      title: 'QA & Testing',
      description: 'We focus on security and performance throughout the iOS application development process. As a dedicated iPhone app development company, we ensure your app is glitch-free and fast with a combination of manual and automated testing techniques to identify and fix issues.'
    },
    {
      id: 5,
      icon: (
        <GrVmMaintenance className="service-icon"/>
      ),
      title: 'Migration & Upgrades',
      description: 'Ensure seamless transitions and retain core functionalities in your iOS applications. We use advanced tools like Xcode, Swift Migration Assistant, and TestFlight to update your app’s codebase and features, ensuring compatibility with the latest iOS versions and enhanced performance'
    },
    {
      id: 6,
      icon: (
        <GrShift className="service-icon"/>
      ),
      title: 'Cross-Device Rollout',
      description: 'With a most sought-after process and novel technologies, our custom iOS mobile app development company ensures fewer turnarounds and quicker time-to-market. We help brands maintain a consistent presence on all devices users engage with, providing a unified experience.'
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

export default IosServices;