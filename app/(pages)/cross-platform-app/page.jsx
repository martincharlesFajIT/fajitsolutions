import React from 'react'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import CrossPartner from '@/components/mobileapplication/crossapp/CrossPartner'
import CrossServices from '@/components/mobileapplication/crossapp/CrossServcie'
import CrossBannerCta from '@/components/mobileapplication/crossapp/CrossBanner'
import CrossExpertise from '@/components/mobileapplication/crossapp/CrossExpertise'
import CrossBenefit from '@/components/mobileapplication/crossapp/CrossBenefit'
import FaqsCross from '@/components/mobileapplication/crossapp/CrossFaqs'
export const metadata = {
  title: "Cross Platform App | FAJ IT SOLUTIONS",
  description: "Cross Platform App faj IT solutions",
  alternates: {
    canonical: "/cross-platform-app",
  },
  openGraph: {
    title: "Cross Platform App | FAJ IT SOLUTIONS",
    description:
      "Cross Platform App faj IT solutions",
    url: "/cross-platform-app",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cross Platform App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross Platform App | FAJ IT SOLUTIONS",
    description:
      "Cross Platform App faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
        <HeroServiceDetail 
        title="Building Scalable & User-Friendly Cross-Platform App Development"
        description="Bring your ideas to life with our end-to-end Cross-Platform App Development service. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <CrossPartner />
        <CrossServices />
        <CrossBannerCta />
        <CrossExpertise />
        <CrossBenefit />
        <FaqsCross />
    </div>
  )
}

export default page