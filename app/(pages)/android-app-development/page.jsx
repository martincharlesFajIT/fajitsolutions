import HeroServiceDetail from '@/components/HeroServiceDetail'
import ReactBannerCta from '@/components/mobileapplication/android-app/React-Banner-Cta'
import ReactBenefit from '@/components/mobileapplication/android-app/React-benefit'
import ReactExpertise from '@/components/mobileapplication/android-app/React-Expertise'
import FaqsReact from '@/components/mobileapplication/android-app/React-Faqs'
import ReactPartner from '@/components/mobileapplication/android-app/React-Partner'
import ReactNativeServices from '@/components/mobileapplication/android-app/React-Service'
import React from 'react'

export const metadata = {
  title: "Android App Development | FAJ IT SOLUTIONS",
  description: "Android App Development faj IT solutions",
  alternates: {
    canonical: "/mobile-app-development",
  },
  openGraph: {
    title: "Android App Development | FAJ IT SOLUTIONS",
    description:
      "Android App Development faj IT solutions",
    url: "/mobile-app-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Android App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android App Development | FAJ IT SOLUTIONS",
    description:
      "Android App Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const page = () => {
  return (
    <div>
            <div>
        <HeroServiceDetail 
        title="Building Scalable & User-Friendly React Native Application"
        description="Bring your ideas to life with our end-to-end React Native Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <ReactPartner />
        <ReactNativeServices />
        <ReactBannerCta />
        <ReactExpertise />
        <ReactBenefit />
        <FaqsReact />
    </div>
    </div>
  )
}

export default page