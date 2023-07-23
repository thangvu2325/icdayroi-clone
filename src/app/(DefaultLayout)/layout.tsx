'use client';
import Header from '@/layouts/components/Header';
import Navbar from '@/layouts/components/Navbar';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/DefaultLayout.module.scss';
import Footer from '@/layouts/components/Footer';
import { useEffect } from 'react';
import { fetchFilterData } from '@/redux/slices/filterListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronsRight } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import { filterListSelector } from '@/redux/selectors';
const cx = classNames.bind(styles);
interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: number;
  about?: { detail: string; specifications: string[]; specifications_img: string[] };
  slug: string;
}
interface Filter {
  _id: string;
  title: string;
  subFilter?: [{ subTitle: string; _id: string; item: Item[] }];
  item?: Item[];
  slug: string;
}
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const pathname = usePathname().split('/').slice(1);
  const filterList: Filter[] = useSelector(filterListSelector);
  const items: Item[] = [];
  filterList.forEach((filter) => {
    if (filter.item && filter.item.length) {
      items.push(...filter.item);
    }
    if (filter.subFilter && filter.subFilter.length) {
      filter.subFilter.forEach((subFilter) => {
        if (subFilter.item && subFilter.item.length) {
          items.push(...subFilter.item);
        }
      });
    }
  });
  const ItemSelect = items.find((item) => {
    return item.slug === pathname[pathname.length - 1];
  });
  if (ItemSelect?.name) {
    pathname[pathname.length - 1] = ItemSelect.name;
  }
  useEffect(() => {
    dispatch(fetchFilterData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={cx('wrap')}>
      <Header />
      <Navbar />
      <div className={cx('row')}>
        <div className={cx('inner')}>
          <>
            <div className={cx('inner-nav')}>
              <div className={cx('nav-title')}>Trang chủ</div>
            </div>
            {pathname.map((item, index) => {
              console.log(item);
              return (
                <span className={cx('nav')} key={index}>
                  <div className={cx('nav-icon')}>
                    <IconChevronsRight size={16} />
                  </div>
                  <div className={cx('inner-nav')}>
                    <div className={cx('nav-title')}>{item}</div>
                  </div>
                </span>
              );
            })}
          </>
        </div>
      </div>
      <div
        className={cx('container', {
          mtt0: true,
        })}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
