import HeroServiceDetail from '@/components/HeroServiceDetail'
import SearchEvolving from '@/components/seooptimization/SearchEvolving'
import SEOServices from '@/components/seooptimization/SEOServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
       title="Building Scalable & User-Friendly Mobile Applications"
        description="Bring your ideas to life with our end-to-end mobile app development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <SEOServices />
      <SearchEvolving />
    </div>
  )
}

export default page
