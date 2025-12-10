import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Rebranding and Refresh | FAJ IT SOLUTIONS",
  description: "Rebranding and Refresh faj IT solutions",
  alternates: {
    canonical: "/rebranding-&-refresh",
  },
  openGraph: {
    title: "Rebranding and Refresh | FAJ IT SOLUTIONS",
    description:
      "Rebranding and Refresh faj IT solutions",
    url: "/rebranding-&-refresh",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rebranding and Refresh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebranding and Refresh | FAJ IT SOLUTIONS",
    description:
      "Rebranding and Refresh faj IT solutions",
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