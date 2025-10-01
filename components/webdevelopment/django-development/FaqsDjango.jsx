import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsdjango from '/public/data/faqsdjango.json';
const FaqsDjango = () => {
  return (
      <div>

    <FAQSection
        faqData={faqsdjango} 
        title="Laravel"
      />
    </div>
  )
}

export default FaqsDjango