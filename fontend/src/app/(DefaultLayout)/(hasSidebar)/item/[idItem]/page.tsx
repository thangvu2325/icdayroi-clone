'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(hasSidebar)/item/[idItem]/ItemPurchase.module.scss';

import Image from 'next/image';
import Button from '@/components/Button';
import Items from '@/components/Items';
import { Item } from '@/types/frontEnd';
import { getItembyId } from '@/api/itemRequest';
import axios from 'axios';
const cx = classNames.bind(styles);
interface ItemPurchaseProps {
  params: { idItem: string };
}

const ItemPurchase: FunctionComponent<ItemPurchaseProps> = ({ params: { idItem } }) => {
  const [ItemSelect, setItemSelect] = useState<Item | false>();
  useEffect(() => {
    const fetchData = async () => {
      const item = await axios.get(`http://localhost:3001/api/item/${idItem}`, {
        withCredentials: true,
      });
      console.log(item);
      setItemSelect(item.data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idItem]);
  console.log(ItemSelect);
  const [countValue, setCountValue] = useState<number>(1);
  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountValue(Number(e.target.value));
  };
  return (
    <div className={cx('wrap')}>
      {ItemSelect ? (
        <div className={cx('container')}>
          <div className={cx('top')}>
            <div className={cx('item-logo')}>
              <Image src={ItemSelect.img_large} alt="Logo Item" width={398} height={398}></Image>
            </div>
            <div className={cx('item-content')}>
              <div className={cx('title')}>{ItemSelect.name}</div>
              <div className={cx('price')}>{ItemSelect.price_final.toLocaleString()}₫</div>
              <div className={cx('stock')}>Còn hàng</div>
              <div className={cx('describe')}>
                <div className={cx('describe-title')}>Mô tả:</div>
                <div className={cx('describe-content')}>
                  {ItemSelect.about?.detail && ItemSelect.about?.detail.length > 210
                    ? ItemSelect.about?.detail.substring(0, 210) + '...'
                    : ItemSelect.about?.detail}
                </div>
              </div>
              <div className={cx('count')}>
                <span className={cx('count-title')}>Số lượng:</span>
                <input type="number" value={countValue} onChange={handleChangeCount} min={1} max={100} />
              </div>
              <div className={cx('action')}>
                <Button primary className={cx('action-btn-add')}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
          <div className={cx('middle-top')}>
            <div
              className={cx('tab', {
                checked: true,
              })}
            >
              THÔNG TIN SẢN PHẨM
            </div>
          </div>
          <div className={cx('  ')}>
            <div className={cx('container')}>
              <h3 className={cx('middle-bottom-detail')}>{ItemSelect.about?.detail}</h3>
              <h3 className={cx('specifications')}></h3>
              <div className={cx('list')}>
                {ItemSelect.about?.specifications[0] !== undefined ? (
                  <div dangerouslySetInnerHTML={{ __html: ItemSelect.about?.specifications[0] }} />
                ) : (
                  <span>No specifications available.</span>
                )}
              </div>
              <div className={cx('image')}>
                {ItemSelect.about?.specifications_img?.map((item, index) => {
                  return <Image key={index} src={item} alt="image of item" width={750} height={750} />;
                })}
              </div>
            </div>
          </div>
          <div className={cx('bottom')}>
            <div className={cx('bottom-container')}>
              <h2 className={cx('bottom-title')}>SẢN PHẨM LIÊN QUAN</h2>
              <div className={cx('items')}>
                <Items items={[ItemSelect]} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>{idItem}</p>
      )}
    </div>
  );
};

export default ItemPurchase;
