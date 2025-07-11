"use client"
import React, { useState, useEffect } from 'react';

const DigitalMarketingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.digital-marketing-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { name: 'PR', description: 'Public Relations & Brand Management' },
    { name: 'PPC', description: 'Pay-Per-Click Advertising Campaigns' },
    { name: 'SEO', description: 'Search Engine Optimization' },
    { name: 'Online Reputation Management', description: 'Protect & enhance your digital reputation' },
    { name: 'ASO App Store Optimization', description: 'Maximize app visibility & downloads' },
    { name: 'Influencer Marketing', description: 'Connect with authentic brand ambassadors' },
    { name: 'Conversion Rate Optimization', description: 'Turn visitors into loyal customers' },
    { name: 'Translation Services', description: 'Global reach with localized content' },
    { name: 'Email Marketing', description: 'Targeted campaigns that convert' },
    { name: 'Generative Engine Optimization (GEO)', description: 'AI-powered content optimization' }
  ];

  return (
    <section className="digital-marketing-section" style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at top, #0a0a0a 0%, #000000 100%)',
      padding: isMobile ? '60px 0' : '100px 0',
      overflow: 'hidden'
    }}>
      {/* Dynamic Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        opacity: 0.3,
        animation: 'gridMove 20s linear infinite'
      }}></div>

      {/* Floating Orbs */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '10%',
        right: '-10%',
        filter: 'blur(100px)',
        animation: 'floatOrb1 25s ease-in-out infinite'
      }}></div>

      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '20%',
        left: '-5%',
        filter: 'blur(80px)',
        animation: 'floatOrb2 30s ease-in-out infinite reverse'
      }}></div>

      {/* Interactive Cursor Effect */}
      {!isMobile && (
        <div style={{
          position: 'fixed',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'all 0.3s ease'
        }}></div>
      )}

      {/* Large Background Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: isMobile ? '120px' : '200px',
        fontWeight: '900',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(139, 92, 246, 0.1)',
        opacity: 0.3,
        pointerEvents: 'none',
        zIndex: 1,
        whiteSpace: 'nowrap'
      }}>
        Digital Marketing
      </div>

      <div className="container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Header */}
        <div className={`header ${isVisible ? 'animate-in' : ''}`} style={{
          textAlign: 'center',
          marginBottom: isMobile ? '50px' : '80px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(139, 92, 246, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '12px 24px',
            borderRadius: '50px',
            marginBottom: '30px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}></div>
            <span style={{
              width: '8px',
              height: '8px',
              background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            <span style={{ 
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              We are experts in
            </span>
          </div>
        
           <h2 style={{
              fontSize: isMobile ? '32px' : '60px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              Digital&nbsp;
              <span style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Marketing
              </span>
            </h2>
        </div>

        

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Side - Content */}
          <div className={`left-content ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'all 1s ease 0.3s'
          }}>
            <h3 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '30px',
              lineHeight: '1.2'
            }}>
              Digital Marketing<br />
              <span style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Solutions
              </span>
            </h3>
            
            <p style={{
              fontSize: '18px',
              color: '#a1a1aa',
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              With our marketing solution services, we help brands craft their marketing platforms no matter whether you are looking for PPC, SEO, PR, APP, GEO, Email, ORM, ASO, or Influencer.
            </p>

            <button style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '16px',
              padding: '18px 36px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 92, 246, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
            }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                Learn More
              </span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.5s ease'
              }}></div>
            </button>
          </div>

          {/* Right Side - 3D Laptop with Analytics */}
          <div className={`right-content ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
            transition: 'all 1s ease 0.5s',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* 3D Laptop Container */}
            <div style={{
              position: 'relative',
              transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg)',
              animation: 'laptopFloat 6s ease-in-out infinite'
            }}>
              {/* Laptop Base */}
              <div style={{
                width: '400px',
                height: '280px',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                borderRadius: '20px',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(139, 92, 246, 0.3)'
              }}>
                {/* Screen */}
                <div style={{
                  width: '360px',
                  height: '240px',
                  background: 'linear-gradient(135deg, #000000 0%, #1a0a2e 100%)',
                  borderRadius: '12px',
                  margin: '20px auto',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(139, 92, 246, 0.4)'
                }}>
                  {/* Screen Glow */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    animation: 'screenPulse 3s ease-in-out infinite'
                  }}></div>

                  {/* Analytics Chart */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    bottom: '20px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '8px',
                    padding: '20px',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                  }}>
                    {/* Chart Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px'
                    }}>
                      <h4 style={{
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        Analytics Dashboard
                      </h4>
                      <div style={{
                        display: 'flex',
                        gap: '5px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: '#10b981',
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite'
                        }}></div>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: '#8b5cf6',
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite 0.5s'
                        }}></div>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: '#ec4899',
                          borderRadius: '50%',
                          animation: 'pulse 2s infinite 1s'
                        }}></div>
                      </div>
                    </div>

                    {/* Chart Bars */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'end',
                      gap: '8px',
                      height: '120px',
                      paddingTop: '20px'
                    }}>
                      {[60, 80, 45, 90, 70, 95, 75, 85].map((height, index) => (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            background: `linear-gradient(180deg, ${index % 3 === 0 ? '#8b5cf6' : index % 3 === 1 ? '#ec4899' : '#10b981'} 0%, transparent 100%)`,
                            borderRadius: '4px 4px 0 0',
                            animation: `barGrow 2s ease-out ${index * 0.1}s both`,
                            border: `1px solid ${index % 3 === 0 ? '#8b5cf6' : index % 3 === 1 ? '#ec4899' : '#10b981'}40`
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Chart Labels */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '10px',
                      fontSize: '10px',
                      color: '#6b7280'
                    }}>
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, index) => (
                        <span key={index}>{month}</span>
                      ))}
                    </div>
                  </div>

                  {/* Floating Data Points */}
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    background: 'rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    animation: 'dataFloat 3s ease-in-out infinite'
                  }}>
                    <div style={{
                      fontSize: '12px',
                      color: '#8b5cf6',
                      fontWeight: '600'
                    }}>
                      +245%
                    </div>
                    <div style={{
                      fontSize: '8px',
                      color: '#a1a1aa'
                    }}>
                      Growth
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard */}
              <div style={{
                width: '400px',
                height: '20px',
                background: 'linear-gradient(135deg, #2d2d4a 0%, #1a1a2e 100%)',
                borderRadius: '0 0 20px 20px',
                position: 'relative',
                top: '-5px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Keyboard Details */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  gap: '2px'
                }}>
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '20px',
                        height: '3px',
                        background: 'rgba(139, 92, 246, 0.3)',
                        borderRadius: '1px'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: -1,
                animation: 'glowPulse 4s ease-in-out infinite'
              }}></div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className={`services-grid ${isVisible ? 'animate-in' : ''}`} style={{
          marginTop: '100px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease 0.7s'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  padding: '20px',
                  background: hoveredService === index 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid',
                  borderColor: hoveredService === index 
                    ? 'rgba(139, 92, 246, 0.5)'
                    : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: hoveredService === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredService === index 
                    ? '0 20px 40px rgba(139, 92, 246, 0.3)'
                    : '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                {hoveredService === index && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                    animation: 'shimmer 1s ease-out'
                  }}></div>
                )}
                
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: hoveredService === index ? '#ffffff' : '#e5e7eb',
                  marginBottom: '8px',
                  transition: 'color 0.3s ease'
                }}>
                  {service.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { backgroundPosition: 0 0; }
          100% { backgroundPosition: 100px 100px; }
        }

        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -30px) scale(1.1); }
          66% { transform: translate(30px, -50px) scale(0.9); }
        }

        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -40px) scale(1.2); }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes laptopFloat {
          0%, 100% { transform: perspective(1000px) rotateX(10deg) rotateY(-15deg) translateY(0); }
          50% { transform: perspective(1000px) rotateX(10deg) rotateY(-15deg) translateY(-20px); }
        }

        @keyframes screenPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes barGrow {
          0% { height: 0; }
          100% { height: var(--final-height); }
        }

        @keyframes dataFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default DigitalMarketingSection;