
import BusinessGrowthSection from '@/components/landing-pages/BusinessGrowthSection'
import ContactForm from '@/components/landing-pages/ContactForm'
import CtaDigitalSales from '@/components/landing-pages/ctadigitalsales'
import DigitalSkillsSection from '@/components/landing-pages/DigitalSkillsSection'
import GrowthSection from '@/components/landing-pages/GrowthSection'
import LandingFooter from '@/components/landing-pages/LandingFooter'
import MarketingSection from '@/components/landing-pages/MarketingSection'
import QuestionSection from '@/components/landing-pages/QuestionSection'
import SuccessPath from '@/components/landing-pages/SuccessPath'
import React from 'react'
export const metadata = {
  title: "Sales Digital Marketing | FAJ IT SOLUTIONS",
  description: "Sales Digital Marketing faj IT solutions",
  alternates: {
    canonical: "/landing-pages/sales-digital-marketing",
  },
  openGraph: {
    title: "Sales Digital Marketing | FAJ IT SOLUTIONS",
    description:
      "Sales Digital Marketing faj IT solutions",
    url: "/landing-pages/sales-digital-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sales Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Digital Marketing | FAJ IT SOLUTIONS",
    description:
      "Sales Digital Marketing faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
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
        <LandingFooter />
    </div>
  )
}

export default page
