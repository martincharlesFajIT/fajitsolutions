import PrivacyPolicy from '@/components/privacypolicy/PrivacyPolicy'
import React from 'react'
export const metadata = {
  title: "Privacy Policy | FAJ IT SOLUTIONS",
  description: "Privacy Policy faj IT solutions",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | FAJ IT SOLUTIONS",
    description:
      "Privacy Policy faj IT solutions",
    url: "/privacy-policy",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FAJ IT SOLUTIONS",
    description:
      "Privacy Policy faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  )
}

export default page
