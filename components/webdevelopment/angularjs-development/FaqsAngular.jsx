import FAQSection from '@/components/FAQSection'
import faqsAngular from '/public/data/faqsAngular.json';
import React from 'react'

const FaqsAngular = () => {
  return (
    <div>

    <FAQSection
        faqData={faqsAngular} 
        title="Angular"
      />
    </div>
  )
}

export default FaqsAngular
