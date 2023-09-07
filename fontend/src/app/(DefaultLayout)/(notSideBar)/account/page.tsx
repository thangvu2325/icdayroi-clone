'use client';
import { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/AccountPage.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { authSelector } from '@/redux/selectors';
import { Item, User } from '@/types/frontEnd';
const cx = classNames.bind(styles);

interface AccountPageProps {}

const AccountPage: FunctionComponent<AccountPageProps> = () => {
  const currentUser: User = useSelector(authSelector)._doc;
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <div className={cx('left-content')}>
            <div className={cx('inform')}>
              <div className={cx('inform-title')}>THÔNG TIN TÀI KHOẢN</div>
              <div className={cx('inform-name')}>Xin chào, Vũ Đức Thắng</div>
            </div>
            <div className={cx('orders-list')}>
              <div className={cx('orders-recently')}>Đơn hàng gần nhất</div>
              <table className={cx('orders-table')}>
                <thead>
                  <tr>
                    <th>Đơn hàng</th>
                    <th>Ngày</th>
                    <th>Chuyển đến</th>
                    <th>Địa chỉ</th>
                    <th>Giá trị đơn hàng</th>
                    <th>Tình thạng thanh toán</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUser?.order?.map((order) => {
                    return (
                      <tr key={order?._id}>
                        <td>{order?._id}</td>
                        <td>{order.date}</td>
                        <td>{order.receiver}</td>
                        <td>{order.addressReceive}</td>
                        <td>
                          {order.items
                            ? order.items.reduce((total: Number, num: Item) => {
                                return Number(total + num.price_final);
                              }, 0)
                            : 0}
                        </td>
                        <td>{order.status}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={6}>
                      <p>Không có đơn hàng nào.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('right-content')}>
            <div className={cx('user')}>
              <div className={cx('user-title')}>TÀI KHOẢN CỦA TÔI</div>
              <div className={cx('user-content')}>
                <div className={cx('user-name')}>
                  Tên tài khoản: <span>Vũ Đức Thắng</span>
                </div>
                <div className={cx('user-nation')}>
                  Quốc gia:<span>Vietnam</span>
                </div>
                <div className={cx('user-phone')}>
                  Số điện thoại: <span>+84{currentUser?.phone?.slice(1)}</span>
                </div>
                <Link className={cx('user-address')} href="/account/address">
                  Sổ địa chỉ ({currentUser.addressList?.length})
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
