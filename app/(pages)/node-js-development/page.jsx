
import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsNodeJs from '@/components/webdevelopment/nodejs-development/faqsnodejs'
import GameChangeNodeJs from '@/components/webdevelopment/nodejs-development/GameChangerNodeJs'
import HeroNodeJs from '@/components/webdevelopment/nodejs-development/HeroNodeJs'
import HowWeWorkNodeJs from '@/components/webdevelopment/nodejs-development/HowWeWorkNodeJs'
import NodeJsServices from '@/components/webdevelopment/nodejs-development/NodeJsServices'
import QuickSupportNodeJs from '@/components/webdevelopment/nodejs-development/QuickSupportBanner'
import WhyChooseNodeJs from '@/components/webdevelopment/nodejs-development/WhyChooseNodejs'
import React from 'react'
export const metadata = {
  title: "Node Js Development | FAJ IT SOLUTIONS",
  description: "Node Js Development faj IT solutions",
  alternates: {
    canonical: "/node-js-development",
  },
  openGraph: {
    title: "Node Js Development | FAJ IT SOLUTIONS",
    description:
      "Node Js Development faj IT solutions",
    url: "/node-js-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Node Js Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Node Js Development | FAJ IT SOLUTIONS",
    description:
      "Node Js Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Mobile Applications"
      description="Bring your ideas to life with our end-to-end mobile app development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroNodeJs />
      <NodeJsServices />
      <HowWeWorkNodeJs />
      <WhyChooseNodeJs />
      <QuickSupportNodeJs />
      <GameChangeNodeJs />
      <FaqsNodeJs />
    </div>
  )
}

export default page
