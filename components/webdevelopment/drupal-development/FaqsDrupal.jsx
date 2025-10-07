import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsdrupal from '/public/data/faqsdrupal.json';
const FaqsDrupal = () => {
  return (
      <div>

    <FAQSection
        faqData={faqsdrupal} 
        title="Laravel"
      />
    </div>
  )
}

export default FaqsDrupal