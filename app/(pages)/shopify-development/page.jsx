import HeroServiceDetail from '@/components/HeroServiceDetail'
import ShopifyExpert from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Expert'
import ShopifyIndustriesExpertise from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Industry-Expert'
import ShopifyPartner from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Partner'
import ShopifyWhyChoose from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Why-Choose'
import ShopifyFAQs from '@/components/ecommercewebsite/ShopifyDevelopment/ShopifyFAQs'
import React from 'react'
export const metadata = {
  title: "Shopify Development | FAJ IT SOLUTIONS",
  description: "Shopify Development faj IT solutions",
  alternates: {
    canonical: "/shopify-development",
  },
  openGraph: {
    title: "Shopify Development | FAJ IT SOLUTIONS",
    description:
      "Shopify Development faj IT solutions",
    url: "/shopify-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development | FAJ IT SOLUTIONS",
    description:
      "Shopify Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Shopify E-commerce Services"
      description="Bring your ideas to life with our end-to-end Shopify E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <ShopifyPartner />
      <ShopifyWhyChoose />
      <ShopifyIndustriesExpertise />
      <ShopifyExpert />
      <ShopifyFAQs />
    </div>
  )
}

export default page