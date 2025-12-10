import HeroServiceDetail from '@/components/HeroServiceDetail';
import PartnersRecognition from '@/components/home/PartnersRecognition';
import DynamicWebsiteSection from '@/components/webdevelopment/DynamicWebsiteSection';
import FastLoadingSection from '@/components/webdevelopment/FastLoadingSection';
import TrustedBySection from '@/components/webdevelopment/TrustedBySection';
import WebFaqs from '@/components/webdevelopment/WebFaqs';
import WebProcess from '@/components/webdevelopment/WebProcess';
import WebServicesSection from '@/components/webdevelopment/WebServicesSection';
import WhyChooseSection from '@/components/webdevelopment/WhyChooseSection';
import React from 'react'

export const metadata = {
  title: "Web & Software Development | FAJ IT SOLUTIONS",
  description: "Web & Software Development",
  alternates: {
    canonical: "/web-&-software-development",
  },
  openGraph: {
    title: "Web & Software Development | FAJ IT SOLUTIONS",
    description:
      "Web & Software Development faj IT solutions",
    url: "/web-&-software-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web & Software Development ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Software Development | FAJ IT SOLUTIONS",
    description:
      "Web & Software Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Smart, Scalable and SEO-Friendly Web Development Services"
        description="Our expert web development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <WebServicesSection />
      <TrustedBySection />
      <WhyChooseSection />
      <FastLoadingSection />
      <PartnersRecognition />
      <WebProcess />
      <DynamicWebsiteSection />
      <WebFaqs />
    </div>
  )
}

export default page
