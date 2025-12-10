import AboutDigital from '@/components/digital-marketing/AboutDigital'
import FaqsDigital from '@/components/digital-marketing/FaqsDigital'
import OurApproach from '@/components/digital-marketing/OurApproach'
import WorkflowSection from '@/components/digital-marketing/WorkflowSection'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "Digital Marketing Service | FAJ IT SOLUTIONS",
  description: "Digital Marketing Service faj IT solutions",
  alternates: {
    canonical: "/digital-marketing-service",
  },
  openGraph: {
    title: "Digital Marketing Service | FAJ IT SOLUTIONS",
    description:
      "Digital Marketing Service faj IT solutions",
    url: "/digital-marketing-service",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Service | FAJ IT SOLUTIONS",
    description:
      "Digital Marketing Service faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
        <HeroServiceDetail
        title="Digital Marketing"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <AboutDigital />
        <OurApproach />
        <WorkflowSection />
        <FaqsDigital />
        
    </div>
  )
}

export default page
