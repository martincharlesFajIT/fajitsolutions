"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "../components/home/HomeNavbar";
import MainNavbar from "./MainNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return isHome ? <HomeNavbar /> : <MainNavbar />;
}
