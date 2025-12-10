import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "SAP ERP System | FAJ IT SOLUTIONS",
  description: "SAP ERP System faj IT solutions",
  alternates: {
    canonical: "/sap-erp-system",
  },
  openGraph: {
    title: "SAP ERP System | FAJ IT SOLUTIONS",
    description:
      "SAP ERP System faj IT solutions",
    url: "/sap-erp-system",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAP ERP System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP ERP System | FAJ IT SOLUTIONS",
    description:
      "SAP ERP System faj IT solutions",
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