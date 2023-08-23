'use client';
import classNames from 'classnames/bind';
import { FunctionComponent, ReactNode } from 'react';
import styles from '@/layouts/components/Footer/Footer.module.scss';
import { FacebookProvider, Page } from 'react-facebook';
import Link from 'next/link';
import Image from 'next/image';
const cx = classNames.bind(styles);

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = (): ReactNode => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('top-contact')}>
            <p className={cx('text-header')}>HỘ KINH DOANH LINH KIỆN ĐIỆN TỬ IC ĐÂY RỒI</p>
            <p className={cx('text')}>MST 0314342572 được cấp ngày 04/11/2017 do Sở KH và ĐT TP HCM cấp</p>
            <p className={cx('text')}>Hotline: 0385593358</p>
            <p className={cx('text')}>Email: icdayroi@gmail.com</p>
            <p className={cx('text')}>Địa chỉ: 04 Đường số 7, Khu phố 3, P. Linh Trung, Q. Thủ Đức, Tp. HCM</p>
            <p className={cx('text-last')}>Người đại diện theo pháp luật: Cao Thị Ngọc Nhung</p>
            <strong className={cx('text-footer')}>Thời gian làm việc</strong>
            <p className={cx('text-footer-child')}>T2 - T6 : Sáng 7h30 &gt; 12h00 : Chiều 13h30 &gt; 20h00</p>
            <p className={cx('text-footer-child-last')}>T7 - CN: Sáng 8h00 &gt; 12h00 : Chiều 13h30 &gt; 17h00</p>
          </div>
          <div className={cx('top-policy')}>
            <div className={cx('top-policy-title')}>CHÍNH SÁCH MUA HÀNG</div>
            <Link href="/" className={cx('top-policy-text')}>
              Chính sách bảo hành, đổi trả
            </Link>
            <Link href="/" className={cx('top-policy-text')}>
              Chính sách bảo mật thông tin
            </Link>
            <Link href="/" className={cx('top-policy-text')}>
              Chính sách giao nhận và thanh toán
            </Link>
            <Link href="/" className={cx('top-policy-text')}>
              Hướng dẫn mua hàng
            </Link>
            <Link href="/" className={cx('top-policy-text')}>
              Đăng ký thành viên
            </Link>
          </div>
          <div className={cx('top-fanpage')}>
            <div className={cx('top-fanpage-content')}>
              <FacebookProvider appId="930949868024444">
                <Page href="https://www.facebook.com/721024804741623?ref=embed_page" tabs="timeline" height={200} />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <div className={cx('middle')}>
          <div className={cx('cash')}>
            <h2 className={cx('cash-title')}>HỖ TRỢ THANH TOÁN</h2>
            <div className={cx('thanh-toan')}>
              <Image src="/assets/images/payment-1.jpg" width={65} height={40} alt="cash" />
              <Image src="/assets/images/payment-2.jpg" width={65} height={40} alt="cash" />
              <Image src="/assets/images/payment-3.jpg" width={65} height={40} alt="cash" />
              <Image src="/assets/images/payment-4.jpg" width={65} height={40} alt="cash" />
              <Image src="/assets/images/payment-5.jpg" width={65} height={40} alt="cash" />
            </div>
          </div>
          <div className={cx('thac-mac')}>
            <h2 className={cx('thacmac-title')}>GIẢI ĐÁP THẮC MẮC</h2>
            <div className={cx('phone')}>
              <div className={cx('tu-van')}>
                <Image src="/assets/images/tuvan.png" alt="phone" width={33} height={33} className={cx('tu-van-img')} />
                <div className={cx('tu-van-text')}>
                  <div className={cx('tu-van-top')}>Tư vấn miễn phí (24/7)</div>
                  <div className={cx('tu-van-bottom')}>(028) 62700104</div>
                </div>
              </div>
              <div className={cx('phan-anh')}>
                <div className={cx('phan-anh-text')}>
                  <div className={cx('phan-anh-top')}>Góp ý, phản ánh (8h00 - 20h00)</div>
                  <div className={cx('phan-anh-bottom')}>038 559 3358</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('store')}>
            <h2 className={cx('store-title')}>CỬA HÀNG IC ĐÂY RỒI</h2>
            <div className={cx('store-content')}>
              <div className={cx('content-left')}>
                <p className={cx('content-text')}>
                  Ngân hàng Vietinbank chi nhánh Bình Thới, TP.HCM - Tên: Bùi Xuân Quang - STK: 105 002 822 030
                </p>
                <p className={cx('content-text')}>
                  Ngân hàng VietcomBank chi nhánh Thủ Đức, TP.HCM - Tên: Cao Thị Ngọc Nhung - STK: 0381 000 516 975
                </p>
              </div>
              <div className={cx('content-middle')}>
                <p className={cx('content-text')}>
                  Địa chỉ: 4 Đường số 7, P. Linh Trung, Q. Thủ Đức, TP.HCM (Cạnh số nhà 113 đường Hoàng Diệu 2)
                </p>
                <p className={cx('content-text')}>
                  Điện thoại: (028) 62700104 - 038 559 3358 - Email: icdayroi@gmail.com
                </p>
              </div>
              <div className={cx('content-right')}>
                <Image src="/assets/images/bocongthuong.png" alt="bocongthuongimg" height={70} width={185} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
