"use client"
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './css/SeoFAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is SEO?",
      answer: "Search Engine Optimization (SEO) is the practice of improving your website to increase its visibility in search engine results. It involves optimizing content, technical setup, and link popularity to help search engines understand and rank your pages higher."
    },
    {
      question: "How does SEO work?",
      answer: "SEO works by optimizing your website for search engine algorithms. Search engines crawl websites to understand the content, then rank them based on factors including relevance, content quality, user experience, and authority."
    },
    {
      question: "Do I need different SEO strategies for different search engines?",
      answer: "While core SEO principles apply across all search engines, you may need slight adjustments for different platforms like Bing or YouTube if they're important to your business."
    },
    {
      question: "How much does SEO cost?",
      answer: "SEO costs vary based on your business size and competition. Small businesses might spend $500-$2,000/month, while competitive industries may invest $5,000-$20,000+/month."
    },
    {
      question: "Can I do SEO myself?",
      answer: "Yes, you can handle basic SEO yourself, but professional SEO requires specialized knowledge. Many businesses combine DIY efforts with professional consulting for best results."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about SEO</p>
        
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              <div 
                className="faq-answer-container"
                aria-hidden={activeIndex !== index}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;