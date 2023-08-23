'use client';

import classNames from 'classnames/bind';
import styles from '@/components/FilterList/FilterList.module.scss';
import { FunctionComponent, ReactNode, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Item, Filter } from '@/types/frontEnd';
import Link from 'next/link';
const cx = classNames.bind(styles);
interface FilterListProps {
  Filters: Filter[];
}

const FilterList: FunctionComponent<FilterListProps> = ({ Filters }): ReactNode => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [click, setClick] = useState<string[]>([]);

  const handleItemClick = (title: string) => {
    const isExpanded = expandedItems.includes(title);
    const isClick = expandedItems.includes(title);
    if (!isClick) {
      setClick([title]);
    }
    if (isExpanded) {
      setExpandedItems(expandedItems.filter((item) => item !== title));
    } else {
      setExpandedItems([title]);
    }
  };
  return (
    <div className={cx('item-list')}>
      {Filters?.map((item: Filter, index: number) => (
        <div key={index} className={cx('item')}>
          {item?.subFilter?.length ? (
            <div className={cx('item-main')} onClick={() => handleItemClick(item.title)}>
              <div className={cx('arrow-right')}></div>
              <div className={cx('item-title')}>{item.title}</div>
              <div className={cx('item-icon')}>
                <IconChevronDown size={14} stroke={3} color="#777" />
              </div>
            </div>
          ) : (
            <Link href={item.slug} className={cx('item-main')}>
              <div className={cx('arrow-right')}></div>
              <div className={cx('item-title')}>{item.title}</div>
            </Link>
          )}
          {item.subFilter && (
            <div
              className={cx('sub-item-list', {
                hide: click.includes(item.title) && !expandedItems.includes(item.title),
                show: expandedItems.includes(item.title),
                macdinh: !expandedItems.includes(item.title),
              })}
            >
              {item.subFilter.map((subFilter: { subTitle: string; _id: string; item: Item[] }, subIndex: number) => (
                <div key={subIndex} className={cx('sub-item')}>
                  <h4 className={cx('sub-item-title')}>{subFilter.subTitle}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterList;
