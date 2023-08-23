'use client';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/login/LoginPage.module.scss';
import { FunctionComponent, SetStateAction, useState } from 'react';
import { IconLockOpen } from '@tabler/icons-react';
import { loginUser } from '@/redux/user/apiRequest';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '@/redux/selectors';
import { useRouter } from 'next/navigation';
const cx = classNames.bind(styles);
interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const handleChangeInputEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmailValue(e.target.value);
  };
  const handleChangeInputPassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPasswordValue(e.target.value);
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUser: any = useSelector(authSelector).currentUser;
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser = {
      email: emailValue,
      password: passwordValue,
    };
    loginUser(newUser, dispatch, router);
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <div className={cx('title')}>
            <h4>THÔNG TIN CÁ NHÂN</h4>
          </div>
          <div className={cx('content')}>
            <div className={cx('content-email')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Email của bạn
                <span className={cx('require')}>*</span>
              </label>
              <input type="text" className={cx('inputEmail')} value={emailValue} onChange={handleChangeInputEmail} />
            </div>
            <div className={cx('content-password')}>
              <label htmlFor="email" className={cx('titleInput')}>
                Mật khẩu
                <span className={cx('require')}>*</span>
              </label>
              <input
                type="password"
                className={cx('inputPassword')}
                value={passwordValue}
                onChange={handleChangeInputPassword}
              />
            </div>
            <div className={cx('action')}>
              <button
                className={cx('btn', {
                  'btn-login': true,
                })}
                onClick={handleLogin}
              >
                <IconLockOpen size={12} className={cx('icon-lock')} />
                ĐĂNG NHẬP
              </button>
              <button
                className={cx('btn', {
                  'btn-forget': true,
                })}
              >
                Quên mật khẩu?
              </button>
            </div>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('title')}>
            <h4>BẠN CHƯA CÓ TÀI KHOẢN</h4>
          </div>
          <div className={cx('content')}>
            <p className={cx('text')}>
              Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính
              sách và ưu đãi cho các thành viên
            </p>
            <Link href="/account/registry" className={cx('btn-registry')}>
              {' '}
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
