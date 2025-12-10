import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsPhp from '@/components/webdevelopment/php-development/FaqsPhp'
import GameChangePhp from '@/components/webdevelopment/php-development/GameChangePhp'
import HeroPhp from '@/components/webdevelopment/php-development/HeroPhp'
import HowWeWorkPhp from '@/components/webdevelopment/php-development/HowWeWorkPhp'
import PhpServices from '@/components/webdevelopment/php-development/PhpServices'
import QuickSupportPhp from '@/components/webdevelopment/php-development/QuickSupportPhp'
import WhyChoosePhp from '@/components/webdevelopment/php-development/WhyChoosePhp'
import React from 'react'
export const metadata = {
  title: "Php Development | FAJ IT SOLUTIONS",
  description: "Php Development faj IT solutions",
  alternates: {
    canonical: "/php-development",
  },
  openGraph: {
    title: "Php Development | FAJ IT SOLUTIONS",
    description:
      "Php Development faj IT solutions",
    url: "/php-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Php Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Php Development | FAJ IT SOLUTIONS",
    description:
      "Php Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Smart, Scalable and SEO-Friendly PHP Development Services"
        description="Our expert PHP development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <HeroPhp />
      <PhpServices />
      <HowWeWorkPhp />
      <WhyChoosePhp />
      <QuickSupportPhp/>
      <GameChangePhp />
      <FaqsPhp />
    </div>
  )
}

export default page
