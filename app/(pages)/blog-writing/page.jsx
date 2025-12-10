import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Blog Writing | FAJ IT SOLUTIONS",
  description: "Blog Writing faj IT solutions",
  alternates: {
    canonical: "/blog-writing",
  },
  openGraph: {
    title: "Blog Writing | FAJ IT SOLUTIONS",
    description:
      "Blog Writing faj IT solutions",
    url: "/blog-writing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Writing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Writing | FAJ IT SOLUTIONS",
    description:
      "Blog Writing faj IT solutions",
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