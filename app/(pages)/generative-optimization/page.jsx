import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Generative Optimization | FAJ IT SOLUTIONS",
  description: "Generative Optimization faj IT solutions",
  alternates: {
    canonical: "/generative-optimization",
  },
  openGraph: {
    title: "Generative Optimization | FAJ IT SOLUTIONS",
    description:
      "Generative Optimization faj IT solutions",
    url: "/generative-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Generative Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Optimization | FAJ IT SOLUTIONS",
    description:
      "Generative Optimization faj IT solutions",
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