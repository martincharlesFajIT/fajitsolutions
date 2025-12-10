import ContentWriting from '@/components/content-writing/ContentWriting'
import CtaSection from '@/components/content-writing/CtaSection'
import HowToWorkSection from '@/components/content-writing/HowToWorkSection'
import IntegrationSection from '@/components/content-writing/IntegrationSection'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "Content Writing | FAJ IT SOLUTIONS",
  description: "Content Writing faj IT solutions",
  alternates: {
    canonical: "/content-writing",
  },
  openGraph: {
    title: "Content Writing | FAJ IT SOLUTIONS",
    description:
      "Content Writing faj IT solutions",
    url: "/content-writing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writing | FAJ IT SOLUTIONS",
    description:
      "Content Writing faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Content Writing"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <ContentWriting />
      <IntegrationSection />
      <HowToWorkSection />
      <CtaSection />
    </div>
  )
}

export default page
