'use client';

import SideBar from '@/layouts/components/SideBar';

export default function hasSideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
