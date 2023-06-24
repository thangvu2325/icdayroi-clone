import { FunctionComponent, useState } from 'react';

import classNames from 'classnames/bind';
import styles from '@/components/ModalCart/ModalCart.module.scss';
import { IconCheck, IconChevronRight, IconCircleX, IconCircleXFilled, IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';
import Button from '../Button';
import { cartSelector } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '@/redux/cartSlice';
const cx = classNames.bind(styles);
interface ModalCartProps {
  open: boolean;
  action: any;
}
interface Item {
  name: string;
  id: string;
  img: string;
  imgLarge?: string;
  price: string;
  about?: string[];
  available: boolean;
  count: number;
  path: string;
}

type Cart = {
  newItem?: Item;
  listItem?: Item[];
};
const ModalCart: FunctionComponent<ModalCartProps> = ({ open, action }) => {
  const dispatch = useDispatch();
  const cart: Cart = useSelector(cartSelector);
  const handleChangeCount = (id: string, value: number) => {
    dispatch(cartSlice.actions.editCountItem({ id, value }));
  };

  const handleClose = () => {
    action(false);
  };
  const handleDeleteItem = (id: string) => {
    dispatch(cartSlice.actions.deleteItem(id));
  };
  return (
    <>
      <div className={cx('shade')} onClick={handleClose}></div>
      <div className={cx('wrap')}>
        <div className={cx('container')}>
          <div className={cx('close-btn')} onClick={handleClose}>
            <IconCircleX width={22} height={22} className={cx('btn')} />
          </div>
          <div className={cx('content')}>
            <div className={cx('top')}>
              <div className={cx('top-content')}>
                <div className={cx('title')}>
                  <IconCheck color="#56a8f5" stroke={3} size={23} className={cx('icon-check')} />
                  Sản phẩm <span className={cx('name')}>{cart.newItem?.name}</span> đã được thêm vào giỏ hàng
                </div>
                <div className={cx('cart-count')}>
                  Giỏ hàng của bạn <span className={cx('count')}>({cart.listItem?.length} sản phẩm)</span>
                </div>
              </div>
            </div>
            <div className={cx('middle')}>
              <div className={cx('middle-item')}>
                <div className={cx('product')}>SẢN PHẨM</div>
                <div className={cx('price')}>ĐƠN GIÁ</div>
                <div className={cx('count')}>SỐ LƯỢNG</div>
                <div className={cx('money')}>THÀNH TIỀN</div>
              </div>
              <div className={cx('middle-list-item')}>
                {cart.listItem?.length
                  ? cart.listItem?.map((item) => (
                      <div className={cx('middle-item')} key={item.id}>
                        <div className={cx('product')}>
                          <Image src={item.img} alt="img-product" width={80} height={80} />
                          <div className={cx('product-content')}>
                            <div className={cx('product-name')}>{item.name}</div>
                            <span
                              className={cx('product-delete')}
                              onClick={() => {
                                handleDeleteItem(item.id);
                              }}
                            >
                              <IconCircleXFilled size={16} /> Bỏ sản phẩm
                            </span>
                          </div>
                        </div>
                        <div className={cx('price')}>{item.price}₫</div>
                        <div className={cx('count')}>
                          <input
                            type="number"
                            value={item.count}
                            min={0}
                            max={200}
                            onChange={(e) => handleChangeCount(item.id, Number(e.target.value))}
                          />
                        </div>
                        <div className={cx('money')}>
                          {(item.count * Number(item.price.replace('.', ''))).toLocaleString()}₫
                        </div>
                      </div>
                    ))
                  : ''}
              </div>
            </div>
            <div className={cx('bottom')}>
              <div className={cx('bottom-line-top')}>
                <div className={cx('delivery')}>Giao hàng trên toàn quốc</div>
                <div className={cx('money')}>
                  Thành tiền:{' '}
                  <span className={cx('price')}>
                    {cart.listItem
                      ?.reduce((acc, item) => {
                        const count = item.count;
                        const price = parseFloat(item.price.replace('.', ''));
                        const subtotal = count * price;
                        return acc + subtotal;
                      }, 0)
                      .toLocaleString()}
                    ₫
                  </span>
                </div>
              </div>
              <div className={cx('bottom-line-bottom')}>
                <div className={cx('order-continue')} onClick={handleClose}>
                  <IconChevronRight />
                  Tiếp tục mua hàng
                </div>
                <Button primary className={cx('action-btn')}>
                  <IconShoppingCart size={15} stroke={1} />
                  Tiến hành đặt hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
