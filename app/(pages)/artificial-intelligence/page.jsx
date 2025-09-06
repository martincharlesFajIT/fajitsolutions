import AiDigitalSolution from '@/components/emerging-tech/artificial-intelligency/AiDigitalSolution'
import AiOurValue from '@/components/emerging-tech/artificial-intelligency/AiOurValue'
import BusinessGoal from '@/components/emerging-tech/artificial-intelligency/BusinessGoal'
import ValuesPromise from '@/components/emerging-tech/artificial-intelligency/ValuesPromise'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const Page = () => {
  return (
    <div>
        <HeroServiceDetail 
        title="Artificial Intelligence"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <AiDigitalSolution />
        <AiOurValue />
        <BusinessGoal />
        <ValuesPromise />
    </div>
  )
}

export default Page