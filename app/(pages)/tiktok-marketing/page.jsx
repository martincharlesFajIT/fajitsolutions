import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Tiktok Marketing | FAJ IT SOLUTIONS",
  description: "Tiktok Marketing faj IT solutions",
  alternates: {
    canonical: "/tiktok-marketing",
  },
  openGraph: {
    title: "Tiktok Marketing | FAJ IT SOLUTIONS",
    description:
      "Tiktok Marketing faj IT solutions",
    url: "/tiktok-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tiktok Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiktok Marketing | FAJ IT SOLUTIONS",
    description:
      "Tiktok Marketing faj IT solutions",
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