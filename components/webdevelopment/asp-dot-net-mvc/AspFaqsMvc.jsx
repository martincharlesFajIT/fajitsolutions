import FAQSection from '@/components/FAQSection'
import React from 'react'
import faqsasp from '/public/data/faqsasp.json';
const AspFaqsmvc = () => {
  return (
    <div>

<FAQSection
        faqData={faqsasp}
        title="ASP NET MVC FAQs"
      />
    </div>
  )
}

export default AspFaqsmvc