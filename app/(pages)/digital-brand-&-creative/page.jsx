import BrandingSection from '@/components/advertising/Digital-Brand-Creative/BrandingShapes'
import CreativeObjective from '@/components/advertising/Digital-Brand-Creative/CreativeObjective'
import DbrOurProcess from '@/components/advertising/Digital-Brand-Creative/Dbr-Our-Proccess'
import DbrFaqs from '@/components/advertising/Digital-Brand-Creative/DbrFaqs'
import InnovativeBranding from '@/components/advertising/Digital-Brand-Creative/InnovativeBranding'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "Digital Brand and Creative | FAJ IT SOLUTIONS",
  description: "Digital Brand and Creative faj IT solutions",
  alternates: {
    canonical: "/digital-brand-&-creative",
  },
  openGraph: {
    title: "Digital Brand and Creative | FAJ IT SOLUTIONS",
    description:
      "Digital Brand and Creative faj IT solutions",
    url: "/digital-brand-&-creative",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Brand and Creative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Brand and Creative | FAJ IT SOLUTIONS",
    description:
      "Digital Brand and Creative faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
        title="Digital Brand & Creative"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
        <InnovativeBranding />
        <BrandingSection />
        <CreativeObjective />
        <DbrOurProcess />
        <DbrFaqs />
    </div>
  )
}

export default page