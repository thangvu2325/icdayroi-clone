'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(LayoutHasSlider)/Home.module.scss';
import { useSelector } from 'react-redux';
import { FunctionComponent, ReactNode } from 'react';
import { itemListSelector } from '@/redux/selectors';
import Items from '@/components/Items';
const cx = classNames.bind(styles);
interface item {
  name: string;
  id: string;
  img: string;
  imgLarge?: string;
  price: string;
  about?: string[];
  available: boolean;
  count: number;
}

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = (): ReactNode => {
  const items: item[] = useSelector(itemListSelector);
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
