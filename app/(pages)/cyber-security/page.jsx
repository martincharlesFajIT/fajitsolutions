"use client"

import CTASection from '@/components/cyber-security/CTASection'
import CyberFAQs from '@/components/cyber-security/CyberFAQs'
import CyberSecurityHire from '@/components/cyber-security/CyberSecurityHire'
import CyberSecurityProcess from '@/components/cyber-security/CyberSecurityProcess'
import CybersecurityServices from '@/components/cyber-security/CybersecurityServices'
import CyberThreats from '@/components/cyber-security/CyberThreats'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import LetterGlitch from '@/components/LetterGlich'
import React from 'react'
export const metadata = {
  title: "Cyber Security | FAJ IT SOLUTIONS",
  description: "Cyber Security faj IT solutions",
  alternates: {
    canonical: "/cyber-security",
  },
  openGraph: {
    title: "Cyber Security | FAJ IT SOLUTIONS",
    description:
      "Cyber Security faj IT solutions",
    url: "/cyber-security",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security | FAJ IT SOLUTIONS",
    description:
      "Cyber Security faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Cyber Security"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <CybersecurityServices />
      <LetterGlitch
        title="Cyber Security"
        description="Protecting your data with next-gen security solutions."
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <CyberThreats />
      <CTASection />
      <CyberSecurityProcess />
      <CyberSecurityHire />
      <CyberFAQs />

    </div>
  )
}

export default page
