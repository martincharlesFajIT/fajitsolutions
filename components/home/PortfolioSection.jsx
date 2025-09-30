"use client";
import React, { useState, useEffect } from 'react';
import './css/PortfolioSection.css';
import BlurText from '../BlurText';
import ShinyText from '../ShinyText';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.portfolio-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dots = mounted ? [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5,
    animationDuration: 10 + Math.random() * 20,
    animationDelay: Math.random() * 5
  })) : [];

  const categories = [
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard Pro",
      category: "web",
      description: "Real-time financial analytics dashboard with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #7BE7EA 0%, #48AAAD 100%)",
      technologies: ["Next.js", "MongoDB", "Express.js", "Node.js"],
      features: ["Real-time Data", "AI Analytics", "Multi-currency", "Dark Mode"],
      metrics: { users: "50K+", performance: "99.9%", rating: "4.9" },
      link: "/projects/fintech-dashboard"
    },
    {
      id: 2,
      title: "HealthTrack Mobile",
      category: "mobile",
      description: "Cross-platform health monitoring app with wearable integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      technologies: ["React Native", "Firebase", "HealthKit", "TensorFlow Lite"],
      features: ["Wearable Sync", "Health AI", "Telemedicine", "Offline Mode"],
      metrics: { downloads: "100K+", activeUsers: "75K", rating: "4.8" },
      link: "/projects/healthtrack"
    },
    {
      id: 3,
      title: "ShopHub Marketplace",
      category: "ecommerce",
      description: "Multi-vendor e-commerce platform with AR product preview",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      technologies: ["Next.js", "Stripe", "AWS", "PostgreSQL", "Redis"],
      features: ["AR Preview", "Multi-vendor", "AI Recommendations", "Global Shipping"],
      metrics: { gmv: "$5M+", vendors: "500+", products: "50K+" },
      link: "/projects/shophub"
    },
    {
      id: 4,
      title: "CloudSync Storage",
      category: "web",
      description: "Enterprise cloud storage solution with advanced collaboration",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      technologies: ["Vue.js"],
      features: ["End-to-end Encryption", "Real-time Sync", "Team Collaboration", "API Access"],
      metrics: { storage: "10PB+", enterprises: "200+", uptime: "99.99%" },
      link: "/projects/cloudsync"
    },
    {
      id: 5,
      title: "SmartCity IoT Platform",
      category: "web",
      description: "IoT management platform for smart city infrastructure",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      technologies: ["Angular", "Python", "MQTT", "TimescaleDB", "Docker"],
      features: ["Real-time Monitoring", "Predictive Maintenance", "Energy Optimization", "Citizen App"],
      metrics: { devices: "100K+", cities: "15", efficiency: "+35%" },
      link: "/projects/smartcity"
    },
    {
      id: 6,
      title: "AI Content Creator",
      category: "ai",
      description: "AI-powered content generation platform for marketing teams",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      technologies: ["Python", "GPT-4", "FastAPI", "React", "Elasticsearch"],
      features: ["Multi-language", "Brand Voice AI", "SEO Optimization", "Plagiarism Check"],
      metrics: { content: "1M+", languages: "25+", accuracy: "95%" },
      link: "/projects/ai-content"
    },
    {
      id: 7,
      title: "CryptoWallet Pro",
      category: "mobile",
      description: "Secure cryptocurrency wallet with DeFi integration",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      color: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      technologies: ["Flutter", "Web3.js", "Solidity", "Node.js", "PostgreSQL"],
      features: ["Multi-chain", "DeFi Integration", "Hardware Wallet", "Staking"],
      metrics: { assets: "$100M+", chains: "15+", users: "25K+" },
      link: "/projects/cryptowallet"
    },
  ];

  const filteredProjects = projects.filter(p => p.category === activeFilter);
const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <section className={`portfolio-section ${mounted && isMobile ? 'mobile' : ''}`}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="portfolio-badge">
            <span className="portfolio-dot"></span>
            <span>Our Portfolio</span>
          </div>
           <h2 className="portfolio-title">
            <BlurText
              text="Transforming Ideas into Digital Reality"
              delay={50}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h2>
           <ShinyText
            text="Trusted by leading brands and recognized for excellence in digital innovation"
            disabled={false}
            speed={3}
            className='service-shiny'
          />
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'animate-in' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Header with Image */}
              <div className="project-image-container" style={{ background: project.color }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Case Study Button */}
                <button className={`case-study-btn ${hoveredProject === project.id ? 'hovered' : ''}`}>
                  View Case Study
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="read-more-container">
          <button
            onClick={() => window.location.href = '/portfolio'}
            className="read-more-btn"
          >
            View All Projects
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close-btn"
            >
              ✕
            </button>

            {/* Modal Header with Image */}
            <div className="modal-header" style={{ background: selectedProject.color }}>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <div className="modal-image-gradient"></div>
            </div>

            {/* Modal Content */}
            <div className="modal-body">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>

              {/* Key Metrics */}
              <div className="metrics-grid">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="metric-card">
                    <h4 className="metric-value">{value}</h4>
                    <p className="metric-label">{key}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="modal-section-title">Key Features</h3>
              <div className={`features-grid ${isMobile ? 'mobile' : ''}`}>
                {selectedProject.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <h3 className="modal-section-title">Technology Stack</h3>
              <div className="modal-tech-stack">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;