'use client';

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaAngular,
  FaVuejs,
  FaLaravel,
  FaPython,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaWordpress,
  FaShopify,
  FaCheckCircle,
  FaRocket,
  FaClock,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiStripe,
  SiExpress
} from 'react-icons/si';
import './css/DynamicWebsiteSection.css';

const DynamicWebsiteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          animateCounters();
        }
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

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(500 * progress),
        satisfaction: Math.floor(98 * progress),
        experience: Math.floor(15 * progress)
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  const techStack = {
    frontend: [
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'Angular', icon: <FaAngular />, color: '#DD0031' },
      { name: 'Vue.js', icon: <FaVuejs />, color: '#4FC08D' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
      { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      { name: 'REST APIs', icon: <FaDatabase />, color: '#336791' }
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MySQL', icon: <FaDatabase />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
    ],
    tools: [
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'WordPress', icon: <FaWordpress />, color: '#21759B' },
      { name: 'Shopify', icon: <FaShopify />, color: '#96BF48' },
      { name: 'Stripe', icon: <SiStripe />, color: '#008CDD' }
    ]
  };

  const valueProps = [
    {
      icon: <FaRocket />,
      title: "Lightning Fast",
      description: "Optimized performance with load times under 2 seconds"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with unlimited growth potential"
    },
    {
      icon: <FaClock />,
      title: "Quick Delivery",
      description: "Projects delivered 40% faster than industry average"
    },
    {
      icon: <FaChartLine />,
      title: "ROI Focused",
      description: "Average 300% ROI increase within first year"
    }
  ];

  return (
    <section className="dynamic-website-section" ref={sectionRef}>
      <div className="bg-animation">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="code-bg"
            style={{
              left: `${i * 25}%`,
              top: `${i * 20}%`,
              opacity: 0.1 - (i * 0.02)
            }}
          >
            {`const buildDynamicWebsite = () => { return excellence; }`}
          </div>
        ))}
      </div>

      <div className="dw-container">
        {/* Header */}
        <div className={`dw-section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="dw-section-title">
            <span className="dw-highlight">Dynamic Website</span> Development
          </h2>
          <p className="dw-section-subtitle">
            Cutting-edge tech stack for powerful, scalable web solutions
          </p>
        </div>

        {/* Stats */}
        <div className={`stats-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">{counters.projects}+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counters.satisfaction}%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counters.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`tech-showcase ${isVisible ? 'animate-in' : ''}`}>
          <div className="category-tabs">
            {Object.keys(techStack).map((category) => (
              <button
                key={category}
                className={`tab-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="tech-grid">
            {techStack[activeCategory].map((tech, index) => (
              <div
                key={index}
                className="tech-item"
                style={{ '--tech-color': tech.color }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Props */}
        <div className={`value-props ${isVisible ? 'animate-in' : ''}`}>
          {valueProps.map((prop, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{prop.icon}</div>
              <h3 className="value-title">{prop.title}</h3>
              <p className="value-description">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="cta-title">Ready to Build Your Dynamic Website?</h3>
          <p className="cta-subtitle">
            Join 500+ businesses that trust us for their web development needs
          </p>
          <div className="cta-buttons">
            <button className="cta-button cta-primary">
              Get Started Now <FaRocket />
            </button>
            <button className="cta-button cta-secondary">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicWebsiteSection;