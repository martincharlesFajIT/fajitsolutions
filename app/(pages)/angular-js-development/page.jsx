import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import AngularServices from '@/components/webdevelopment/angularjs-development/AngularService'
import FaqsAngular from '@/components/webdevelopment/angularjs-development/FaqsAngular'
import GameChangeAngular from '@/components/webdevelopment/angularjs-development/GameChangeAngular'
import HeroAngular from '@/components/webdevelopment/angularjs-development/HeroAngular'
import IndustryAngular from '@/components/webdevelopment/angularjs-development/IndustryAngular'
import QuickSupportAngular from '@/components/webdevelopment/angularjs-development/QuickSupportAngular'
import WhyChooseAngular from '@/components/webdevelopment/angularjs-development/WhyChooseAngular'
import React from 'react'

export const metadata = {
  title: "Angular Js Development | FAJ IT SOLUTIONS",
  description: "Angular Js Development faj IT solutions",
  alternates: {
    canonical: "/angular-js-development",
  },
  openGraph: {
    title: "Angular Js Development | FAJ IT SOLUTIONS",
    description:
      "Angular Js Development faj IT solutions",
    url: "/angular-js-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angular Js Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angular Js Development | FAJ IT SOLUTIONS",
    description:
      "Angular Js Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Smart, Scalable and SEO-Friendly Angular Js Development Services"
      description="Our expert Angular Js development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <HeroAngular />
      <AngularServices />
      <WhyChooseAngular />
      <QuickSupportAngular />
      <GameChangeAngular />
      <IndustryAngular />
      <FaqsAngular />
    </div>
  )
}

export default page
