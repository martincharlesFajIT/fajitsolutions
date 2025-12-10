import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "CRM Development | FAJ IT SOLUTIONS",
  description: "CRM Development faj IT solutions",
  alternates: {
    canonical: "/crm-development",
  },
  openGraph: {
    title: "CRM Development | FAJ IT SOLUTIONS",
    description:
      "CRM Development faj IT solutions",
    url: "/crm-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CRM Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Development | FAJ IT SOLUTIONS",
    description:
      "CRM Development faj IT solutions",
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