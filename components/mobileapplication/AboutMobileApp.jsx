'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './css/mobile-app.css'
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
    <section className="abt-mobileAppSection" ref={sectionRef}>
      {/* Background effects */}
      <div className="abt-gradientBg"></div>
      <div className="abt-gridPattern"></div>

      {/* Floating elements */}
      <div className="abt-floatingElements">
        <div className="abt-floatingCircle1"></div>
        <div className="abt-floatingCircle2"></div>
        <div className="abt-floatingCircle3"></div>
      </div>

      <div className="abt-container">
        <div className="abt-contentWrapper">
          {/* Left side - Phone mockups */}
          <div className={`"abt-phoneSection" ${isVisible ? "visible" : ''}`}>
            <div className="abt-phonesContainer">
              {/* Main phone in center */}
              <div className="abt-phoneMain">
                <div className="abt-phoneFrame">
                  <div className="abt-phoneScreen">
                    <div className="abt-phoneNotch"></div>
                    <div className="abt-screenContent">
                      <div className="abt-appPreview">
                        <h3>Physical<br />Mental &<br />Wellness</h3>
                        <p>MIS HEALTH</p>
                        <div className="abt-playButton">▶</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left phone */}
              <div className="abt-phoneLeft">
                <div className="abt-phoneFrame">
                  <div className="abt-phoneScreen">
                    <div className="abt-phoneNotch"></div>
                    <div className="abt-screenContent">
                      <div className="abt-appPreview">
                        <div className="abt-golfApp">
                          <p>Where Are You Playing?</p>
                          <button className="abt-orderBtn">Order Info</button>
                          <span className="abt-brandLogo">Nike</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right phone */}
              <div className="abt-phoneRight">
                <div className="abt-phoneFrame">
                  <div className="abt-phoneScreen">
                    <div className="abt-phoneNotch"></div>
                    <div className="abt-screenContent">
                      <div className="abt-appPreview">
                        <div className="abt-fashionApp">
                          <h4>Hi HEALTH</h4>
                          <p>Best Men's Performance Hooded Jacket</p>
                          <button className="abt-cartBtn">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={`"abt-contentSection" ${isVisible ? "visible" : ''}`}>
            <h2 className="abt-title">
              Disruptive <span className="abt-highlight">Mobile App</span>
              <br />
              Solutions by <span className="abt-highlight">Leading App</span>
              <br />
              Developers UK
            </h2>

            <p className="abt-description">
              At Faj IT UK, we don't just build mobile apps; we architect digital ecosystems that
              help businesses lead in a competitive market. Our mobile app developers UK,
              designers, and engineers collaborate with startups, enterprises, and scale-ups to
              deliver mobile solutions that are performance-driven, scalable, and user-obsessed.
              Every project we take on is treated like a flagship product - engineered with precision,
              aligned with your business goals, and designed to create real impact in the app
              stores and beyond.
            </p>

            <Link href="/appcostcalculator" className="abt-ctaButton">
              Calculate Your App Cost
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMobileApp;