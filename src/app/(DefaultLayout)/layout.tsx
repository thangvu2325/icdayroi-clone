'use client';
import Header from '@/layouts/components/Header';
import Navbar from '@/layouts/components/Navbar';
import SideBar from '@/layouts/components/SideBar';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/DefaultLayout.module.scss';
import Footer from '@/layouts/components/Footer';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const cx = classNames.bind(styles);
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className={cx('wrap')}>
        <Header />
        <Navbar />
        <div className={cx('container')}>
          <SideBar />
          {children}
        </div>
        <Footer />
      </div>
    </Provider>
  );
}
