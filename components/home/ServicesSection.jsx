"use client"

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import './css/ServicesSection.css';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.services-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 20 + Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const servicesData = {
    development: {
      title: "Development",
      services: [
        {
          name: "Web Development",
          id: "web-dev",
          link: "/webdevelopment",
          details: {
            technologies: ["Laravel Development", "Python Development", "Node.js",],
            description: "Build powerful, scalable web applications with cutting-edge technologies."
          }
        },
        {
          name: "Mobile App Development",
          id: "mobile-dev",
          link: "/mobileapplication",
          details: {
            technologies: ["Hybrid App", "React Native", "Flutter",],
            description: "Create seamless mobile experiences for iOS and Android platforms."
          }
        },
        {
          name: "E-commerce Websites",
          id: "ecommerce",
          link: "/ecommerce-development",
          details: {
            technologies: ["Shopify", "WooCommerce", "Payment Gateway Integration", "Custom E-commerce Solutions"],
            description: "Launch your online store with secure payment gateways and inventory management."
          }
        },
        {
          name: "UI/UX Design",
          id: "uiux",
          link: "/ui-ux-design",
          details: {
            technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
            description: "Design intuitive interfaces that delight users and drive engagement."
          }
        },
      ]
    },
    marketing: {
      title: "Digital Marketing",
      services: [
        {
          name: "SEO Optimization",
          id: "seo",
          link: "/seooptimization",
          details: {
            technologies: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO", "E-commerce SEO"],
            description: "Boost your online visibility and drive organic traffic with proven SEO strategies."
          }
        },
        {
          name: "Social Media Marketing",
          id: "social",
          link: "/social-media-marketing",
          details: {
            technologies: ["Facebook Marketing", "Instagram Marketing", "LinkedIn Marketing", "TikTok Marketing"],
            description: "Engage your audience and build brand loyalty across social platforms."
          }
        },
        {
          name: "Content Marketing",
          id: "content",
          link: "/content-marketing",
          details: {
            technologies: ["Blog Writing", "Video Content", "Infographics", "Email Newsletters", "Case Studies"],
            description: "Create compelling content that attracts, engages, and converts your audience."
          }
        },
        {
          name: "PPC Advertising",
          id: "ppc",
          link: "/ppc-advertising",
          details: {
            technologies: ["Google Ads", "LinkedIn Ads", "Display Advertising", "Retargeting"],
            description: "Drive immediate results with targeted pay-per-click advertising campaigns."
          }
        }
      ]
    },
    emerging: {
      title: "Emerging Tech",
      services: [
        {
          name: "Artificial Intelligence",
          id: "ai",
          link: "/ai-development",
          details: {
            technologies: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
            description: "Harness the power of AI to automate processes and gain intelligent insights."
          }
        },
        {
          name: "Cyber Security",
          id: "cybersecurity",
          link: "/cyber-security",
          details: {
            technologies: ["Web App Vulnerbility", "Peneration Testing", "Network Peneration", "Cloud Vulnerbility Assesment"],
            description: "Build secure, decentralized applications with blockchain technology."
          }
        }
      ]
    },
    creative: {
      title: "Advertisement",
      services: [
        {
          name: "Brand Identity",
          id: "brand",
          link: "/brand-identity",
          details: {
            technologies: ["Logo Design", "Visual Identity", "Brand Strategy", "Rebranding"],
            description: "Establish a strong, memorable brand identity that resonates with your audience."
          }
        },
        {
          name: "Video Production",
          id: "video",
          link: "/video-production",
          details: {
            technologies: ["Product Demos", "Animations", "Social Media Videos", "Video Editing"],
            description: "Tell your story through compelling video content that captivates viewers."
          }
        },
        {
          name: "Motion Graphics",
          id: "motion",
          link: "/motion-graphics",
          details: {
            technologies: ["2D Animation", "3D Animation", "Explainer Videos", "Title Sequences", "Visual Effects"],
            description: "Bring your ideas to life with dynamic motion graphics and animations."
          }
        },
        {
          name: "Graphic Design",
          id: "campaigns",
          link: "/creative-campaigns",
          details: {
            technologies: ["Print Design", "Digital Design", "Infographic Design", "Packaging Design", "Presentation Design"],
            description: "Launch impactful creative campaigns that drive results and engagement."
          }
        }
      ]
    }
  };

  return (
    <section className="services-section">
      {/* Animated Background Elements */}
      <div className="animated-bg-elements">
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: `${particle.duration}s`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      <div className={`services-container ${isMobile ? 'mobile' : ''}`}>
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="what-we-do-badge">
            <span className="purple-dot"></span>
            Our Services
          </div>
          <h2 className="services-title">
            Innovative Solutions for&nbsp;
            <span className="services-highlight">
              Digital Success
            </span>
          </h2>
        </div>

        {/* Main Services Container */}
        <div className={`services-layout ${isMobile ? 'mobile' : ''}`}>
          {/* Left Panel - Categories (Vertical) */}
          <div className={`categories-panel ${isMobile ? 'mobile' : ''}`}>
            <div className={`categories-list ${isMobile ? 'mobile' : ''}`}>
              {Object.entries(servicesData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setSelectedService(null);
                  }}
                  className={`category-button ${activeCategory === key ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span>{category.title}</span>
                  {activeCategory === key && !isMobile && (
                    <div className="active-indicator"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Services (Horizontal) or Details */}
          <div className={`services-panel ${isMobile ? 'mobile' : ''}`}>
            {/* Background Gradient */}
            <div className="panel-gradient"></div>

            {!selectedService ? (
              // Services Grid
              <div className="services-grid-container">
                <h3 className="services-category-title">
                  <span className="category-title-icon">{servicesData[activeCategory].icon}</span>
                  {servicesData[activeCategory].title} Services
                </h3>

                <div className={`services-grid ${isMobile ? 'mobile' : ''}`}>
                  {servicesData[activeCategory].services.map((service, index) => (
                    <div
                      key={service.id}
                      className={`service-card ${isVisible ? 'animate-in' : ''}`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="service-name">{service.name}</h4>

                      <button
                        onClick={() => {
                          console.log('Setting service:', service);
                          setSelectedService(service);
                        }}
                        className="explore-button"
                      >
                        Explore →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Service Details
              <div className="service-details">
                <button
                  onClick={() => setSelectedService(null)}
                  className="back-button"
                >
                  ← Back to {servicesData[activeCategory].title}
                </button>

                <h3 className="service-details-title">
                  {selectedService.name}
                </h3>

                <p className="service-description">
                  {selectedService.details.description}
                </p>

                <div className="technologies-section">
                  <h4 className="technologies-title">
                    Technologies & Frameworks
                  </h4>
                  <div className={`technologies-grid ${isMobile ? 'mobile' : ''}`}>
                    {selectedService.details.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="technology-item"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    console.log('Selected service:', selectedService);
                    console.log('Service link:', selectedService.link);
                    router.push(selectedService.link || '/webdevelopment');
                  }}
                  className={`get-started-button ${isMobile ? 'mobile' : ''}`}
                >
                  Get Started with {selectedService.name} →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;