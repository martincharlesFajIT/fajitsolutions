import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Progessive Web App | FAJ IT SOLUTIONS",
  description: "Progessive Web App faj IT solutions",
  alternates: {
    canonical: "/progessive-web-app",
  },
  openGraph: {
    title: "Progessive Web App | FAJ IT SOLUTIONS",
    description:
      "Progessive Web App faj IT solutions",
    url: "/progessive-web-app",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Progessive Web App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progessive Web App | FAJ IT SOLUTIONS",
    description:
      "Progessive Web App faj IT solutions",
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