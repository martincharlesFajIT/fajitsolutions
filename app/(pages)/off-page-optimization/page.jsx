import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Off Page Optimization | FAJ IT SOLUTIONS",
  description: "Off Page Optimization faj IT solutions",
  alternates: {
    canonical: "/off-page-optimization",
  },
  openGraph: {
    title: "Off Page Optimization | FAJ IT SOLUTIONS",
    description:
      "Off Page Optimization faj IT solutions",
    url: "/off-page-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Off Page Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Off Page Optimization | FAJ IT SOLUTIONS",
    description:
      "Off Page Optimization faj IT solutions",
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