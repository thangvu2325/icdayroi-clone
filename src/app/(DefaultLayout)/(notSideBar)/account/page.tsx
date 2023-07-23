'use client';
import { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/AccountPage.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { authSelector } from '@/redux/selectors';
const cx = classNames.bind(styles);
interface Order {
  orderId: string;
  addressReceive: string;
  orderValue: number;
  status: string;
  date: string;
  Receiver: string;
}
interface User {
  _id: string;
  name: string;
  addressList: Array<Object>;
  roles: Array<Object>;
  email: string;
  phone: string;
  orders: Order[];
}

interface AccountPageProps {}

const AccountPage: FunctionComponent<AccountPageProps> = () => {
  const currentUser: User = useSelector(authSelector).currentUser._doc;
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
                  {currentUser?.orders?.map((order) => {
                    return (
                      <tr key={order?.orderId}>
                        <td>{order.date}</td>
                        <td>{order.Receiver}</td>
                        <td>{order.addressReceive}</td>
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
                  Số điện thoại: <span>+84{currentUser.phone.slice(1)}</span>
                </div>
                <Link className={cx('user-address')} href="/account/address">
                  Sổ địa chỉ ({currentUser.addressList.length})
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
