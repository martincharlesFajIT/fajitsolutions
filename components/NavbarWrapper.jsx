'use client';

import { usePathname } from 'next/navigation';
import HomeNavbar from '../components/home/HomeNavbar';
import MainNavbar from './MainNavbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      <div style={{ display: isHome ? 'block' : 'none' }}>
        <HomeNavbar />
      </div>
      <div style={{ display: isHome ? 'none' : 'block' }}>
        <MainNavbar />
      </div>
    </>
  );
}
