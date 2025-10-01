import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqscms from '/public/data/faqscms.json';

const FaqsCms = () => {
  return (
    <div>

    <FAQSection
        faqData={faqscms} 
        title="Django"
      />
    </div>
  )
}

export default FaqsCms