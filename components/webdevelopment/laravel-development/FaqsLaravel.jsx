import FAQSection from '@/components/FAQSection'
import faqslaravel from '/public/data/faqsLaravel.json';
import React from 'react'

const FaqsLaravel = () => {
  return (
    <div>

<FAQSection
        faqData={faqslaravel} 
        title="Laravel"
      />
    </div>
  )
}

export default FaqsLaravel
