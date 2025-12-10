import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Custom Ai Saas Application | FAJ IT SOLUTIONS",
  description: "Custom Ai Saas Application faj IT solutions",
  alternates: {
    canonical: "/custom-ai-saas-application",
  },
  openGraph: {
    title: "Custom Ai Saas Application | FAJ IT SOLUTIONS",
    description:
      "Custom Ai Saas Application faj IT solutions",
    url: "/custom-ai-saas-application",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Ai Saas Application",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Ai Saas Application | FAJ IT SOLUTIONS",
    description:
      "Custom Ai Saas Application faj IT solutions",
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