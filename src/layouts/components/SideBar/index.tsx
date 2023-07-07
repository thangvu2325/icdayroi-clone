import classNames from 'classnames/bind';
import styles from '@/layouts/components/SideBar/SideBar.module.scss';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { IconChevronLeft, IconChevronRight, IconMenu2 } from '@tabler/icons-react';
import FilterList from '@/components/FilterList';
import Image from 'next/image';
import { useSelector } from 'react-redux';
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
  price_final: string;
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
interface SidebarProps {}
const Sidebar: FunctionComponent<SidebarProps> = (): ReactNode => {
  const filterList: Filter[] = useSelector(filterListSelector);
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('icon')}>
            <IconMenu2 size={14} stroke={4} />
          </div>
          <h2 className={cx('title')}>DANH MỤC SẢN PHẨM</h2>
        </div>
        <FilterList Filters={filterList} />
      </div>
      <div className={cx('support')}>
        <div className={cx('support-header')}>
          <div className={cx('support-header-content')}>HỖ TRỢ TRỰC TUYẾN</div>
        </div>
        <div className={cx('support-body')}>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Tư vấn bán hàng</div>
              <div className={cx('contact')}>
                Mrs. Nhung: <span className={cx('phone')}>038 559 3358</span>
              </div>
            </div>
          </div>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Tư vấn kỹ thuật</div>
              <div className={cx('contact')}>
                Mr. Quang: <span className={cx('phone')}>035 618 4078</span>
              </div>
            </div>
          </div>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Email liên hệ</div>
              <div className={cx('contact')}>icdayroi@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('news')}>
        <div className={cx('news-header')}>
          TIN TỨC
          <div className={cx('news-action')}>
            <IconChevronLeft width={20} height={20} />
            <IconChevronRight width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
