import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import DrupalService from '@/components/webdevelopment/drupal-development/DrupalServices'
import FaqsDrupal from '@/components/webdevelopment/drupal-development/FaqsDrupal'
import GameChangeDrupal from '@/components/webdevelopment/drupal-development/GameChangeDrupal'
import HeroDrupal from '@/components/webdevelopment/drupal-development/HeroDrupal'
import IndustryDrupal from '@/components/webdevelopment/drupal-development/IndustryDrupal'
import QuickSupportDrupal from '@/components/webdevelopment/drupal-development/QuickSupportBanner'
import WhyChooseDrupal from '@/components/webdevelopment/drupal-development/WhyChooseDrupal'
import React from 'react'
export const metadata = {
  title: "Drupal Development | FAJ IT SOLUTIONS",
  description: "Drupal Development faj IT solutions",
  alternates: {
    canonical: "/drupal-development",
  },
  openGraph: {
    title: "Drupal Development | FAJ IT SOLUTIONS",
    description:
      "Drupal Development faj IT solutions",
    url: "/drupal-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drupal Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drupal Development | FAJ IT SOLUTIONS",
    description:
      "Drupal Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Drupal Application"
      description="Bring your ideas to life with our end-to-end Drupal Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroDrupal />
      <DrupalService />
      <WhyChooseDrupal />
      <GameChangeDrupal />
      <QuickSupportDrupal />
      <IndustryDrupal />
      <FaqsDrupal />
    </div>
  )
}

export default page
