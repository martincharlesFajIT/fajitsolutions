import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Predictive Analytics | FAJ IT SOLUTIONS",
  description: "Predictive Analytics faj IT solutions",
  alternates: {
    canonical: "/predictive-analytics",
  },
  openGraph: {
    title: "Predictive Analytics | FAJ IT SOLUTIONS",
    description:
      "Predictive Analytics faj IT solutions",
    url: "/predictive-analytics",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Predictive Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predictive Analytics | FAJ IT SOLUTIONS",
    description:
      "Predictive Analytics faj IT solutions",
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