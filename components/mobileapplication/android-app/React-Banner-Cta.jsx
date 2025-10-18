"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import '../../css/Mobileinnerpages.css';

const ReactBannerCta = () => {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
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

  const handleCTAClick = () => {
    router.push('/contact');
  };

  return (
    <section ref={sectionRef} className="react-cta-banner">
      <div className="react-cta-banner-container">
        <div className="react-cta-content">
          <div className="react-cta-text-content">
            <h2 className="react-cta-title">
              Build Cross-Platform Apps Faster
            </h2>
            
            <p className="react-cta-description">
              Deliver high-performance apps across iOS and Android with a single React Native codebase.
            </p>
            
            <button 
              className="react-cta-button" 
              onClick={handleCTAClick}
            >
              Hire a Developer
            </button>
          </div>

          <div className="react-cta-image-content">
            <div className="react-phone-mockup">
              {/* Replace this image URL with your own */}
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop" 
                alt="Mobile App Preview" 
                className="react-phone-screen react-phone-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop" 
                alt="Mobile App Preview 2" 
                className="react-phone-screen react-phone-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactBannerCta;