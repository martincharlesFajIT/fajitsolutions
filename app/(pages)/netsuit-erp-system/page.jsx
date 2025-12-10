import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Netsuit ERP | FAJ IT SOLUTIONS",
  description: "Netsuit ERP faj IT solutions",
  alternates: {
    canonical: "/netsuit-erp-system",
  },
  openGraph: {
    title: "Netsuit ERP | FAJ IT SOLUTIONS",
    description:
      "Netsuit ERP faj IT solutions",
    url: "/netsuit-erp-system",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Netsuit ERP",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netsuit ERP | FAJ IT SOLUTIONS",
    description:
      "Netsuit ERP faj IT solutions",
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