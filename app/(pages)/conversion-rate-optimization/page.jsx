import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Conversion Rate Optimization | FAJ IT SOLUTIONS",
  description: "Conversion Rate Optimization faj IT solutions",
  alternates: {
    canonical: "/conversion-rate-optimization",
  },
  openGraph: {
    title: "Conversion Rate Optimization | FAJ IT SOLUTIONS",
    description:
      "Conversion Rate Optimization faj IT solutions",
    url: "/conversion-rate-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conversion Rate Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization | FAJ IT SOLUTIONS",
    description:
      "Conversion Rate Optimization faj IT solutions",
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