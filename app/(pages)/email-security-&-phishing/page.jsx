import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Email Security and Phishing | FAJ IT SOLUTIONS",
  description: "Email Security and Phishing faj IT solutions",
  alternates: {
    canonical: "/email-security-&-phishing",
  },
  openGraph: {
    title: "Email Security and Phishing | FAJ IT SOLUTIONS",
    description:
      "Email Security and Phishing faj IT solutions",
    url: "/email-security-&-phishing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Email Security and Phishing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Security and Phishing | FAJ IT SOLUTIONS",
    description:
      "Email Security and Phishing faj IT solutions",
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