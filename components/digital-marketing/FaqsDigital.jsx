import FAQSection from '@/components/FAQSection'
import digitalfaqs from '/public/data/digitalfaqs';
import React from 'react'

const FaqsDigital = () => {
  return (
    <div>

<FAQSection
        faqData={digitalfaqs} 
        title="Digital Marketing FAQs"
      />
    </div>
  )
}

export default FaqsDigital