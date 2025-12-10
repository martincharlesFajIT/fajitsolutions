import HeroServiceDetail from '@/components/HeroServiceDetail'
import DjangoService from '@/components/webdevelopment/django-development/DjangoService'
import FaqsDjango from '@/components/webdevelopment/django-development/FaqsDjango'
import GameChangeDjango from '@/components/webdevelopment/django-development/GameChangeDjango'
import DjangoHero from '@/components/webdevelopment/django-development/Herodjango'
import IndustryDjango from '@/components/webdevelopment/django-development/IndustryDjango'
import QuickSupportDjango from '@/components/webdevelopment/django-development/QuickSupportDjango'
import WhyChooseDjango from '@/components/webdevelopment/django-development/WhyChooseDjango'
import React from 'react'
export const metadata = {
  title: "Djaongo Development | FAJ IT SOLUTIONS",
  description: "Djaongo Development faj IT solutions",
  alternates: {
    canonical: "/django-python-development",
  },
  openGraph: {
    title: "Djaongo Development | FAJ IT SOLUTIONS",
    description:
      "Djaongo Development faj IT solutions",
    url: "/django-python-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Djaongo Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Djaongo Development | FAJ IT SOLUTIONS",
    description:
      "Djaongo Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const Page = () => {
  return (
    <div>
      <HeroServiceDetail 
        title="Building Scalable & User-Friendly Django Application"
        description="Bring your ideas to life with our end-to-end Django Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <DjangoHero />
      <DjangoService />
      <WhyChooseDjango />
      <QuickSupportDjango />
      <GameChangeDjango />
      <IndustryDjango />
      <FaqsDjango />
    </div>
  )
}

export default Page;