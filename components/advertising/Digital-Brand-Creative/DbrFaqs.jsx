import FAQSection from '@/components/FAQSection'
import DbrFaqss from '/public/data/DbrFaqss';
import React from 'react'

const DbrFaqs = () => {
  return (
    <div>

<FAQSection
        faqData={DbrFaqss} 
        title="Digital Marketing FAQs"
      />
    </div>
  )
}

export default DbrFaqs