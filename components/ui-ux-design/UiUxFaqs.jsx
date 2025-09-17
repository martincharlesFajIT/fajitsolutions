import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsuiux from '/public/data/faqsuiux.json';
const UiUxFaqs = () => {
  return (
    <div>
      <FAQSection
        faqData={faqsuiux}
        title="UI UX Design"
      />
    </div>
  )
}

export default UiUxFaqs