import SocialMediaAbout from '@/components/digital-marketing/Social-Media-Marketing/SocialMediaAbout'
import SocialStatistics from '@/components/digital-marketing/Social-Media-Marketing/SocialStatistics'
import UniqueApproach from '@/components/digital-marketing/Social-Media-Marketing/UniqueApproach'
import WhatMakesFAJDifferent from '@/components/digital-marketing/Social-Media-Marketing/WhatMakesFAJDifferent'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "Social Media Marketing | FAJ IT SOLUTIONS",
  description: "Social Media Marketing faj IT solutions",
  alternates: {
    canonical: "/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing | FAJ IT SOLUTIONS",
    description:
      "Social Media Marketing faj IT solutions",
    url: "/social-media-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing | FAJ IT SOLUTIONS",
    description:
      "Social Media Marketing faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly UI/UX Design Services"
      description="Bring your ideas to life with our end-to-end UI/UX Design services. Figma Design, Wireframing, and Prototyping. We build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <SocialMediaAbout />
      <SocialStatistics />
      <WhatMakesFAJDifferent />
      <UniqueApproach />
    </div>
  )
}

export default page
