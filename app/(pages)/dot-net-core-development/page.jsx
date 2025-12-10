import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsDotNetCore from '@/components/webdevelopment/net-core-development/FaqsDotNetCore'
import GameChangeNetCore from '@/components/webdevelopment/net-core-development/GameChangerNetCore'
import HeroNetCore from '@/components/webdevelopment/net-core-development/HeroNetCore'
import NetCoreServices from '@/components/webdevelopment/net-core-development/NetCoreServices'
import QuickSupportCoreNet from '@/components/webdevelopment/net-core-development/QuickSupportBanner'
import WhyChooseDotNet from '@/components/webdevelopment/net-core-development/WhyChooseDotNet'
import React from 'react'
export const metadata = {
  title: ".Net Core Development | FAJ IT SOLUTIONS",
  description: ".Net Core Development faj IT solutions",
  alternates: {
    canonical: "/dot-net-core-development",
  },
  openGraph: {
    title: ".Net Core Development | FAJ IT SOLUTIONS",
    description:
      ".Net Core Development faj IT solutions",
    url: "/dot-net-core-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: ".Net Core Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ".Net Core Development | FAJ IT SOLUTIONS",
    description:
      ".Net Core Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & .Net Core Development"
      description="Bring your ideas to life with our end-to-end .Net Core Development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroNetCore />
      <NetCoreServices />
      <WhyChooseDotNet />
      <QuickSupportCoreNet />
      <GameChangeNetCore />
      <FaqsDotNetCore />
    </div>
  )
}

export default page
