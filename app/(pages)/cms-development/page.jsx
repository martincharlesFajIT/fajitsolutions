import HeroServiceDetail from '@/components/HeroServiceDetail'
import CmsService from '@/components/webdevelopment/cms-development/CmsServices'
import FaqsCms from '@/components/webdevelopment/cms-development/FaqsCms'
import GameChangeCms from '@/components/webdevelopment/cms-development/GameChangeCms'
import HeroCms from '@/components/webdevelopment/cms-development/HeroCms'
import QuickSupportBanner from '@/components/webdevelopment/cms-development/QuickSupportBanner'
import React from 'react'
export const metadata = {
  title: "CMS Development | FAJ IT SOLUTIONS",
  description: "CMS Development faj IT solutions",
  alternates: {
    canonical: "/cms-development",
  },
  openGraph: {
    title: "CMS Development | FAJ IT SOLUTIONS",
    description:
      "CMS Development faj IT solutions",
    url: "/cms-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CMS Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS Development | FAJ IT SOLUTIONS",
    description:
      "CMS Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly CMS Development"
      description="Bring your ideas to life with our end-to-end CMS Development. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroCms />
      <CmsService />
      <QuickSupportBanner />
      <GameChangeCms />
      <FaqsCms />
    </div>
  )
}

export default page
