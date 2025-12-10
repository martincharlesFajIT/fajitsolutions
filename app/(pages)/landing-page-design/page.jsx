import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Landing Page Design | FAJ IT SOLUTIONS",
  description: "Landing Page Design faj IT solutions",
  alternates: {
    canonical: "/landing-page-design",
  },
  openGraph: {
    title: "Landing Page Design | FAJ IT SOLUTIONS",
    description:
      "Landing Page Design faj IT solutions",
    url: "/landing-page-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Design | FAJ IT SOLUTIONS",
    description:
      "Landing Page Design faj IT solutions",
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