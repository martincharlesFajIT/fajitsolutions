import React from 'react';
import './css/Sales-Digital-Marketing.css';

import { FaArrowRight } from 'react-icons/fa'; 

const QuestionSection = () => {
  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2 className="faq-main-title">Your Questions, <br /> Answered</h2>
        <p className="faq-sub-text">Request Your Free Digital Marketing Strategy Guide <br /> from The FAJ IT Solutions</p>
        <div className="faq-arrow-icon-wrapper">
          <FaArrowRight className="faq-arrow-icon" />
        </div>
      </div>
      <div className="faq-right">
        <div className="faq-item">
          <p className="faq-question">Are your digital marketing campaigns customizable for different business sizes?</p>
          <p className="faq-answer">Yes, we tailor strategies to fit startups, small businesses, and enterprises alike.</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">Will I get ongoing support during the campaign?</p>
          <p className="faq-answer">Absolutely! Our team provides continuous campaign monitoring, optimization, and detailed reporting.</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">Can I see results before committing to a long-term contract?</p>
          <p className="faq-answer">Yes! Request your free marketing audit and initial campaign plan to preview what we can do for you.</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;