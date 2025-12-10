import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Web Maintenance | FAJ IT SOLUTIONS",
  description: "Web Maintenance faj IT solutions",
  alternates: {
    canonical: "/web-maintenance",
  },
  openGraph: {
    title: "Web Maintenance | FAJ IT SOLUTIONS",
    description:
      "Web Maintenance faj IT solutions",
    url: "/web-maintenance",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Maintenance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Maintenance | FAJ IT SOLUTIONS",
    description:
      "Web Maintenance faj IT solutions",
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
