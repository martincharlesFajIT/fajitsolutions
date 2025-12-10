import HeroServiceDetail from '@/components/HeroServiceDetail'
import OurServices from '@/components/seooptimization/OurServices'
import SearchEvolving from '@/components/seooptimization/SearchEvolving'
import SEOServices from '@/components/seooptimization/SEOServices'
import StatsSection from '@/components/seooptimization/StatsSection'
import React from 'react'
import SeoFaqs from '@/components/seooptimization/SeoFaqs'
export const metadata = {
  title: "Seo Optimization | FAJ IT SOLUTIONS",
  description: "Seo Optimization faj IT solutions",
  alternates: {
    canonical: "/seo-optimization",
  },
  openGraph: {
    title: "Seo Optimization | FAJ IT SOLUTIONS",
    description:
      "Seo Optimization faj IT solutions",
    url: "/seo-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seo Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seo Optimization | FAJ IT SOLUTIONS",
    description:
      "Seo Optimization faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
       title="Building Scalable & User-Friendly Mobile Applications"
        description="Bring your ideas to life with our end-to-end mobile app development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <SEOServices />
      <SearchEvolving />
      <OurServices />
      <StatsSection />
      <SeoFaqs />
    </div>
  )
}

export default page
