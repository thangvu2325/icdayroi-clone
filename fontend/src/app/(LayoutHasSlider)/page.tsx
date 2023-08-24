'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(LayoutHasSlider)/Home.module.scss';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
// import { ItemsSelector } from '@/redux/selectors';
import Items from '@/components/Items';
import { ItemRes } from '@/types/frontEnd';
import { getItem } from '@/api/itemRequest';
const cx = classNames.bind(styles);

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = (): ReactNode => {
  const [items, setItems] = useState<ItemRes | false>({});
  if (items) {
    console.log(items.itemsData);
  }
  useEffect(() => {
    const fetchData = async () => {
      const data: ItemRes | false = await getItem();
      setItems(data);
    };
    fetchData();
  }, []);
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <Items title="SẢN PHẨM MỚI" items={items ? items.itemsData : []} />
        <Items title="SẢN PHẨM BÁN CHẠY" items={items ? items.itemsData : []} />
        <Items title="SẢN PHẨM NỔI BẬT" items={items ? items.itemsData : []} />
      </div>
    </div>
  );
};
export default HomePage;
