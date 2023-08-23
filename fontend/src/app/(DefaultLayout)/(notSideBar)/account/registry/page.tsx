'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/registry/RegistryPage.module.scss';
import { FunctionComponent, useState } from 'react';
import { IconLockOpen } from '@tabler/icons-react';
import { registerUser } from '@/redux/user/apiRequest';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
const cx = classNames.bind(styles);
interface RegistryPageProps {}

const RegistryPage: FunctionComponent<RegistryPageProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };
  const isFillInput = (): boolean => {
    if (email && name && password && rePassword && password === rePassword) {
      return true;
    }
    return false;
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignup = () => {
    if (isFillInput()) {
      const user = {
        name,
        email,
        password,
      };
      registerUser(user, dispatch, router);
    }
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <h4>THÔNG TIN CÁ NHÂN</h4>
        </div>
        <div className={cx('content')}>
          <div className={cx('left')}>
            <div className={cx('content-name')}>
              <label htmlFor="name" className={cx('titleInput')}>
                Họ và Tên
                <span className={cx('require')}>*</span>
              </label>
              <input type="text" className={cx('inputName')} value={name} onChange={handleChangeName} />
            </div>
            <div className={cx('content-password')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Mật khẩu
                <span className={cx('require')}>*</span>
              </label>
              <input
                type="password "
                className={cx('inputPassword')}
                value={password}
                onChange={handleChangePassword}
              />
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
                onClick={handleSignup}
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
              <input type="text" className={cx('inputEmail')} value={email} onChange={handleChangeEmail} />
            </div>
            <div className={cx('content-password')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Nhập lại mật khẩu
                <span className={cx('require')}>*</span>
              </label>
              <input
                type="password "
                className={cx('inputPassword')}
                value={rePassword}
                onChange={handleChangeRePassword}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryPage;
