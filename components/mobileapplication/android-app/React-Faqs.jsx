import React from 'react'
import FAQSection from '@/components/FAQSection'
import Reactfaqs from '/public/data/faqsreact.json';
const FaqsReact = () => {
  return (
      <div>

    <FAQSection
        faqData={Reactfaqs} 
        title="React Native FAQs"
      />
    </div>
  )
}

export default FaqsReact