"use client"
import HeroServiceDetail from '@/components/HeroServiceDetail'
import OurWork from '@/components/ourwork/OurWork'
import React from 'react'
export const metadata = {
  title: "Our Work | FAJ IT SOLUTIONS",
  description: "Our Work faj IT solutions",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | FAJ IT SOLUTIONS",
    description:
      "Our Work faj IT solutions",
    url: "/our-work",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | FAJ IT SOLUTIONS",
    description:
      "Our Work faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
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
