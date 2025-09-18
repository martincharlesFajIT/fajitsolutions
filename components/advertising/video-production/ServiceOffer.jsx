// components/VideoProductionServices.jsx
import './css/videoproduction.css';

const ServiceOffer = () => {
  return (
    <section className="offer-video-production">
      <div className="offer-production-container">
        <div className="offer-content-area">
          <div className="offer-text-content">
            <h1 className="offer-main-title">
              What We Offer in Video Production
            </h1>
            
            <div className="offer-description-text">
              <p>
                At FAJ, we specialize in delivering complete video production solutions that bring 
                your ideas to life. Our process begins with understanding your brand, audience, and 
                objectives to craft a clear strategy. From there, our creative team handles 
                scriptwriting, storyboarding, filming, and editing with cutting-edge tools and 
                techniques. We focus on producing visually stunning, engaging, and story-driven 
                videos that not only capture attention but also communicate your message 
                effectively. Whether you need commercials, social media content, explainer videos, 
                or corporate presentations, we ensure every video is polished, professional, and 
                aligned with your brand identity. With our expertise, your videos don't just look 
                good—they make a lasting impact.
              </p>
            </div>
            
            <button className="offer-contact-button">
             <a href="/contact-us"></a> Contact Us Now
            </button>
          </div>
          
          <div className="offer-illustration-area">
            <div className="video-illustration">
              {/* Dummy Video Production Illustration */}
              <div className="offer-illustration-container">
                <div className="laptop-mockup">
                  <div className="laptop-screen">
                    <div className="video-player">
                      <div className="video-content">
                        <div className="person-avatar">
                          <div className="avatar-face"></div>
                          <div className="avatar-hair"></div>
                        </div>
                      </div>
                      <div className="video-timeline">
                        <div className="timeline-track"></div>
                        <div className="timeline-progress"></div>
                      </div>
                    </div>
                  </div>
                  <div className="laptop-base"></div>
                </div>
                
                <div className="floating-elements">
                  <div className="camera-icon">
                    <div className="camera-body">
                      <div className="camera-lens"></div>
                      <div className="camera-viewfinder"></div>
                    </div>
                  </div>
                  
                  <div className="microphone-icon">
                    <div className="mic-body"></div>
                    <div className="mic-head"></div>
                    <div className="mic-stand"></div>
                  </div>
                  
                  <div className="ring-light">
                    <div className="light-ring">
                      <div className="light-inner"></div>
                    </div>
                    <div className="light-stand"></div>
                  </div>
                  
                  <div className="decorative-elements">
                    <div className="leaf leaf-1"></div>
                    <div className="leaf leaf-2"></div>
                    <div className="leaf leaf-3"></div>
                    <div className="leaf leaf-4"></div>
                    <div className="geometric-shape shape-1"></div>
                    <div className="geometric-shape shape-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="bottom-decoration">
        <svg viewBox="0 0 1200 100" className="wave-pattern">
          <path d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z" fill="rgba(255,255,255,0.05)"/>
        </svg>
      </div>
    </section>
  );
};

export default ServiceOffer;