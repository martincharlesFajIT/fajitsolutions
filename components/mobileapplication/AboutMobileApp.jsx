'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/components/mobileapplication/css/AboutMobileApp.module.css'
import Link from 'next/link';

const AboutMobileApp = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section className={styles.mobileAppSection} ref={sectionRef}>
      {/* Background effects */}
      <div className={styles.gradientBg}></div>
      <div className={styles.gridPattern}></div>

      {/* Floating elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left side - Phone mockups */}
          <div className={`${styles.phoneSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.phonesContainer}>
              {/* Main phone in center */}
              <div className={styles.phoneMain}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.screenContent}>
                      <div className={styles.appPreview}>
                        <h3>Physical<br />Mental &<br />Wellness</h3>
                        <p>MIS HEALTH</p>
                        <div className={styles.playButton}>▶</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left phone */}
              <div className={styles.phoneLeft}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.screenContent}>
                      <div className={styles.appPreview}>
                        <div className={styles.golfApp}>
                          <p>Where Are You Playing?</p>
                          <button className={styles.orderBtn}>Order Info</button>
                          <span className={styles.brandLogo}>Nike</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right phone */}
              <div className={styles.phoneRight}>
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.screenContent}>
                      <div className={styles.appPreview}>
                        <div className={styles.fashionApp}>
                          <h4>Hi HEALTH</h4>
                          <p>Best Men's Performance Hooded Jacket</p>
                          <button className={styles.cartBtn}>Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`${styles.contentSection} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>
              Disruptive <span className={styles.highlight}>Mobile App</span>
              <br />
              Solutions by <span className={styles.highlight}>Leading App</span>
              <br />
              Developers UK
            </h2>

            <p className={styles.description}>
              At Faj IT UK, we don't just build mobile apps; we architect digital ecosystems that
              help businesses lead in a competitive market. Our mobile app developers UK,
              designers, and engineers collaborate with startups, enterprises, and scale-ups to
              deliver mobile solutions that are performance-driven, scalable, and user-obsessed.
              Every project we take on is treated like a flagship product - engineered with precision,
              aligned with your business goals, and designed to create real impact in the app
              stores and beyond.
            </p>

            <Link href="/appcostcalculator" className={styles.ctaButton}>
              Calculate Your App Cost
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMobileApp;