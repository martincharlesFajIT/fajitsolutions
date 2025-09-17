import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsseo from '/public/data/faqsseo.json';
const SeoFaqs = () => {
  return (
    <div>

  <FAQSection
        faqData={faqsseo} 
        title="SEO Faqs"
      />
    </div>
  )
}

export default SeoFaqs