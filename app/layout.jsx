"use client";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarRoutes = ["/landing-pages/sales-digital-marketing"];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" 
          crossOrigin="anonymous"
          src="https://analytics.ahrefs.com/analytics.js" data-key="dbDd+UFXvnpWgiRfHK0IYw" async
        />
      </head>
      <body>
        {!shouldHideNavbar && <MainNavbar />}
        {children}
        {!shouldHideNavbar && <Footer />}
      </body>
    </html>
  );
}
