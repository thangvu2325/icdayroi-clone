// 'use client';
import './globals.scss';
// import { Provider } from 'react-redux';
// import store from '@/redux/store';
export const metadata = {
  title: 'IC ĐÂY RỒI - THẾ GIỚI LINH KIỆN ĐIỆN TỬ',
  description:
    'IC ĐÂY RỒI - Chuyên cung cấp phân phối linh kiện điện tử, ic atmega, ic stm, ic 8051, ic 74xx, ic nguồn, ic các loại, arduino, module, cảm biến, robot',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
