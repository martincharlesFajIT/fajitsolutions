// components/FAQSection.js
import FAQSection from '@/components/FAQSection'
import faqscybersecurity from '/public/data/faqscybersecurity.json';

const CyberFAQs = () => {
   return (
    <div>
<FAQSection
        faqData={faqscybersecurity} 
        title="Cyber Security"
      />
    </div>
  )
};

export default CyberFAQs;