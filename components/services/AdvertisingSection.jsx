"use client"
import React, { useState, useEffect } from 'react';
import { TfiClipboard } from "react-icons/tfi";
import { MdOutlineStyle } from "react-icons/md";
const AdvertisingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.advertising-section');
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
    {
      title: 'Whiteboard Video Animation',
      description: 'Engage your audience with hand-drawn storytelling that simplifies complex ideas into memorable visual narratives',
      icon: <TfiClipboard />,
      color: '#8b5cf6'
    },
    {
      title: 'Character Animation',
      description: 'Bring your brand to life with custom animated characters and mascots that connect with your audience',
      icon: <MdOutlineStyle />,
      color: '#06b6d4'
    },
    {
      title: 'Video Game Trailers',
      description: 'Epic cinematic trailers that showcase your game\'s best features and create excitement',
      icon: '',
      color: '#ef4444'
    },
    {
      title: 'Product Demo Video',
      description: 'Show your product in action with compelling demonstration videos that drive conversions',
      icon: '',
      color: '#f59e0b'
    },
    {
      title: 'Explainer Videos',
      description: 'Clear, concise videos that explain your service or product simply and effectively',
      icon: '',
      color: '#10b981'
    },
    {
      title: 'Medical Animation',
      description: 'Professional medical and healthcare animations for education and marketing purposes',
      icon: '',
      color: '#ec4899'
    },
    {
      title: '3D Architectural Walkthroughs',
      description: 'Stunning 3D visualizations of architectural projects that bring blueprints to life',
      icon: '',
      color: '#6366f1'
    }
  ];

  const currentService = services[activeTab];

  return (
    <section className="advertising-section" style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center,rgb(6, 6, 7) 0%, #000000 100%)',
      padding: isMobile ? '40px 0' : '30px 0',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(7, 7, 7, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)
        `,
        animation: 'bgPulse 8s ease-in-out infinite'
      }}></div>

      {/* Animated Orbs */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        top: '-200px',
        right: '-200px',
        filter: 'blur(80px)',
        animation: 'float 25s ease-in-out infinite'
      }}></div>

      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        bottom: '-150px',
        left: '-150px',
        filter: 'blur(60px)',
        animation: 'float 30s ease-in-out infinite reverse'
      }}></div>

      {/* Interactive Cursor Light */}
      {!isMobile && (
        <div style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'all 0.3s ease'
        }}></div>
      )}

      <div className="advertising-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 60px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Enhanced Section Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`} style={{
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
            border: '1px solid rgba(139, 92, 246, 0.4)',
            padding: '12px 24px',
            borderRadius: '50px',
            marginBottom: '40px',
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
              width: '10px',
              height: '10px',
              background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
            }}></span>
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}>
              Creative Excellence
            </span>
          </div>

          <h2 style={{
            fontSize: isMobile ? '32px' : '70px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '30px',
            lineHeight: '1.2'
          }}>
            Advertising & &nbsp;
            <span style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Creative
            </span>
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#a1a1aa',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Transform your vision into captivating visual stories that engage, inspire, and convert your audience
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Content - Enhanced */}
          <div className={`left-content ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'all 1s ease 0.2s'
          }}>
            <div style={{
              background: 'rgba(139, 92, 246, 0.05)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '20px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Animated background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                  radial-gradient(circle at 20px 20px, rgba(139, 92, 246, 0.1) 2px, transparent 2px),
                  radial-gradient(circle at 60px 60px, rgba(6, 182, 212, 0.1) 2px, transparent 2px)
                `,
                backgroundSize: '80px 80px',
                animation: 'patternMove 20s linear infinite'
              }}></div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: isMobile ? '36px' : '52px',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>
                  Digital Advertisement
                </h3>

                <p style={{
                  fontSize: '19px',
                  color: '#a1a1aa',
                  lineHeight: '1.8',
                  marginBottom: '40px'
                }}>
                  Our comprehensive video production services combine cutting-edge technology with creative expertise to deliver content that captivates and converts. From concept to final delivery, we create videos that tell your story.
                </p>

                <div style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '40px'
                }}>
                  <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '20px',
                    background: 'rgba(6, 182, 212, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(6, 182, 212, 0.2)'
                  }}>
                    <h4 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#06b6d4',
                      marginBottom: '8px'
                    }}>500+</h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#a1a1aa'
                    }}>Projects Completed</p>
                  </div>
                  <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '20px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(139, 92, 246, 0.2)'
                  }}>
                    <h4 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#8b5cf6',
                      marginBottom: '8px'
                    }}>98%</h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#a1a1aa'
                    }}>Client Satisfaction</p>
                  </div>
                </div>

                <button style={{
                  background: 'linear-gradient(135deg,rgb(37, 40, 179) 0%,rgb(44, 6, 212) 100%)',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '18px 36px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(13, 13, 14, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(18, 18, 19, 0.3)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 2 }}>
                    Quick Start →
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
            </div>
          </div>

          {/* Right Content - Interactive Display */}
          <div className={`right-content ${isVisible ? 'animate-in' : ''}`} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
            transition: 'all 1s ease 0.4s',
            position: 'relative'
          }}>
            {/* Main Display */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '24px',
              padding: '30px',
              boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              {/* Holographic Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
                animation: 'hologram 4s ease-in-out infinite'
              }}></div>

              {/* Screen */}
              <div style={{
                background: `radial-gradient(circle at center, ${currentService.color}20 0%, transparent 70%)`,
                borderRadius: '16px',
                height: '450px',
                position: 'relative',
                overflow: 'hidden',
                border: `2px solid ${currentService.color}40`,
                transition: 'all 0.5s ease'
              }}>
                {/* Dynamic Glow */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '350px',
                  height: '350px',
                  background: `radial-gradient(circle, ${currentService.color}30 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  animation: 'dynamicPulse 3s ease-in-out infinite'
                }}></div>

                {/* Floating Particles */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `
                    radial-gradient(circle at 20% 20%, ${currentService.color}60 2px, transparent 2px),
                    radial-gradient(circle at 80% 80%, #ffffff30 1px, transparent 1px),
                    radial-gradient(circle at 40% 60%, ${currentService.color}40 1px, transparent 1px)
                  `,
                  backgroundSize: '100px 100px, 150px 150px, 80px 80px',
                  animation: 'particleFloat 15s linear infinite'
                }}></div>

                {/* Service Content */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px',
                  textAlign: 'center',
                  zIndex: 5
                }}>
                  <div style={{
                    fontSize: '80px',
                    marginBottom: '24px',
                    display: 'block',
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
                    animation: 'iconFloat 2s ease-in-out infinite'
                  }}>
                    {currentService.icon}
                  </div>
                  <h4 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '16px',
                    textShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                  }}>
                    {currentService.title}
                  </h4>
                  <p style={{
                    fontSize: '16px',
                    color: '#a1a1aa',
                    lineHeight: '1.6',
                    maxWidth: '300px'
                  }}>
                    {currentService.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Navigation */}
            <div style={{
              marginTop: '30px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '12px'
            }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{
                    padding: '16px',
                    background: activeTab === index
                      ? `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`
                      : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid',
                    borderColor: activeTab === index
                      ? `${service.color}60`
                      : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.borderColor = `${service.color}40`;
                      e.currentTarget.style.background = `linear-gradient(135deg, ${service.color}10 0%, ${service.color}05 100%)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== index) {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                >
                  <div style={{
                    fontSize: '24px',
                    marginBottom: '8px'
                  }}>
                    {service.icon}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: activeTab === index ? '#ffffff' : '#a1a1aa',
                    fontWeight: '500'
                  }}>
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div >

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, -30px) rotate(120deg); }
          66% { transform: translate(30px, -10px) rotate(240deg); }
        }

        @keyframes bgPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 120px; }
        }

        @keyframes patternMove {
          0% { backgroundPosition: 0 0; }
          100% { backgroundPosition: 80px 80px; }
        }

        @keyframes hologram {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes dynamicPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.5; }
        }

        @keyframes particleFloat {
          0% { backgroundPosition: 0 0, 0 0, 0 0; }
          100% { backgroundPosition: 100px 100px, -150px -150px, 80px 80px; }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>
    </section >
  );
};

export default AdvertisingSection;