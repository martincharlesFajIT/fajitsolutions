import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Network Security & Monitoring | FAJ IT SOLUTIONS",
  description: "Network Security & Monitoring faj IT solutions",
  alternates: {
    canonical: "/network-security-&-monitoring",
  },
  openGraph: {
    title: "Network Security & Monitoring | FAJ IT SOLUTIONS",
    description:
      "Network Security & Monitoring faj IT solutions",
    url: "/network-security-&-monitoring",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Network Security & Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Security & Monitoring | FAJ IT SOLUTIONS",
    description:
      "Network Security & Monitoring faj IT solutions",
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