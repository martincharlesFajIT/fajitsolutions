'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaApple,
  FaAndroid,
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiSwift, 
  SiFlutter, 
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiDotnet,
  SiGradle,
  SiXcode
} from 'react-icons/si';

import './css/TechExpertiseSection.css';

const TechExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Android');
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const techCategories = {
    'Android': [
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'Gradle', icon: <SiGradle />, color: '#57bfd6ff' },
      { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
      { name: 'Fastlane', icon: <FaDatabase />, color: '#FF6B00' },
      { name: 'Coroutines', icon: <FaAndroid />, color: '#3DDC84' }
    ],
    'iOS': [
      { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
      { name: 'Xcode', icon: <SiXcode />, color: '#1575F9' },
      { name: 'SwiftUI', icon: <FaApple />, color: '#b62c2cff' },
      { name: 'UIKit', icon: <FaApple />, color: '#2396F3' },
      { name: 'Core Data', icon: <FaDatabase />, color: '#FF3B30' }
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: '.NET', icon: <SiDotnet />, color: '#512BD4' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
    ],
    'Cross Platform': [
      { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' }
    ]
  };

  return (
    <section className="mp-tech-section" ref={sectionRef}>
      {/* Background Effects */}
      <div className="mp-background-effects">
        <div className="mp-grid-pattern" />
        <div className="mp-gradient-orb-1" />
        <div className="mp-gradient-orb-2" />
        <div className="mp-noise-overlay" />
      </div>

      {/* Floating Tech Icons Background */}
      <div className="mp-floating-icons">
        {Object.values(techCategories).flat().map((tech, index) => (
          <div
            key={index}
            className="mp-floating-icon"
            style={{
              '--delay': `${index * 0.5}s`,
              '--duration': `${20 + Math.random() * 10}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {tech.icon}
          </div>
        ))}
      </div>

      <div className="mp-te-container">
        <div className="mp-content-wrapper">
          {/* Left Content */}
          <div className={`mp-left-content ${isVisible ? 'visible' : ''}`}>
            <h2 className="mp-title">
              Robust Expertise in<br />
              Leveraging Advanced<br />
              Technologies
            </h2>
            <p className="mp-description">
              The technology stack plays a critical role in shaping the functionality, UI/UX, and 
              performance of your mobile application. Here's a glimpse into the world of diverse 
              technologies that our top app developers UK leverage to develop enthralling mobile 
              applications.
            </p>
          </div>

          {/* Right Tech Display */}
          <div className={`mp-right-content ${isVisible ? 'visible' : ''}`}>
            {/* Tab Navigation */}
            <div className="mp-tab-nav">
              {Object.keys(techCategories).map((category) => (
                <button
                  key={category}
                  className={`mp-tab-button ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  <span>{category}</span>
                  <div className="mp-tab-indicator" />
                </button>
              ))}
            </div>

            {/* Tech Icons Display */}
            <div className="mp-tech-display">
              <div className="mp-tech-grid">
                {techCategories[activeTab].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="mp-tech-card"
                    style={{ 
                      '--index': index,
                      '--color': tech.color
                    }}
                  >
                    <div className="mp-tech-card-inner">
                      <div className="mp-icon-wrapper">
                        <div className="mp-icon-container">
                          {tech.icon}
                        </div>
                        <div className="mp-icon-glow" />
                        <div className="mp-icon-ring" />
                      </div>
                      <span className="mp-tech-name">{tech.name}</span>
                      
                      {/* Hover Effects */}
                      <div className="mp-card-bg" />
                      <div className="mp-card-shine" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mp-cta-section ${isVisible ? 'visible' : ''}`} onClick={() => router.push('/tech-stack')}>
          <button className="mp-cta-button">
            <span>Explore Our Tech Stack</span>
            <div className="mp-button-effects">
              <div className="mp-button-glow" />
              <div className="mp-button-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechExpertiseSection;