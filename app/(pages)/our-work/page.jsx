"use client"
import HeroServiceDetail from '@/components/HeroServiceDetail'
import OurWork from '@/components/ourwork/OurWork'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
        title="Passion-Fueled Innovation: Where Dreams Become Reality"
        description="Faj IT Solutions is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."
      />
      <OurWork />
    </div>
  )
}

export default page
