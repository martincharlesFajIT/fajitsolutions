import HeroServiceDetail from '@/components/HeroServiceDetail'
import ScrollStack, { ScrollStackItem } from '@/components/InfinityScroll'
import AspFaqsmvc from '@/components/webdevelopment/asp-dot-net-mvc/AspFaqsmvc'
import AspIndustry from '@/components/webdevelopment/asp-dot-net-mvc/AspIndustry'
import AspNetMap from '@/components/webdevelopment/asp-dot-net-mvc/AspNetMap'
import AspNetServiceIncluded from '@/components/webdevelopment/asp-dot-net-mvc/AspNetServiceIncluded'
import AspNetSeviceCta from '@/components/webdevelopment/asp-dot-net-mvc/AspNetSeviceCTA'
import AspOurCoreServices from '@/components/webdevelopment/asp-dot-net-mvc/AspOurCoreServcies'
import GetInTouchForm from '@/components/webdevelopment/asp-dot-net-mvc/GetInTouchForm'
import WhyChooseFajit from '@/components/webdevelopment/asp-dot-net-mvc/WhyChooseFajit'
import React from 'react'
const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Asp.Net (MVC)"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <AspNetServiceIncluded />
      <AspNetSeviceCta />
      <AspOurCoreServices />
      <WhyChooseFajit />
      <AspIndustry />
      <AspNetMap />
      <GetInTouchForm />
      <AspFaqsmvc />
      
    </div>
  )
}

export default page
