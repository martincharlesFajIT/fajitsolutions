import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" 
          crossOrigin="anonymous" 
        />
      </head>
      <body>
        <MainNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}