import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Sms Marketing | FAJ IT SOLUTIONS",
  description: "Sms Marketing faj IT solutions",
  alternates: {
    canonical: "/sms-marketing",
  },
  openGraph: {
    title: "Sms Marketing | FAJ IT SOLUTIONS",
    description:
      "Sms Marketing faj IT solutions",
    url: "/sms-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sms Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sms Marketing | FAJ IT SOLUTIONS",
    description:
      "Sms Marketing faj IT solutions",
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