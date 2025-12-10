import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Oracle Cloud ERP System | FAJ IT SOLUTIONS",
  description: "Oracle Cloud ERP System faj IT solutions",
  alternates: {
    canonical: "/oracle-cloud-erp-system",
  },
  openGraph: {
    title: "Oracle Cloud ERP System | FAJ IT SOLUTIONS",
    description:
      "Oracle Cloud ERP System faj IT solutions",
    url: "/oracle-cloud-erp-system",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle Cloud ERP System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Cloud ERP System | FAJ IT SOLUTIONS",
    description:
      "Oracle Cloud ERP System faj IT solutions",
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