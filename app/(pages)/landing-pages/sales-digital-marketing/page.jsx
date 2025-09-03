
import BusinessGrowthSection from '@/components/landing-pages/BusinessGrowthSection'
import ContactForm from '@/components/landing-pages/ContactForm'
import CtaDigitalSales from '@/components/landing-pages/ctadigitalsales'
import DigitalSkillsSection from '@/components/landing-pages/DigitalSkillsSection'
import GrowthSection from '@/components/landing-pages/GrowthSection'
import MarketingSection from '@/components/landing-pages/MarketingSection'
import QuestionSection from '@/components/landing-pages/QuestionSection'
import SuccessPath from '@/components/landing-pages/SuccessPath'
import React from 'react'

const page = () => {
  return (
    <div>
        <DigitalSkillsSection />
        <BusinessGrowthSection />
        <MarketingSection />
        <GrowthSection />
        <SuccessPath />
        <ContactForm />
        <QuestionSection />
        <CtaDigitalSales />
    </div>
  )
}

export default page
