import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Incident Response and Threat | FAJ IT SOLUTIONS",
  description: "Incident Response and Threat faj IT solutions",
  alternates: {
    canonical: "/incident-response-&-threat",
  },
  openGraph: {
    title: "Incident Response and Threat | FAJ IT SOLUTIONS",
    description:
      "Incident Response and Threat faj IT solutions",
    url: "/incident-response-&-threat",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Incident Response and Threat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incident Response and Threat | FAJ IT SOLUTIONS",
    description:
      "Incident Response and Threat faj IT solutions",
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