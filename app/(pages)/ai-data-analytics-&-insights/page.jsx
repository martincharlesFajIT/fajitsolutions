import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Ai Data Analytics & Insights | FAJ IT SOLUTIONS",
  description: "Ai Data Analytics & Insights faj IT solutions",
  alternates: {
    canonical: "/ai-data-analytics-&-insights",
  },
  openGraph: {
    title: "Ai Data Analytics & Insights | FAJ IT SOLUTIONS",
    description:
      "Ai Data Analytics & Insights faj IT solutions",
    url: "/ai-data-analytics-&-insights",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ai Data Analytics & Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Data Analytics & Insights | FAJ IT SOLUTIONS",
    description:
      "Ai Data Analytics & Insights faj IT solutions",
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