
import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsNodeJs from '@/components/webdevelopment/nodejs-development/faqsnodejs'
import GameChangeNodeJs from '@/components/webdevelopment/nodejs-development/GameChangerNodeJs'
import HeroNodeJs from '@/components/webdevelopment/nodejs-development/HeroNodeJs'
import HowWeWorkNodeJs from '@/components/webdevelopment/nodejs-development/HowWeWorkNodeJs'
import NodeJsServices from '@/components/webdevelopment/nodejs-development/NodeJsServices'
import QuickSupportNodeJs from '@/components/webdevelopment/nodejs-development/QuickSupportBanner'
import WhyChooseNodeJs from '@/components/webdevelopment/nodejs-development/WhyChooseNodejs'
import React from 'react'

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
