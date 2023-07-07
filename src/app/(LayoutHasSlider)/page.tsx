'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(LayoutHasSlider)/Home.module.scss';
import { useSelector } from 'react-redux';
import { FunctionComponent, ReactNode, useEffect } from 'react';
import { filterListSelector } from '@/redux/selectors';
import Items from '@/components/Items';
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

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = (): ReactNode => {
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

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <Items title="SẢN PHẨM MỚI" items={items} />
        <Items title="SẢN PHẨM BÁN CHẠY" items={items} />
        <Items title="SẢN PHẨM NỔI BẬT" items={items} />
      </div>
    </div>
  );
};
export default HomePage;
