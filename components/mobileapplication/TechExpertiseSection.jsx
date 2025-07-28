'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaAngular, 
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaApple,
  FaAndroid,
  FaFigma,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiKotlin, 
  SiSwift, 
  SiFlutter, 
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiKubernetes,
  SiTensorflow,
  SiDotnet,
  SiGradle,
  SiXcode
} from 'react-icons/si';
import styles from './css/TechExpertiseSection.module.css';

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
      { name: 'Gradle', icon: <SiGradle />, color: '#02303A' },
      { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
      { name: 'Fastlane', icon: <FaDatabase />, color: '#FF6B00' },
      { name: 'Coroutines', icon: <FaAndroid />, color: '#3DDC84' }
    ],
    'iOS': [
      { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
      { name: 'Xcode', icon: <SiXcode />, color: '#1575F9' },
      { name: 'SwiftUI', icon: <FaApple />, color: '#000000' },
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
    <section className={styles.techSection} ref={sectionRef}>
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gridPattern} />
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.noiseOverlay} />
      </div>

      {/* Floating Tech Icons Background */}
      <div className={styles.floatingIcons}>
        {Object.values(techCategories).flat().map((tech, index) => (
          <div
            key={index}
            className={styles.floatingIcon}
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

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={`${styles.leftContent} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>
              Robust Expertise in<br />
              Leveraging Advanced<br />
              Technologies
            </h2>
            <p className={styles.description}>
              The technology stack plays a critical role in shaping the functionality, UI/UX, and 
              performance of your mobile application. Here's a glimpse into the world of diverse 
              technologies that our top app developers UK leverage to develop enthralling mobile 
              applications.
            </p>
          </div>

          {/* Right Tech Display */}
          <div className={`${styles.rightContent} ${isVisible ? styles.visible : ''}`}>
            {/* Tab Navigation */}
            <div className={styles.tabNav}>
              {Object.keys(techCategories).map((category) => (
                <button
                  key={category}
                  className={`${styles.tabButton} ${activeTab === category ? styles.active : ''}`}
                  onClick={() => setActiveTab(category)}
                >
                  <span>{category}</span>
                  <div className={styles.tabIndicator} />
                </button>
              ))}
            </div>

            {/* Tech Icons Display */}
            <div className={styles.techDisplay}>
              <div className={styles.techGrid}>
                {techCategories[activeTab].map((tech, index) => (
                  <div
                    key={tech.name}
                    className={styles.techCard}
                    style={{ 
                      '--index': index,
                      '--color': tech.color
                    }}
                  >
                    <div className={styles.techCardInner}>
                      <div className={styles.iconWrapper}>
                        <div className={styles.iconContainer}>
                          {tech.icon}
                        </div>
                        <div className={styles.iconGlow} />
                        <div className={styles.iconRing} />
                      </div>
                      <span className={styles.techName}>{tech.name}</span>
                      
                      {/* Hover Effects */}
                      <div className={styles.cardBg} />
                      <div className={styles.cardShine} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`} onClick={() => router.push('/tech-stack')}>
          <button className={styles.ctaButton}>
            <span>Explore Our Tech Stack</span>
            <div className={styles.buttonEffects}>
              <div className={styles.buttonGlow} />
              <div className={styles.buttonPulse} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechExpertiseSection;