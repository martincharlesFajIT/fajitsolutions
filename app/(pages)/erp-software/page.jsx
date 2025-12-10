import ERPCapabilities from '@/components/erp/ERPCapabilities'
import ERPRoadmap from '@/components/erp/ERPRoadmap'
import ERPServices from '@/components/erp/ERPServices'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "ERP Software | FAJ IT SOLUTIONS",
  description: "ERP Software faj IT solutions",
  alternates: {
    canonical: "/erp-software",
  },
  openGraph: {
    title: "ERP Software | FAJ IT SOLUTIONS",
    description:
      "ERP Software faj IT solutions",
    url: "/erp-software",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ERP Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software | FAJ IT SOLUTIONS",
    description:
      "ERP Software faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
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
