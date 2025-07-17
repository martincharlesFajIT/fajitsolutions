'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './css/EmergingTech.module.css';
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
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ai');
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsVisible, setCardsVisible] = useState([]);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  
  // Handle client-side only effects
  useEffect(() => {
    setMounted(true);
    
    // Load CSS asynchronously
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.href = '';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.media = 'print';
      link.onload = () => { link.media = 'all'; };
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setCardsVisible(new Array(4).fill(true));
          }, 600);
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
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    setCardsVisible([]);
    setTimeout(() => {
      setCardsVisible(new Array(4).fill(true));
    }, 100);
  }, [activeTab, mounted]);

  const handleCardClick = (link) => {
    router.push(link);
  };

  const aiFeatures = [
    {
      icon: <FaRobot />,
      title: 'Machine Learning',
      description: 'Advanced algorithms that learn and improve from experience',
      buttonText: 'Explore ML',
      link: '/services/machine-learning'
    },
    {
      icon: <FaBrain />,
      title: 'Neural Networks',
      description: 'Deep learning models inspired by the human brain',
      buttonText: 'Learn More',
      link: '/services/neural-networks'
    },
    {
      icon: <FaComments />,
      title: 'Natural Language Processing',
      description: 'AI that understands and generates human language',
      buttonText: 'Discover NLP',
      link: '/services/nlp'
    },
    {
      icon: <FaEye />,
      title: 'Computer Vision',
      description: 'Technology that enables machines to interpret visual data',
      buttonText: 'View Details',
      link: '/services/computer-vision'
    }
  ];

  const cyberFeatures = [
    {
      icon: <FaShieldAlt />,
      title: 'Threat Detection',
      description: 'Real-time monitoring and identification of security threats',
      buttonText: 'Security Info',
      link: '/services/threat-detection'
    },
    {
      icon: <FaLock />,
      title: 'Encryption',
      description: 'Advanced cryptography to protect sensitive data',
      buttonText: 'Learn More',
      link: '/services/encryption'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Incident Response',
      description: '24/7 security operations and rapid threat mitigation',
      buttonText: 'View Services',
      link: '/services/incident-response'
    },
    {
      icon: <FaSearch />,
      title: 'Vulnerability Assessment',
      description: 'Proactive identification and patching of security gaps',
      buttonText: 'Get Protected',
      link: '/services/vulnerability-assessment'
    }
  ];

  const currentFeatures = activeTab === 'ai' ? aiFeatures : cyberFeatures;

  // Generate particles only on client side
  const particles = mounted ? [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 15
  })) : [];

  return (
    <section 
      ref={sectionRef}
      className={styles.emergingTechSection}
    >
      <div className={styles.bgPattern} />
      
      {/* Floating particles - only render when mounted */}
      {mounted && (
        <div className={styles.floatingParticles}>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={styles.particle}
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Glowing orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Emerging{' '}
            <span className={styles.titleGradient}>
              Technology
            </span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Pioneering the future with cutting-edge AI and Cybersecurity solutions
          </p>
        </div>

        {/* Tab Container */}
        <div className={styles.tabContainer}>
          <button 
            onClick={() => setActiveTab('ai')}
            className={`${styles.tabButton} ${activeTab === 'ai' ? styles.active : ''}`}
          >
            <FaMicrochip className={styles.tabIcon} />
            Artificial Intelligence
          </button>
          <button 
            onClick={() => setActiveTab('cyber')}
            className={`${styles.tabButton} ${activeTab === 'cyber' ? styles.active : ''}`}
          >
            <FaNetworkWired className={styles.tabIcon} />
            Cybersecurity
          </button>
        </div>

        {/* Content Wrapper */}
        <div className={styles.contentWrapper}>
          <div className={styles.techContent}>
            {currentFeatures.map((feature, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className={`${styles.featureCard} ${mounted && cardsVisible[index] ? styles.visible : ''} ${hoveredCard === index ? styles.hovered : ''}`}
                onClick={() => handleCardClick(feature.link)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ '--index': index }}
              >
                <div className={styles.cardInner}>
                  <span className={styles.featureIcon}>
                    {feature.icon}
                  </span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                  <button 
                    className={styles.cardButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(feature.link);
                    }}
                  >
                    <span>{feature.buttonText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.techVisual} />
        </div>
      </div>
    </section>
  );
};

export default EmergingTech;