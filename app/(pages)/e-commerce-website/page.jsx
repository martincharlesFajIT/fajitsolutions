import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
import EcomFAQs from '@/components/ecommercewebsite/EcomFAQs'
import WhychoiceEcommerce from '@/components/ecommercewebsite/WhychoiceEcommerce'
import ServicesSection from '@/components/ecommercewebsite/ServicesSection'
import HeroEcommerce from '@/components/ecommercewebsite/HeroEcommerce'
import RecentDesigns from '@/components/ecommercewebsite/RecentDesign'
import EcommerceSolutions from '@/components/ecommercewebsite/EcommerceSolutions'

export const metadata = {
  title: "Ecommerce Website | FAJ IT SOLUTIONS",
  description: "Ecommerce Website faj IT solutions",
  alternates: {
    canonical: "/artificial-intelligence",
  },
  openGraph: {
    title: "Ecommerce Website | FAJ IT SOLUTIONS",
    description:
      "Ecommerce Website faj IT solutions",
    url: "/e-commerce-website",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Website | FAJ IT SOLUTIONS",
    description:
      "Ecommerce Website faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly E-commerce Services"
      description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroEcommerce />
      <RecentDesigns />
      <EcommerceSolutions />
      <WhychoiceEcommerce />
      <ServicesSection />
      <EcomFAQs />
    </div>
  )
}

export default page
