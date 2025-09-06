import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqslaravel from '/public/data/faqsLaravel.json';
const EcomFAQs = () => {
  return (
    <div>
        <FAQSection
        faqData={faqslaravel} 
        title="Laravel FAQs"
      />
    </div>
  )
}

export default EcomFAQs