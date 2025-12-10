import HeroServiceDetail from '@/components/HeroServiceDetail'
import BuildSuccess from '@/components/ui-ux-design/BuildSuccess'
import PotentialSection from '@/components/ui-ux-design/PotentialSection'
import ReadySection from '@/components/ui-ux-design/ReadySection'
import TechSection from '@/components/ui-ux-design/TechSection'
import TimelineSection from '@/components/ui-ux-design/TimelineSection'
import UiUxFaqs from '@/components/ui-ux-design/UiUxFaqs'
import UIUXSection from '@/components/ui-ux-design/UIUXSection'
import UniqueSection from '@/components/ui-ux-design/UniqueSection'
import React from 'react'
export const metadata = {
  title: "Ui Ux Design | FAJ IT SOLUTIONS",
  description: "Ui Ux Design faj IT solutions",
  alternates: {
    canonical: "/ui-ux-design",
  },
  openGraph: {
    title: "Ui Ux Design | FAJ IT SOLUTIONS",
    description:
      "Ui Ux Design faj IT solutions",
    url: "/ui-ux-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ui Ux Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ui Ux Design | FAJ IT SOLUTIONS",
    description:
      "Ui Ux Design faj IT solutions",
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
      <UIUXSection />
      <BuildSuccess />
      <TimelineSection />
      <UniqueSection />
      <TechSection />
      <PotentialSection />
      <ReadySection />
      <UiUxFaqs />
    </div>
  )
}

export default page
