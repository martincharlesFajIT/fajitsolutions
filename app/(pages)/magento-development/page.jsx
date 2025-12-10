import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Magento Development | FAJ IT SOLUTIONS",
  description: "Magento Development faj IT solutions",
  alternates: {
    canonical: "/magento-development",
  },
  openGraph: {
    title: "Magento Development | FAJ IT SOLUTIONS",
    description:
      "Magento Development faj IT solutions",
    url: "/magento-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Magento Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magento Development | FAJ IT SOLUTIONS",
    description:
      "Magento Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
        <ComingSoon />
    </div>
  )
}

export default page