import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Endpoint Security Solutions | FAJ IT SOLUTIONS",
  description: "Endpoint Security Solutions faj IT solutions",
  alternates: {
    canonical: "/endpoint-security-solutions",
  },
  openGraph: {
    title: "Endpoint Security Solutions | FAJ IT SOLUTIONS",
    description:
      "Endpoint Security Solutions faj IT solutions",
    url: "/endpoint-security-solutions",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Endpoint Security Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endpoint Security Solutions | FAJ IT SOLUTIONS",
    description:
      "Endpoint Security Solutions faj IT solutions",
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