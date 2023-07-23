'use client';
import { FunctionComponent, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(hasSidebar)/[filterSlug]/filterSlug.module.scss';
import { useSelector } from 'react-redux';
import { filterListSelector } from '@/redux/selectors';
import Items from '@/components/Items';
import { IconLayoutGrid, IconListDetails } from '@tabler/icons-react';
const cx = classNames.bind(styles);
interface FilterPageProps {
  params: { filterSlug: string };
}
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

const FilterPage: FunctionComponent<FilterPageProps> = ({ params: { filterSlug } }) => {
  const filterList: Filter[] = useSelector(filterListSelector);
  const [viewMode, setViewMode] = useState<Boolean>(false);
  const filterSelect: Filter | undefined = filterList.find((filter) => {
    return filter.slug === filterSlug;
  });
  const handleViewMode = (viewMode: boolean) => {
    setViewMode(viewMode);
  };
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('title')}>
            <h2>{filterSelect?.title}</h2>
          </div>
          <div className={cx('arrange')}>
            <div className={cx('arrange-title')}>Sắp xếp:</div>
            <div className={cx('sellect')}>
              <select className={cx('sort')}>
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
                <option value="alpha-asc">Từ A-Z</option>
                <option value="alpha-desc">Từ Z-A</option>
                <option value="created-asc">Cũ đến mới</option>
                <option value="created-desc">Mới đến cũ</option>
              </select>
            </div>
          </div>
          <div className={cx('view-mode')}>
            <IconLayoutGrid
              className={cx('view-mode-icon', {
                active: !viewMode,
              })}
              onClick={() => {
                handleViewMode(false);
              }}
            />
            <IconListDetails
              className={cx('view-mode-icon', {
                active: viewMode,
              })}
              onClick={() => {
                handleViewMode(true);
              }}
            />
          </div>
        </div>
        {filterSelect ? <Items horizon_line items={filterSelect?.item ?? []} /> : ''}
      </div>
    </div>
  );
};

export default FilterPage;
