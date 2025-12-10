import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Machine Learning | FAJ IT SOLUTIONS",
  description: "Machine Learning faj IT solutions",
  alternates: {
    canonical: "/machine-learning",
  },
  openGraph: {
    title: "Machine Learning | FAJ IT SOLUTIONS",
    description:
      "Machine Learning faj IT solutions",
    url: "/machine-learning",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Machine Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning | FAJ IT SOLUTIONS",
    description:
      "Machine Learning faj IT solutions",
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