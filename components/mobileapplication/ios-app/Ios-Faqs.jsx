import React from 'react'
import FAQSection from '@/components/FAQSection'
import Iosfaqs from '/public/data/faqsios.json';
const FaqsIos = () => {
  return (
      <div>

    <FAQSection
        faqData={Iosfaqs} 
        title="React Native FAQs"
      />
    </div>
  )
}

export default FaqsIos