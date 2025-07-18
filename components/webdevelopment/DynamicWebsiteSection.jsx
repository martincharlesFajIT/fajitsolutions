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
      <style jsx>{`
        .dynamic-website-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          position: relative;
          overflow: hidden;
        }

        /* Animated background */
        .bg-animation {
          position: absolute;
          inset: 0;
          opacity: 0.3;
        }

        .code-bg {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          color: #333;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight {
          background: linear-gradient(135deg, rgb(100, 47, 224) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 20px;
          color: #b0b0b0;
          margin-bottom: 10px;
        }

        /* Stats */
        .stats-container {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-bottom: 60px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '20px'});
          transition: all 0.8s ease-out 0.3s;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, rgb(100, 47, 224) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 16px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Tech stack showcase */
        .tech-showcase {
          margin-bottom: 80px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out 0.5s;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-button {
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          color: #888;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .tab-button.active {
          background: linear-gradient(135deg, rgb(100, 47, 224) 100%);
          border-color: transparent;
          color: #fff;
          transform: scale(1.05);
        }

        /* Tech grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .tech-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, var(--tech-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-item:hover::before {
          opacity: 0.1;
        }

        .tech-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .tech-icon {
          font-size: 48px;
          color: var(--tech-color);
          transition: all 0.3s ease;
        }

        .tech-item:hover .tech-icon {
          transform: scale(1.2) rotate(-5deg);
          filter: drop-shadow(0 0 20px var(--tech-color));
        }

        .tech-name {
          font-size: 14px;
          color: #d0d0d0;
          font-weight: 500;
          text-align: center;
        }

        /* Value props */
        .value-props {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out 0.7s;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, rgb(100, 47, 224) 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .value-card:hover::after {
          transform: scaleX(1);
        }

        .value-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .value-icon {
          font-size: 40px;
          color: #642FE0;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .value-card:hover .value-icon {
          transform: scale(1.2);
          color: #966ef5ff;
        }

        .value-title {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        .value-description {
          font-size: 14px;
          color: #888;
          line-height: 1.6;
        }

        /* CTA section */
        .cta-section {
          text-align: center;
          padding: 40px;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%);
          border-radius: 20px;
          border: 1px solid rgb(100, 47, 224);
          opacity: ${isVisible ? '1' : '0'};
          transform: translateY(${isVisible ? '0' : '30px'});
          transition: all 0.8s ease-out 0.9s;
        }

        .cta-title {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }

        .cta-subtitle {
          font-size: 18px;
          color: #b0b0b0;
          margin-bottom: 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cta-primary {
          background: linear-gradient(135deg, rgb(100, 47, 224) 100%);
          color: #fff;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 128, 255, 0.4);
        }

        .cta-secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #642FE0;
        }

        .cta-secondary:hover {
          background: rgb(100, 47, 224);
          transform: translateY(-2px);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .stats-container {
            flex-direction: column;
            gap: 30px;
          }

          .tech-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .tech-icon {
            font-size: 36px;
          }

          .value-props {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 24px;
          }
        }
      `}</style>

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

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="highlight">Dynamic Website</span> Development
          </h2>
          <p className="section-subtitle">
            Cutting-edge tech stack for powerful, scalable web solutions
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container">
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
        <div className="tech-showcase">
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
        <div className="value-props">
          {valueProps.map((prop, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{prop.icon}</div>
              <h3 className="value-title">{prop.title}</h3>
              <p className="value-description">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-section">
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