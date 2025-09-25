import FAQSection from '@/components/FAQSection'
import React from 'react'
import faqsdotnetcore from '/public/data/faqsdotnetcore.json';
const FaqsNodeJs = () => {
  return (
     <div>

<FAQSection
        faqData={faqsdotnetcore} 
        title="Node Js"
      />
    </div>
  )
}

export default FaqsNodeJs