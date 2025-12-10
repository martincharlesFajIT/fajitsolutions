import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Ai Automation & Workflow | FAJ IT SOLUTIONS",
  description: "Ai Automation & Workflow faj IT solutions",
  alternates: {
    canonical: "/ai-automation-&-workflow",
  },
  openGraph: {
    title: "Ai Automation & Workflow | FAJ IT SOLUTIONS",
    description:
      "Ai Automation & Workflow faj IT solutions",
    url: "/ai-automation-&-workflow",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ai Automation & Workflow",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Automation & Workflow | FAJ IT SOLUTIONS",
    description:
      "Ai Automation & Workflow faj IT solutions",
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