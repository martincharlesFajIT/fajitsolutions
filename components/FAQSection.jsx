// components/FAQSection.jsx
"use client";
import React, { useState } from 'react';
import styles from './css/faqs.module.css';

const FAQSection = ({ faqData, title = "FAQs" }) => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  if (!faqData || !Array.isArray(faqData) || faqData.length === 0) {
    return (
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div>
            <h2>{title}</h2>
          </div>
          <p>No FAQs available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`${styles.faqArrow} ${openFAQ === index ? styles.open : ''}`}
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
              <div className={`${styles.faqAnswer} ${openFAQ === index ? styles.open : ''}`}>
                <div className={styles.faqContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
              <div className={styles.faqDivider}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;