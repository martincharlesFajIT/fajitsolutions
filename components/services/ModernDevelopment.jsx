"use client"
import React, { useState, useEffect } from 'react'
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaMobileScreen } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { LiaOpencart } from "react-icons/lia";
import { GrServices } from "react-icons/gr";
import styles from './css/ModernDevelopment.module.css'
import Link from 'next/link';

const ModernDevelopment = () => {
  const [activeService, setActiveService] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })


  // Services data
  const services = [
    {
      icon: <RiCodeSSlashFill />,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      color: "#8b5cf6",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions"],
      link: "/web-development",
      buttonText: "Get Started"
    },
    {
      icon: <FaMobileScreen />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences",
      color: "#48AAAD",
      features: ["iOS & Android", "React Native", "Flutter"],
      link: "/mobile-app-development",
      buttonText: "Get Started",
    },
    {
      icon: <LiaOpencart />,
      title: "Full E-commerce Websites Solution",
      description: "Scalable cloud infrastructure and serverless architectures",
      color: "#48AAAD",
      features: ["AWS/Azure", "Microservices", "DevOps"],
      link: "/e-commerce-website",
      buttonText: "Get Started",
    },
    {
      icon: <SiAffinitydesigner />,
      title: "UI/UX Design",
      description: "Intelligent solutions powered by machine learning and AI",
      color: "#48AAAD",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      link: "/ui-ux-design",
      buttonText: "Get Started",
    },
    {
      icon: <GrServices />,
      title: "Website Maintenance Service",
      description: "Intelligent solutions powered by machine learning and AI",
      color: "#48AAAD",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      link: "/web-maintenance",
      buttonText: "Get Started",
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
    <div className={styles.modernApp}>
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div className={styles.bgGradient}></div>
        <div className={styles.grid3d}></div>

      </div>

      {/* Custom Cursor */}
      <div
        className={`${styles.customCursor} ${mousePosition.hover ? styles.hover : ''}`}
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              Modern Development Solutions
            </div>
            <h1 className={styles.heroTitle}>
              Building the <span className={styles.gradientText}>Future</span><br />
              with Advanced <span className={styles.gradientText}>Technology</span>
            </h1>
            <p className={styles.heroDescription}>
              We create exceptional digital experiences with cutting-edge technologies,
              innovative design, and powerful performance.
            </p>
          </div>
        </section>

        {/* Development Services Section */}
        <section className={styles.developmentSection} id="services">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.gradientText}>Development</span> Services
            </h2>
            <p className={styles.heroDescription}>
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={styles.serviceCard}
                style={{ '--service-color': service.color }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={styles.serviceIcon} style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.serviceFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && service.buttonText && (
                  <Link href={service.link} className={styles.cardButton}>
                    {service.buttonText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModernDevelopment