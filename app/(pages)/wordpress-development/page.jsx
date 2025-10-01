import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsWordpress from '@/components/webdevelopment/wordpress-development/FaqsWordpress'
import GameChangeWordpress from '@/components/webdevelopment/wordpress-development/GameChangeWordpress'
import QuickSupportWordpress from '@/components/webdevelopment/wordpress-development/QuickSupportWordpress'
import WhyChooseWordpress from '@/components/webdevelopment/wordpress-development/WhyChooseWordpress'
import WordpressServices from '@/components/webdevelopment/wordpress-development/WordpressService'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Smart, Scalable and SEO-Friendly Wordpress Development Services"
      description="Our expert Wordpress development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <WordpressServices />
      <GameChangeWordpress />
      <QuickSupportWordpress />
      <WhyChooseWordpress />
      <FaqsWordpress />

    </div>
  )
}

export default page
