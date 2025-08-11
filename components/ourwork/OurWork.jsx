import React, { useState } from 'react';
import './css/OurWork.css';

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Corporate', 'Ecommerce', 'Social', 'Entertainment', 
    'Fashion', 'Gaming', 'Healthcare', 'Logistics', 'Oil & Gas', 
    'Real Estate', 'Automobile', 'Education'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Kinder Morgan Energy",
      subtitle: "The App That Turned Energy Data Into Real-Time Decisions",
      description: "Faj IT Solutions partnered with Kinder Morgan to develop a mobile app that simplified real-time data access and reporting for internal Oil and Gas industry.",
      category: "Oil & Gas",
      stats: {
        downloads: "6,000+",
        timeReduction: "95%",
        activeUsers: "100+",
        syncBoost: "46%"
      },
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "RESTful API", "Real-time Data"]
    },
    {
      id: 2,
      title: "Find, Serve & Keep",
      subtitle: "Immersive Gaming Experience",
      description: "FSK by Faj IT Solutions transforms gaming with immersive match-3 puzzles and strategic time management challenges for captivating adventure.",
      category: "Gaming",
      stats: {
        players: "50,000+",
        retention: "85%",
        rating: "4.8★",
        levels: "200+"
      },
      image: "/api/placeholder/400/300",
      technologies: ["Unity", "C#", "Mobile Gaming"]
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      subtitle: "Next-Gen Business Analytics",
      description: "A comprehensive corporate dashboard solution that transforms complex business data into actionable insights with real-time analytics.",
      category: "Corporate",
      stats: {
        companies: "150+",
        dataPoints: "1M+",
        efficiency: "75%",
        satisfaction: "92%"
      },
      image: "/api/placeholder/400/300",
      technologies: ["React", "D3.js", "Node.js"]
    },
    {
      id: 4,
      title: "EcomMax Platform",
      subtitle: "Revolutionary Shopping Experience",
      description: "A cutting-edge e-commerce platform with AI-driven recommendations and seamless payment integration across multiple channels.",
      category: "Ecommerce",
      stats: {
        sales: "$5M+",
        conversion: "68%",
        merchants: "500+",
        transactions: "1M+"
      },
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Stripe", "AI/ML"]
    },
    {
      id: 5,
      title: "HealthCare Mobile",
      subtitle: "Digital Health Solutions",
      description: "Revolutionary healthcare app that connects patients with doctors through telemedicine and real-time health monitoring features.",
      category: "Healthcare",
      stats: {
        patients: "25,000+",
        consultations: "90%",
        satisfaction: "4.9★",
        response: "< 2min"
      },
      image: "/api/placeholder/400/300",
      technologies: ["Flutter", "Firebase", "ML"]
    },
    {
      id: 6,
      title: "Fashion Hub",
      subtitle: "Style Meets Technology",
      description: "Modern fashion platform with AR try-on features and personalized styling recommendations for enhanced shopping experience.",
      category: "Fashion",
      stats: {
        users: "75,000+",
        engagement: "82%",
        sales: "$2M+",
        retention: "78%"
      },
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "AR Kit", "Node.js"]
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="our-work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Case Study
          </h2>
          <p className="section-description">
            Explore Faj IT Solutions exceptional portfolio to witness their transformative work in action, encompassing 
            groundbreaking web and mobile applications, bespoke software development, and captivating digital 
            experiences that push the boundaries of technology and drive business success
          </p>
        </div>

        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                    <div className="card-overlay">
                      <div className="card-category">{item.category}</div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="card-back">
                  <div className="card-content">
                    <div className="card-header-back">
                      <h3 className="card-title-back">{item.title}</h3>
                      <span className="card-category-back">{item.category}</span>
                    </div>
                    
                    <p className="card-description">{item.description}</p>
                    
                    <div className="card-stats">
                      {Object.entries(item.stats).map(([key, value]) => (
                        <div key={key} className="stat-item">
                          <span className="stat-value">{value}</span>
                          <span className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="card-technologies">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <button className="view-case-study-btn">
                      View Case Study
                      <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;