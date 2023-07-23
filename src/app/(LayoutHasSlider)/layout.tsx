'use client';
import Header from '@/layouts/components/Header';
import Navbar from '@/layouts/components/Navbar';
import SideBar from '@/layouts/components/SideBar';
import Slider from '@/layouts/components/Slider';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/DefaultLayout.module.scss';
import Footer from '@/layouts/components/Footer';
import { useEffect } from 'react';
import { fetchFilterData } from '@/redux/slices/filterListSlice';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(styles);
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilterData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={cx('wrap')}>
      <Header />
      <Navbar />
      <Slider />
      <div className={cx('container')}>
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
