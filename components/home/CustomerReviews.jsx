"use client"
import React, { useState, useEffect } from 'react';
import './css/CustomerReviews.css';

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.reviews-section');
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

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex.length]);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart",
      rating: 5,
      review: "The team delivered an exceptional web application that exceeded our expectations. Their expertise in React and Node.js helped us scale our platform to handle millions of users.",
      image: "SJ",
      project: "SaaS Platform Development",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder & CEO, DataFlow",
      company: "DataFlow",
      rating: 5,
      review: "Outstanding mobile app development! They transformed our vision into a seamless cross-platform application. The UI/UX design is intuitive and our users love it.",
      image: "MC",
      project: "Mobile App Development",
      tags: ["Flutter", "Firebase", "UI/UX"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Director of IT, GlobalRetail",
      company: "GlobalRetail",
      rating: 5,
      review: "Their e-commerce solution revolutionized our online presence. Sales increased by 150% within the first quarter. The integration with our existing systems was flawless.",
      image: "ER",
      project: "E-commerce Platform",
      tags: ["Shopify", "Integration", "Analytics"]
    },
    {
      id: 4,
      name: "David Kim",
      position: "VP Engineering, CloudTech",
      company: "CloudTech",
      rating: 5,
      review: "Incredible DevOps expertise! They modernized our infrastructure, implemented CI/CD pipelines, and reduced our deployment time by 80%. True professionals.",
      image: "DK",
      project: "Cloud Infrastructure",
      tags: ["DevOps", "Kubernetes", "CI/CD"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Product Manager, FinanceHub",
      company: "FinanceHub",
      rating: 5,
      review: "The blockchain solution they developed is secure, scalable, and innovative. They guided us through the entire process and delivered on time and within budget.",
      image: "LT",
      project: "Blockchain Development",
      tags: ["Blockchain", "Smart Contracts", "Security"]
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      position: "CEO, SmartHome Solutions",
      company: "SmartHome",
      rating: 5,
      review: "Their IoT expertise is unmatched. They developed a complete smart home ecosystem that seamlessly connects all our devices. Customer satisfaction has skyrocketed!",
      image: "AH",
      project: "IoT Platform",
      tags: ["IoT", "Real-time", "Mobile"]
    }
  ];

  return (
    <section className={`reviews-section ${isMobile ? 'mobile' : ''}`}>
      <div className="bg-elements">
        <div className="grid-pattern"></div>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>

      <div className="reviews-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="what-we-do-badge text-white">
            <span className="purple-dot"></span>
            Client Success Stories
          </div>
          <h2 className="reviews-title">
            Trusted by Leading&nbsp;
            <span className="reviews-highlight">
              Companies Worldwide
            </span>
          </h2>

          <p className="reviews-subtitle">
            See what our clients say about their transformation journey with us
          </p>
        </div>

        <div className="stats-grid">
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Tech Experts' },
            { number: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`stat-item ${isVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="reviews-slider">
          <div className="review-card">
            <div className="review-pattern"></div>

            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`review-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div className={`review-content ${isMobile ? 'mobile' : ''}`}>
                  {/* Client Info */}
                  <div className="client-info">
                    <div className="client-avatar">
                      {review.image}
                    </div>

                    <h4 className="client-name">{review.name}</h4>
                    <p className="client-position">{review.position}</p>
                    <p className="client-company">{review.company}</p>
                  </div>

                  <div className="review-details">
                    {/* Rating Stars */}
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>

                    <p className="review-text">
                      "{review.review}"
                    </p>

                    <div className="project-info">
                      <span className="project-label">Project:</span>
                      <span className="project-name">{review.project}</span>
                    </div>

                    <div className="review-tags">
                      {review.tags.map((tag, i) => (
                        <span key={i} className="review-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className={`trusted-companies ${isVisible ? 'animate-in' : ''}`}>
          <p className="trusted-label">Trusted by industry leaders</p>

          <div className="companies-list">
            {['TechStart', 'DataFlow', 'GlobalRetail', 'CloudTech', 'FinanceHub', 'SmartHome'].map((company, i) => (
              <div key={i} className="company-name">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;