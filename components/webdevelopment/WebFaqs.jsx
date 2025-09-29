import React from 'react'
import FAQSection from '@/components/FAQSection'
import faqsweb from '/public/data/faqsweb.json';
const WebFaqs = () => {
  return (
     <div>

<FAQSection
        faqData={faqsweb} 
        title="Web/Software Development"
      />
    </div>
  )
}

export default WebFaqs