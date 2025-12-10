import AiOurProcess from '@/components/emerging-tech/artificial-intelligency/Ai-Our-Process'
import AiCoreTechnologies from '@/components/emerging-tech/artificial-intelligency/AiCoreTechnologies'
import AiDigitalSolution from '@/components/emerging-tech/artificial-intelligency/AiDigitalSolution'
import AiOurValue from '@/components/emerging-tech/artificial-intelligency/AiOurValue'
import BusinessGoal from '@/components/emerging-tech/artificial-intelligency/BusinessGoal'
import KeyBenefits from '@/components/emerging-tech/artificial-intelligency/KeyBenefits'
import ValuesPromise from '@/components/emerging-tech/artificial-intelligency/ValuesPromise'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

export const metadata = {
  title: "Artificial Intelligence | FAJ IT SOLUTIONS",
  description: "Artificial Intelligence faj IT solutions",
  alternates: {
    canonical: "/artificial-intelligence",
  },
  openGraph: {
    title: "Artificial Intelligence | FAJ IT SOLUTIONS",
    description:
      "Artificial Intelligence faj IT solutions",
    url: "/artificial-intelligence",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artificial Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence | FAJ IT SOLUTIONS",
    description:
      "Artificial Intelligence faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const Page = () => {
  return (
    <div>
        <HeroServiceDetail 
        title="Artificial Intelligence"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <AiDigitalSolution />
        <AiOurValue />
        <BusinessGoal />
        <ValuesPromise />
        <AiOurProcess />
        <KeyBenefits />
        <AiCoreTechnologies />
    </div>
  )
}

export default Page