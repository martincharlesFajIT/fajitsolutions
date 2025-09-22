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
    <section className="tech-section" ref={sectionRef}>
      {/* Background Effects */}
      <div className="background-effects">
        <div className="grid-pattern" />
        <div className="gradient-orb-1" />
        <div className="gradient-orb-2" />
        <div className="noise-overlay" />
      </div>

      {/* Floating Tech Icons Background */}
      <div className="floating-icons">
        {Object.values(techCategories).flat().map((tech, index) => (
          <div
            key={index}
            className="floating-icon"
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

      <div className="te-container">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className={`left-content ${isVisible ? 'visible' : ''}`}>
            <h2 className="title">
              Robust Expertise in<br />
              Leveraging Advanced<br />
              Technologies
            </h2>
            <p className="description">
              The technology stack plays a critical role in shaping the functionality, UI/UX, and 
              performance of your mobile application. Here's a glimpse into the world of diverse 
              technologies that our top app developers UK leverage to develop enthralling mobile 
              applications.
            </p>
          </div>

          {/* Right Tech Display */}
          <div className={`right-content ${isVisible ? 'visible' : ''}`}>
            {/* Tab Navigation */}
            <div className="tab-nav">
              {Object.keys(techCategories).map((category) => (
                <button
                  key={category}
                  className={`tab-button ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  <span>{category}</span>
                  <div className="tab-indicator" />
                </button>
              ))}
            </div>

            {/* Tech Icons Display */}
            <div className="tech-display">
              <div className="tech-grid">
                {techCategories[activeTab].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-card"
                    style={{ 
                      '--index': index,
                      '--color': tech.color
                    }}
                  >
                    <div className="tech-card-inner">
                      <div className="icon-wrapper">
                        <div className="icon-container">
                          {tech.icon}
                        </div>
                        <div className="icon-glow" />
                        <div className="icon-ring" />
                      </div>
                      <span className="tech-name">{tech.name}</span>
                      
                      {/* Hover Effects */}
                      <div className="card-bg" />
                      <div className="card-shine" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`cta-section ${isVisible ? 'visible' : ''}`} onClick={() => router.push('/tech-stack')}>
          <button className="cta-button">
            <span>Explore Our Tech Stack</span>
            <div className="button-effects">
              <div className="button-glow" />
              <div className="button-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechExpertiseSection;