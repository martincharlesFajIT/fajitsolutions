import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Enterprise Development | FAJ IT SOLUTIONS",
  description: "Enterprise Development faj IT solutions",
  alternates: {
    canonical: "/enterprise-development",
  },
  openGraph: {
    title: "Enterprise Development | FAJ IT SOLUTIONS",
    description:
      "Enterprise Development faj IT solutions",
    url: "/enterprise-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Development | FAJ IT SOLUTIONS",
    description:
      "Enterprise Development faj IT solutions",
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
