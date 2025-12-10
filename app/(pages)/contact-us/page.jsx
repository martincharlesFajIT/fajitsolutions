import ContactForm from '@/components/contactus/ContactForm'
import ContactSection from '@/components/contactus/ContactSection'
import React from 'react'
export const metadata = {
  title: "Contact Us | FAJ IT SOLUTIONS",
  description: "Contact Us faj IT solutions",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | FAJ IT SOLUTIONS",
    description:
      "Contact Us faj IT solutions",
    url: "/contact-us",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | FAJ IT SOLUTIONS",
    description:
      "Contact Us faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const pages = () => {
  return (
    <div>
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default pages
