import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Translation Servcie | FAJ IT SOLUTIONS",
  description: "Translation Servcie faj IT solutions",
  alternates: {
    canonical: "/translation-service",
  },
  openGraph: {
    title: "Translation Servcie | FAJ IT SOLUTIONS",
    description:
      "Translation Servcie faj IT solutions",
    url: "/translation-service",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Translation Servcie",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Translation Servcie | FAJ IT SOLUTIONS",
    description:
      "Translation Servcie faj IT solutions",
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