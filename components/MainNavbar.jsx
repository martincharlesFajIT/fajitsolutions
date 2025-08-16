"use client"
import React, { useState, useEffect } from 'react'
import './css/MainNavbar.css'
import Link from 'next/link'

const Navbar = () => {
  const megaMenuData = {
    Development: {
      'Web Development': [
        'Laravel Development',
        'Node.js Development', 
        'Django Python Development',
        'CMS Development',
        'PHP Development',
        'Wordpress Development',
        'Enterprise Development',
        'AngularJS Development',
        'Drupal Development',
      ],
      'Mobile App Development': [
        'React Native Development',
        'Flutter Development',
        'Hybrid App Development',
        'iOS App Development',
        'Android App Development',
        'Progessive Web App',
        'App Store Optimization (ASO)'
      ],
      'E-commerce Websites': [
        'Shopify Development',
        'Shopify Plus Development',
        'Magento Development',
        'WooCommerce Development',
        'Custom E-commerce',
        'Payment Gateway Integration',
      ],
      'UI-UX Design': [
        'UX Design Figma',
        'UX Workshop Figma',
        'UX Audit Figma',
        'Graphic Design',
        'Landing Page Design',
        'Responsive Webdesign',
        'PSD tO HTML',
        'Google 3D Map Design',
        'Wireframing & Low-Fidelity',
      ],
       'Web-Maintenance': [
        'Fix Error',
        'Bug Fixing',
        'Performance Optimization',
        'Security Patching'
      ],
    },
    'Digital Marketing': {
    'Digital Marketing Service': [
        'App Store Optimization',
        'Content Creation & Marketing',
        'Translation Service',
        'Conversion Rate Optimization',
        'Online Reputation Management',
        'Pay Per Click(PPC)',
        'Influencer Marketing',
        'SMS Marketing',
        'Affiliate Marketing'
    ],
        'SEO Optimization': [
        'On-page Optimization',
        'Off-Page Optimization',
        'Technical Optimization',
        'Local Optimization',
        'Generative Optimization',
        'Enterprise Optimization',
        'E-commerce Optimization'
      ],
      'Social Media Marketing': [
        'Facebook Marketing',
        'Instagram Marketing',
        'Linkedin Marketing',
        'Tiktok Marketing'
      ],
      'Content Marketing': [
        'Blog Writing',
        'Video Content',
        'Info Graphics',
        'Email Marketing'
      ],
      'PPC Advertisment': [
        'Google Ads',
        'Display Advertising',
        'Retargeting',
      ],
   
    },
    'Emerging Tech': {
      'Articial Intelligence': [
        'AI Data Analytics & Insights',
        'Machine Learning',
        'Natural Language',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Automation & Workflow',
        'Voice & Speech Recognition',
        'Custom AI SaaS Application',
        'AI for E-Commerce'
      ],
      'Cyber Security': [
        'Network Security & Monitoring',
        'Penetration Testing',
        'Endpoint Security Solutions',
        'Firewall & Intrusion Prevention',
        'Data Encryption & Protection',
        'Cloud Security Services',
        'Email Security & Phishing',
        'Incident Response & Threat',
        'Identity & Access Management',
      ]
  
    },
    'Advertising': {
      'Brand Identity': [
        'Logo Design',
        'Visual Identity',
        'Brand Strategy',
        'Rebranding Services',
      ],
      'Motion Graphics': [
        '2D Animation',
        '3D Animation',
        'Explainer Video',
        'Title Sequences',
        'Visual Effects'
      ],
   
      'Video Production': [
        'Product Videos',
        'Animation Services',
        'Video Editing',
        'Live Streaming',
        'Video Marketing'
      ],
      'Graphic Design': [
        'Print Design',
        'Digital Design',
        'Packaging Design',
        'Infographic Design',
        'Presentation Design'
      ]
    },
    'SaaS': {
     'ERP': [
      'NetSuit ERP System',
      'Oracle Cloud ERP System',
      'SAP ERP System',
      'Odoo ERP System',
      'Microsoft Dynamics 365',
      'CRM'
     ]
    }
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Development')
  const [activeSubService, setActiveSubService] = useState('Web Development')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (megaMenuData[activeTab]) {
      setActiveSubService(Object.keys(megaMenuData[activeTab])[0])
    }
  }, [activeTab])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMegaMenuEnter = () => {
    setIsMegaMenuOpen(true)
  }

  const handleMegaMenuLeave = () => {
    setIsMegaMenuOpen(false)
    if (megaMenuData[activeTab]) {
      setActiveSubService(Object.keys(megaMenuData[activeTab])[0])
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top custom-navbar mt-3 p-3 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          {/* Brand/Logo */}
          <Link className="navbar-brand custom-logo" href="/">
            <img src='./logo.png' alt="" />
          </Link>

          {/* Mobile Toggler */}
          <button
            className="custom-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="custom-toggler-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
          </button>

          {/* Bootstrap Collapsible Content */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            {/* Navigation Links - Centered */}
            <ul className="navbar-nav custom-nav-links">
              <li 
                className="nav-item mega-menu-item"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <Link className="nav-link custom-nav-link" href="/service">
                  Services
                  <svg className="dropdown-arrow ms-1" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Mega Menu Dropdown */}
                <div 
                  className="mega-menu-dropdown"
                  onMouseEnter={handleMegaMenuEnter}
                  onMouseLeave={handleMegaMenuLeave}
                >
                    {/* Top Tabs */}
                  <div className="mega-menu-top-tabs">
                        {Object.keys(megaMenuData).map((tab) => (
                          <button
                            key={tab}
                            className={`mega-menu-top-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => {
                              setActiveTab(tab)
                              if (megaMenuData[tab]) {
                                setActiveSubService(Object.keys(megaMenuData[tab])[0])
                              }
                            }}
                            onMouseEnter={() => {
                              setActiveTab(tab)
                              if (megaMenuData[tab]) {
                                setActiveSubService(Object.keys(megaMenuData[tab])[0])
                              }
                            }}
                          >
                            <span className="tab-icon">●</span>
                            {tab}
                          </button>
                        ))}
                      </div>
                    <div className="container-fluid custom-container">
                      
                      {/* Content Below */}
                      <div className="row mt-4">
                        {/* Left Column - Main Services */}
                        <div className="col-4">
                          <div className="mega-menu-services">
                            {megaMenuData[activeTab] && Object.keys(megaMenuData[activeTab]).map((service) => (
                              <div
                                key={service}
                                className={`mega-menu-service-link ${activeSubService === service ? 'active' : ''}`}
                                onMouseEnter={() => setActiveSubService(service)}
                              >
                                <Link href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {service}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Middle Column - Sub Services */}
                        <div className="col-8">
                          {activeSubService && megaMenuData[activeTab] && megaMenuData[activeTab][activeSubService] && (
                            <div className="mega-menu-sub-services">
                              <div className="sub-services-list">
                                {megaMenuData[activeTab][activeSubService].map((subService, index) => (
                                  <Link
                                    key={index}
                                    href={`/services/${activeSubService.toLowerCase().replace(/\s+/g, '-')}/${subService.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="sub-service-link"
                                  >
                                    {subService}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" href="/our-work">Our Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" href="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* CTA Buttons - Hide on mobile, show on desktop */}
          <div className="d-none d-lg-flex custom-cta-buttons">
            <button className="exprtbtn me-3">
              Speak to an expert
            </button>

            {/* Show these icons only when NOT scrolled */}
            {!isScrolled && (
              <>
                <button className="icon-btn me-2">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="icon-btn">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Custom Mobile Menu Sidebar */}
      <div className={`mobile-menu-sidebar d-lg-none ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header d-flex justify-content-between align-items-center mb-5">
            <div className="custom-logo">
              <img src='./logo.png' alt="" />
            </div>
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu-links">
            <Link href="/service" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Services</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/work" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Our Work</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>About</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>
              <span>Blog</span>
              <svg className="mobile-nav-arrow" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="mobile-menu-cta">
            <Link className="mobile-speak-expert-btn" onClick={toggleMobileMenu} href='/contact-us'>
              Speak to an expert
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay d-lg-none" onClick={toggleMobileMenu}></div>
      )}
    </>
  )
}

export default Navbar