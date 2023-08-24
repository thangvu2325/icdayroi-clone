'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(hasSidebar)/[filterSlug]/filterSlug.module.scss';
import { useSelector } from 'react-redux';
import { filterListSelector } from '@/redux/selectors';
import Items from '@/components/Items';
import { IconLayoutGrid, IconListDetails } from '@tabler/icons-react';
import { Item, Filter, ItemRes } from '@/types/frontEnd';
import { getItem } from '@/api/itemRequest';
const cx = classNames.bind(styles);
interface FilterPageProps {
  params: { filterSlug: string };
}

const FilterPage: FunctionComponent<FilterPageProps> = ({ params: { filterSlug } }) => {
  const filterList: Filter[] = useSelector(filterListSelector);
  const [items, setItems] = useState<ItemRes | false>({});
  let itemData: Item[] | undefined = [];
  const [viewMode, setViewMode] = useState<Boolean>(false);
  let title;
  const filterSelect: Filter | undefined = filterList.find((filter) => {
    return filter.slug === filterSlug;
  });
  useEffect(() => {
    const fetchData = async () => {
      const data: ItemRes | false = await getItem(1, filterSelect && filterSelect?.title);
      setItems(data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!filterSelect) {
    title = 'Tất cả';
    itemData = items ? items.itemsData : [];
  } else {
    title = filterSelect.title;
    itemData = items ? items.itemsData?.filter((item) => item.Filter === filterSelect.title) : [];
  }
  const handleViewMode = (viewMode: boolean) => {
    setViewMode(viewMode);
  };
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('title')}>
            <h2>{title}</h2>
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
        <Items horizon_line items={itemData} />
      </div>
    </div>
  );
};

export default FilterPage;
