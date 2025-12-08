import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsshopify from '/public/data/faqsshopify.json';
const ShopifyFAQs = () => {
  return (
    <div>
        <FAQSection
        faqData={faqsshopify}
        title="Laravel FAQs"
      />
    </div>
  )
}

export default ShopifyFAQs