import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsmobileapp from '/public/data/faqsmobileapp.json';
const MobileAppFaqs = () => {
  return (
    <div>
    <FAQSection
        faqData={faqsmobileapp} 
        title="Mobile Application FAQs"
      />
    </div>
  )
}

export default MobileAppFaqs