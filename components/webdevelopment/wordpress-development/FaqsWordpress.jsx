import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqswordpress from '/public/data/faqswordpress.json';
const FaqsWordpress = () => {
  return (
      <div>

    <FAQSection
        faqData={faqswordpress} 
        title="Wordpress"
      />
    </div>
  )
}

export default FaqsWordpress