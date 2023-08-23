'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(LayoutHasSlider)/Home.module.scss';
import { useSelector } from 'react-redux';
import { FunctionComponent, ReactNode } from 'react';
import { ItemsSelector } from '@/redux/selectors';
import Items from '@/components/Items';
import { ItemData } from '@/types/frontEnd';
const cx = classNames.bind(styles);

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = (): ReactNode => {
  const itemsData: ItemData = useSelector(ItemsSelector);

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <Items title="SẢN PHẨM MỚI" items={itemsData.items} />
        <Items title="SẢN PHẨM BÁN CHẠY" items={itemsData.items} />
        <Items title="SẢN PHẨM NỔI BẬT" items={itemsData.items} />
      </div>
    </div>
  );
};
export default HomePage;
