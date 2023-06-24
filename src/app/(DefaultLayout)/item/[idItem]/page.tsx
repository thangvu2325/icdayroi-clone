'use client';
import { FunctionComponent, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/item/[idItem]/ItemPurchase.module.scss';
import { useSelector } from 'react-redux';
import { itemListSelector } from '@/redux/selectors';
import Image from 'next/image';
import Button from '@/components/Button';
import Items from '@/components/Items';
const cx = classNames.bind(styles);
interface ItemPurchaseProps {
  params: { idItem: string };
}
interface item {
  name: string;
  id: string;
  img: string;
  imgLarge: string;
  price: string;
  about?: { detail: string; specifications: string[]; image: string[] };
  available: boolean;
  count: number;
}
// export async function generateMetadata({ params: { idItem } }: Params, item): Promise<Metadata> {
//   return {
//     title: 'ab',
//     description: `This is the page of ${item}`,
//   };
// }

const ItemPurchase: FunctionComponent<ItemPurchaseProps> = ({ params: { idItem } }) => {
  const ItemList: item[] = useSelector(itemListSelector);
  const ItemSelect = ItemList.find((item) => item.id === idItem);
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
              <Image src={ItemSelect.imgLarge} alt="Logo Item" width={398} height={398}></Image>
            </div>
            <div className={cx('item-content')}>
              <div className={cx('title')}>{ItemSelect.name}</div>
              <div className={cx('price')}>{ItemSelect.price}₫</div>
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
                {ItemSelect.about?.specifications.map((item, index) => {
                  return (
                    <div key={index} className={cx('item')}>
                      - {item}
                    </div>
                  );
                })}
              </div>
              <div className={cx('image')}>
                {ItemSelect.about?.image.map((item, index) => {
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
        'Item not found'
      )}
    </div>
  );
};

export default ItemPurchase;
