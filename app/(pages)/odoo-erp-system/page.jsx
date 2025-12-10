import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Odoo ERP System | FAJ IT SOLUTIONS",
  description: "Odoo ERP System faj IT solutions",
  alternates: {
    canonical: "/odoo-erp-system",
  },
  openGraph: {
    title: "Odoo ERP System | FAJ IT SOLUTIONS",
    description:
      "Odoo ERP System faj IT solutions",
    url: "/odoo-erp-system",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Odoo ERP System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo ERP System | FAJ IT SOLUTIONS",
    description:
      "Odoo ERP System faj IT solutions",
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