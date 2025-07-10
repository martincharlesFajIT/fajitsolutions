"use client"
import React, { useState, useEffect } from 'react'
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { LiaOpencart } from "react-icons/lia";
import { GrServices } from "react-icons/gr";

const ModernDevelopment = () => {
  const [activeService, setActiveService] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Services data
  const services = [
    {
      icon: <RiCodeSSlashFill />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      color: "#6366f1",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <FaMobileScreen />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
      color: "#8b5cf6",
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      icon: <LiaOpencart />,
      title: "Full E-commerce Websites Solution",
      description: "Scalable cloud infrastructure and serverless architectures",
      color: "#3b82f6",
      features: ["AWS/Azure", "Microservices", "DevOps"]
    },
    {
      icon: <SiAffinitydesigner />,
      title: "UI/UX Design",
      description: "Intelligent solutions powered by machine learning and AI",
      color: "#10b981",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: <GrServices />,
      title: "Website Maintenance Service",
      description: "Intelligent solutions powered by machine learning and AI",
      color: "#10b981",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="modern-app">
      <style jsx global>{`
        .modern-app {
          min-height: 100vh;
          background: #000;
          color: white;
          overflow-x: hidden;
          position: relative;
        }

        /* Animated Background */
        .animated-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .bg-gradient {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          animation: gradientShift 20s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
        }

        /* 3D Grid Effect */
        .grid-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center center;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        /* Floating Shapes */
        .shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(40px);
          animation: float 10s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          bottom: 10%;
          right: 10%;
          animation-delay: 3s;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          top: 50%;
          left: 50%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg) scale(0.9);
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Navbar Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem 2rem;
          backdrop-filter: blur(20px);
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .navbar.scrolled {
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.8);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .cta-button {
          padding: 0.75rem 2rem;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 2rem;
        }

        .hero-content {
          text-align: center;
          max-width: 1200px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #6366f1;
          border-radius: 50%;
          animation: blink 1.5s infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          transform-style: preserve-3d;
          transform: perspective(1000px);
        }

        .gradient-text {
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        /* 3D Cards Section */
        .development-section {
          padding: 5rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, currentColor, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover {
          transform: perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover::after {
          opacity: 0.1;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
          animation: float-icon 3s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0) rotateZ(0deg);
          }
          50% {
            transform: translateY(-10px) rotateZ(5deg);
          }
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-feature {
          padding: 0.5rem 0;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .service-feature::before {
          content: '→';
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-feature {
          color: rgba(255, 255, 255, 0.9);
          transform: translateX(5px);
        }

        .service-card:hover .service-feature::before {
          transform: translateX(5px);
        }

        /* Interactive Showcase */
        .showcase-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
          border-radius: 30px;
          margin: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .showcase-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          animation: rotate-gradient 20s linear infinite;
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          position: relative;
          z-index: 1;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: number-glow 2s ease-in-out infinite;
        }

        @keyframes number-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.8));
          }
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.5rem;
        }

        /* Mobile Menu */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 400px;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          transition: right 0.3s ease;
          z-index: 1001;
          padding: 2rem;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: none;
          z-index: 1000;
        }

        .mobile-menu-overlay.open {
          display: block;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .cta-button {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .hero-title {
            font-size: 3rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Parallax Effect */
        .parallax-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(99, 102, 241, 0.5);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transition: all 0.1s ease;
          z-index: 9999;
          display: none;
        }

        @media (hover: hover) {
          .custom-cursor {
            display: block;
          }
        }

        .custom-cursor.hover {
          width: 40px;
          height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.8);
        }
      `}</style>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-gradient"></div>
        <div className="grid-3d"></div>
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor" 
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Modern Development Solutions
            </div>
            <h1 className="hero-title">
              Building the <span className="gradient-text">Future</span><br />
              with Advanced <span className="gradient-text">Technology</span>
            </h1>
            <p className="hero-description">
              We create exceptional digital experiences with cutting-edge technologies, 
              innovative design, and powerful performance.
            </p>
          </div>
        </section>

        {/* Development Services Section */}
        <section className="development-section" id="services">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text"> Development</span> Services</h2>
            <p className="hero-description">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
                style={{ color: service.color }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModernDevelopment