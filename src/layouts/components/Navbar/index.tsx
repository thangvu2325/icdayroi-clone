'use client';
import classNames from 'classnames/bind';
import styles from '@/layouts/components/Navbar/Navbar.module.scss';
import Link from 'next/link';
import { FunctionComponent, ReactNode } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';
import Image from 'next/image';
import { IconChevronDown, IconHome } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { filterListSelector } from '@/redux/selectors';

interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: string;
  about?: { detail: string; specifications: string[]; specifications_img: string[] };
  slug: string;
}
interface Filter {
  _id: string;
  title: string;
  subFilter?: [{ subTitle: string; _id: string; item: Item[] }];
  item?: Item[];
  slug: string;
}
const cx = classNames.bind(styles);
interface NavbarProps {}
const Navbar: FunctionComponent<NavbarProps> = (): ReactNode => {
  // const [data, setData] = useState<Filter[]>([]);
  const filterList: Filter[] = useSelector(filterListSelector);
  return (
    <nav className={cx('wrap')}>
      <div className={cx('dash')}>
        <div className={cx('container')}>
          <div className={cx('left')}>
            <div className={cx('btn')}>
              <Link href="/">
                <span className={cx('list')}>
                  <IconHome stroke={2} size={16} className={cx('icon-left')} />
                  TRANG CHỦ
                </span>
              </Link>
            </div>
            <div className={cx('btn')}>
              <Tippy
                hideOnClick={true}
                interactive
                delay={[0, 700]}
                placement="bottom-end"
                offset={[117, 18]}
                render={(attrs) => (
                  <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    {filterList.map(
                      (item, index): ReactNode => (
                        <Tippy
                          key={index}
                          hideOnClick={true}
                          interactive
                          placement="right-end"
                          offset={[0, 0]}
                          render={(attrs) => (
                            <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                              {item.subFilter &&
                                item.subFilter.map((subfilter, subindex) => (
                                  <div key={subindex} className={cx('item')}>
                                    <h3 className={cx('item-title')}>{subfilter.subTitle}</h3>
                                  </div>
                                ))}
                            </div>
                          )}
                        >
                          <Link href={item.slug}>
                            <div className={cx('item')}>
                              <h3 className={cx('item-title')}>{item.title}</h3>
                            </div>
                          </Link>
                        </Tippy>
                      ),
                    )}
                  </div>
                )}
              >
                <Link href="/collections/all">
                  <span className={cx('list')}>
                    SẢN PHẨM
                    <IconChevronDown stroke={2} size={14} className={cx('icon-right')} />
                  </span>
                </Link>
              </Tippy>
            </div>
            <div className={cx('btn')}>
              <Link href="/cat-khac-laser">CẮT KHẮC LASER</Link>
            </div>
            <div className={cx('btn')}>
              <Link href="/tin-tuc">BLOG</Link>
            </div>
            <div className={cx('btn')}>
              <Link href="/gioi-thieu">GIỚI THIỆU</Link>
            </div>
            <div className={cx('btn')}>
              <Link href="/lien-he">LIÊN HỆ</Link>
            </div>
          </div>
          <div className={cx('right')}>
            <Image src="/assets/images/call_white.png" width={30} height={30} alt="Picture in here is Logo" />
            <span className={cx('hotline')}>Hotline : (028) 62700104</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
