import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsphp from '/public/data/faqsphp.json';
const FaqsPhp = () => {
  return (
      <div>

    <FAQSection
        faqData={faqsphp} 
        title="PHP Development"
      />
    </div>
  )
}

export default FaqsPhp