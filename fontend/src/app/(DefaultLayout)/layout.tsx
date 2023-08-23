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
import { Item, Filter } from '@/types/frontEnd';
import { filterListSelector } from '@/redux/selectors';
import { fetchItemData } from '@/redux/slices/itemSlice';
const cx = classNames.bind(styles);

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
    dispatch(fetchItemData());
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
