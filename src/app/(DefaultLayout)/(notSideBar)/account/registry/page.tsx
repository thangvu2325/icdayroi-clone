import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/registry/RegistryPage.module.scss';
import { FunctionComponent } from 'react';
import { IconLockOpen } from '@tabler/icons-react';
const cx = classNames.bind(styles);
interface RegistryPageProps {}

const RegistryPage: FunctionComponent<RegistryPageProps> = () => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>THÔNG TIN CÁ NHÂN</h4>
        </div>
        <div className={cx('content')}>
          <div className={cx('left')}>
            <div className={cx('content-email')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Họ và Tên
                <span className={cx('require')}>*</span>
              </label>
              <input type="text" className={cx('inputName')} />
            </div>
            <div className={cx('content-password')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Mật khẩu
                <span className={cx('require')}>*</span>
              </label>
              <input type="password " className={cx('inputPassword')} />
            </div>
            <div className={cx('action')}>
              <div className={cx('action-recei')}>
                <input type="checkbox" />
                <label htmlFor="Đăng ký nhận thông tin">Đăng ký nhận thông tin qua email</label>
              </div>
              <button
                className={cx('btn', {
                  'btn-login': true,
                })}
              >
                <IconLockOpen size={12} className={cx('icon-lock')} />
                ĐĂNG KÝ
              </button>
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('content-email')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Địa chỉ Email
                <span className={cx('require')}>*</span>
              </label>
              <input type="text" className={cx('inputEmail')} />
            </div>
            <div className={cx('content-password')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Nhập lại mật khẩu
                <span className={cx('require')}>*</span>
              </label>
              <input type="password " className={cx('inputPassword')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryPage;
