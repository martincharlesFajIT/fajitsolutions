'use client';

import React, { useState, useEffect } from 'react';

import { 
  FaRobot, 
  FaBrain, 
  FaComments, 
  FaEye,
  FaShieldAlt,
  FaLock,
  FaExclamationTriangle,
  FaSearch,
  FaMicrochip,
  FaNetworkWired
} from 'react-icons/fa';

const EmergingTech = () => {
  const [activeTab, setActiveTab] = useState('ai');
 const [isMobile, setIsMobile] = useState(false);
 useEffect(() => {
     const checkMobile = () => {
       setIsMobile(window.innerWidth <= 768);
     };
     
     checkMobile();
     window.addEventListener('resize', checkMobile);
     
     return () => window.removeEventListener('resize', checkMobile);
   }, []);
  const aiFeatures = [
    {
      icon: <FaRobot />,
      title: 'Machine Learning',
      description: 'Advanced algorithms that learn and improve from experience',
      buttonText: 'Explore ML'
    },
    {
      icon: <FaBrain />,
      title: 'Neural Networks',
      description: 'Deep learning models inspired by the human brain',
      buttonText: 'Learn More'
    },
    {
      icon: <FaComments />,
      title: 'Natural Language Processing',
      description: 'AI that understands and generates human language',
      buttonText: 'Discover NLP'
    },
    {
      icon: <FaEye />,
      title: 'Computer Vision',
      description: 'Technology that enables machines to interpret visual data',
      buttonText: 'View Details'
    }
  ];

  const cyberFeatures = [
    {
      icon: <FaShieldAlt />,
      title: 'Threat Detection',
      description: 'Real-time monitoring and identification of security threats',
      buttonText: 'Security Info'
    },
    {
      icon: <FaLock />,
      title: 'Encryption',
      description: 'Advanced cryptography to protect sensitive data',
      buttonText: 'Learn More'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Incident Response',
      description: '24/7 security operations and rapid threat mitigation',
      buttonText: 'View Services'
    },
    {
      icon: <FaSearch />,
      title: 'Vulnerability Assessment',
      description: 'Proactive identification and patching of security gaps',
      buttonText: 'Get Protected'
    }
  ];

  return (
    <section className="emerging-tech-section">
      <style jsx>{`
        .emerging-tech-section {
          width: 100%;
          background: linear-gradient(135deg,rgb(7, 7, 7) 0%,rgb(0, 0, 0) 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 92, 246, 0.1) 35px, rgba(139, 92, 246, 0.1) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(147, 51, 234, 0.1) 35px, rgba(147, 51, 234, 0.1) 70px);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 48px;
          font-weight: bold;
          color: white;
          margin: 0 0 16px 0;
          position: relative;
          display: inline-block;
        }

        .title-gradient {
          background: linear-gradient(135deg,rgb(255, 255, 255) 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: #9ca3af;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tab-container {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
          gap: 20px;
        }

        .tab-button {
          padding: 16px 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .tab-button:hover::before {
          left: 100%;
        }

        .tab-button.active {
          background: linear-gradient(135deg,rgb(45, 43, 49) 0%,rgb(41, 38, 44) 100%);
          border-color: transparent;
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        }

        .content-wrapper {
          position: relative;
          min-height: 400px;
        }

        .tech-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: rgba(42, 31, 66, 0.5);
          box-shadow: 0 20px 40px rgba(46, 40, 61, 0.2);
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          color:rgb(99, 58, 196);
          animation: float 3s ease-in-out infinite;
        }

        .feature-card:hover .feature-icon {
          color:rgb(94, 82, 105);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .feature-title {
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 16px 0;
        }

        .feature-description {
          color: #9ca3af;
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .card-button {
          background: transparent;
          border: 2px solidrgb(85, 62, 139);
          color:rgb(5, 5, 5);
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .card-button:hover {
          background:rgb(54, 51, 59);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(42, 35, 58, 0.3);
        }

        .tech-visual {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          opacity: 0.1;
          pointer-events: none;
        }

        .ai-visual {
          background: radial-gradient(circle,rgb(0, 0, 0) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        .cyber-visual {
          background: radial-gradient(circle,rgb(2, 2, 2) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }
          
          .tab-button {
            padding: 12px 30px;
            font-size: 16px;
          }
          
          .feature-card {
            padding: 30px;
          }
          
          .tech-visual {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <div className="bg-pattern"></div>
      
      <div className="container">
        <div className="section-header">
           <h2 style={{
              fontSize: isMobile ? '32px' : '70px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              Emerging&nbsp;
              <span style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Technology
              </span>
            </h2>
          <p className="section-subtitle">
            Pioneering the future with cutting-edge AI and Cybersecurity solutions
          </p>
        </div>

        <div className="tab-container">
          <button 
            className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
             Artificial Intelligence
          </button>
          <button 
            className={`tab-button ${activeTab === 'cyber' ? 'active' : ''}`}
            onClick={() => setActiveTab('cyber')}
          >
             Cybersecurity
          </button>
        </div>

        <div className="content-wrapper">
          {activeTab === 'ai' ? (
            <div className="tech-content">
              {aiFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="tech-content">
              {cyberFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
          
          <div className={activeTab === 'ai' ? 'tech-visual ai-visual' : 'tech-visual cyber-visual'}></div>
        </div>
      </div>
    </section>
  );
};

export default EmergingTech;