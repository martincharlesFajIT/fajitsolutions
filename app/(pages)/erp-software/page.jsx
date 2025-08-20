import ERPCapabilities from '@/components/erp/ERPCapabilities'
import ERPRoadmap from '@/components/erp/ERPRoadmap'
import ERPServices from '@/components/erp/ERPServices'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroServiceDetail 
        title="ERP Software: Where Dreams Become Reality"
        description="Faj IT Solutions is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."
        />
        <ERPServices />
        <ERPRoadmap />
        <ERPCapabilities />
    </div>
  )
}

export default page
