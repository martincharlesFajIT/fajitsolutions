import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsMG from '/public/data/faqsMG.json';
const FAQsMG = () => {
  return (
    <div>
      <FAQSection
        faqData={faqsMG} 
        title="Laravel FAQs"
      />
    </div>
  )
}

export default FAQsMG
