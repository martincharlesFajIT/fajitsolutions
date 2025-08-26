// components/FAQSection.js
"use client";
import React, { useState } from 'react';
import './css/FaqsDigital.css'


const FaqsDigital = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is digital marketing?",
      answer: "Digital marketing uses modern online platforms to build brand visibility, engage the right audience, and drive measurable business growth. From social media to websites and beyond, it connects businesses with customers where they spend most of their time online"
    },
    {
      question: "Would my business benefit from digital marketing?",
      answer: "Digital marketing can benefit virtually any business looking to expand their reach, attract new customers, and increase revenue. Whether you're a local business, e-commerce store, or service provider, digital marketing strategies can be tailored to your specific goals and target audience."
    },
    {
      question: "How can I identify a successful digital marketing company?",
      answer: "Look for a company with proven results, transparent reporting, and clear case studies. A successful digital marketing company should have expertise across multiple channels, provide regular performance updates, and demonstrate measurable ROI for their clients."
    },
    {
      question: "What are the key metrics to measure digital marketing success?",
      answer: "Key metrics include website traffic, conversion rates, cost per acquisition (CPA), return on investment (ROI), engagement rates, click-through rates (CTR), and lead generation numbers. The specific metrics depend on your business goals and chosen marketing channels."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div>
            <h2>FAQs</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`faq-arrow ${openFAQ === index ? 'open' : ''}`}
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              
              <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
              
              <div className="faq-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsDigital;