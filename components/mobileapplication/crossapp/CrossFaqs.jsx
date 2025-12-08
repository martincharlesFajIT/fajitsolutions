import React from 'react'
import FAQSection from '@/components/FAQSection'
import Crossfaqs from '/public/data/faqscross.json';
const FaqsCross = () => {
  return (
      <div>

    <FAQSection
        faqData={Crossfaqs} 
        title="React Native FAQs"
      />
    </div>
  )
}

export default FaqsCross