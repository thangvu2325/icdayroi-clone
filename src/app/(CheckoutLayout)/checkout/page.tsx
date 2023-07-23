'use client';
import { FunctionComponent, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(CheckoutLayout)/checkout/CheckoutPage.module.scss';
import { IconCaretDown, IconChevronLeft, IconCreditCard, IconLogout } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { authSelector, cartSelector } from '@/redux/selectors';
import { Country, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { getStatesOfCountry } from 'country-state-city/lib/state';
import { addOrder } from '@/api/orderRequest';
import CheckBoxRadio from '@/components/CheckBoxRadio/CheckBoxRadio';
import { v4 as uuidv4 } from 'uuid';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Select from 'react-dropdown-select';
import { Value } from 'sass';

const cx = classNames.bind(styles);
interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: number;
  about?: { detail: string; specifications: string[]; image: string[] };
  slug: string;
}
type Cart = {
  newItem?: Item;
  listItem?: Item[];
};
interface address {
  _id: string;
  location: Array<string>;
  lastName: string;
  firstName: string;
  companyName: string;
  province: string;
  nation: string;
  zip: number;
  phone: string;
  default: boolean;
}
interface Ipayment {
  id: string;
  left: string;
  right?: ReactNode | string;
  detail?: {
    id: string;
    important?: boolean;
    content?: string;
  }[];
}
interface CheckoutPageProps {}

const CheckoutPage: FunctionComponent<CheckoutPageProps> = () => {
  const [addressList, setAddressList] = useState<address>({} as address);
  const [feeDelivery, setFeeDelivery] = useState<number>(40000);
  const [nameInput, setNameInput] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [citiesOfState, setCitiesOfState] = useState<ICity | Array<ICity>>([]);
  const [addressOption, setAddressOption] = useState<string>('');
  const [districtValue, setDistrictValue] = useState<string>('');
  const [states, setStates] = useState<string>('');
  const [noteValue, setNoteValue] = useState<string>('');
  const [isCheckFillForm, setIsCheckFillForm] = useState<boolean>(false);
  const [feeValue, setFeeValue] = useState<number>(0);
  const cart: Cart = useSelector(cartSelector);
  const currentUser: any = useSelector(authSelector).currentUser;
  const payment: Ipayment[] = [
    {
      id: uuidv4(),
      left: 'Ship COD',
      right: <IconCreditCard />,
      detail: [
        {
          id: uuidv4(),
          important: false,
          content: 'Khi nhận được hàng mới thanh toán toàn bộ số tiền.',
        },
        {
          id: uuidv4(),
          important: true,
          content: 'Lưu ý: Chỉ ship COD cho đơn hàng có giá trị hàng hóa từ 50.000đ trở lên.',
        },
      ],
    },
    {
      id: uuidv4(),
      left: 'Thanh toán trực tiếp tại cửa hàng',
      right: <IconCreditCard />,
      detail: [
        {
          id: uuidv4(),
          important: false,
          content: '- Vui lòng chọn vận chuyển là: Nhận hàng tại cửa hàng',
        },
        {
          id: uuidv4(),
          important: false,
          content: '- Khách hàng qua IC ĐÂY RỒI lấy hàng và thanh toán tại cửa hàng',
        },
      ],
    },
    {
      id: uuidv4(),
      left: 'Thanh toán qua MoMo hoặc ZaloPay',
      right: <IconCreditCard />,
      detail: [
        {
          id: uuidv4(),
          important: false,
          content: 'Chuyển tiền qua SĐT: 038 559 3358',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'Nội dung chuyển tiền ghi mã đơn hàng',
        },
      ],
    },
    {
      id: uuidv4(),
      left: 'Chuyển khoản qua ngân hàng VietcomBank',
      right: <IconCreditCard />,
      detail: [
        {
          id: uuidv4(),
          important: false,
          content: 'Chuyển khoản đúng số tiền vô số tài khoản VietcomBank theo thông tin sau',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'Tên: Cao Thị Ngọc Nhung',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'STK: 0381 000 516 975',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'VietcomBank chi nhánh: Thủ Đức, TP.HCM',
        },
      ],
    },
    {
      id: uuidv4(),
      left: 'Chuyển khoản qua ngân hàng VietinBank',
      right: <IconCreditCard />,
      detail: [
        {
          id: uuidv4(),
          important: false,
          content: 'Chuyển khoản đúng số tiền vô số tài khoản Vietinbank theo thông tin sau',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'Tên: Bùi Xuân Quang',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'STK: 105 002 822 030',
        },
        {
          id: uuidv4(),
          important: false,
          content: 'Vietinbank chi nhánh: Bình Thới, TP.HCM',
        },
      ],
    },
  ];
  const fee: Ipayment[] = [
    { id: uuidv4(), left: 'Giao hàng tận nơi', right: `${feeDelivery.toLocaleString()}₫` },
    { id: uuidv4(), left: 'Nhận hàng tại cửa hàng', right: 'Miễn phí' },
  ];
  console.log(feeValue);
  const handleChangeAddressList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const addressListSelect: address = currentUser._doc.addressList.find(
      (address: address) => address._id === e.target.value,
    );
    if (e.target.value === 'default') {
      setPhoneValue('');
      setNameInput('');
    } else {
      setAddressList(addressListSelect);
      setPhoneValue(addressListSelect?.phone?.slice(1));
      setNameInput(`${addressListSelect?.lastName} ${addressListSelect?.firstName}`);
    }
  };
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const handleChangePhoneValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(e.target.value);
  };
  const handleChangeStates = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCitiesOfState(
      City.getCitiesOfState(
        'VN',
        getStatesOfCountry('VN').find((state) => state.name === e.target.value)?.isoCode || '',
      ),
    );
    const statesValue: string = getStatesOfCountry('VN').find((state) => state.name === e.target.value)?.name || '';
    setStates(statesValue);
  };
  const handleChangeAddressOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressOption(e.target.value);
  };
  const handleChangeDistrictValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrictValue(e.target.value);
  };
  const handleChangeValueNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteValue(e.target.value);
  };
  const handleOrder = async () => {
    const order = {
      _id: currentUser._doc._id,
      addressReceive: addressOption,
      price: 400000,
      status: 'Đang tiến hành',
      province: states,
      district: districtValue,
      phone: phoneValue,
      email: emailValue,
      items: cart.listItem,
      note: noteValue,
      receiver: nameInput,
    };
    try {
      await addOrder(order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isFormFilled = phoneValue.length && states.length && districtValue.length && emailValue.length;
    setIsCheckFillForm(!isFormFilled);
  }, [districtValue, emailValue, phoneValue, states]);
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('main')}>
          <div className={cx('main-logo')}>
            <Image src="/assets/images/logo.png" width={242} height={54} alt="Picture in here is Logo" />
          </div>
          <div className={cx('main-content')}>
            <div className={cx('main-left')}>
              <div className={cx('main-address')}>
                <div className={cx('address-header')}>
                  <div className={cx('address-title')}>Thông tin nhận hàng</div>
                  <button className={cx('logout')}>
                    <IconLogout size={20} stroke={2} />
                    Đăng xuất
                  </button>
                </div>
                <div className={cx('address-content')}>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Sổ địa chỉ</span>
                    <select size={1} className={cx('field__input--select')} onChange={handleChangeAddressList}>
                      <option value="default">Địa chỉ khác...</option>
                      {currentUser._doc.addressList.map((address: address) => (
                        <option value={address._id} key={address._id}>
                          {address.firstName}
                        </option>
                      ))}
                    </select>
                    <IconCaretDown className={cx('field__caret')} />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Email</span>
                    <input
                      type="email"
                      className={cx('field__input--fill')}
                      value={emailValue}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Họ và tên</span>
                    <input
                      type="text"
                      className={cx('field__input--fill')}
                      value={nameInput}
                      onChange={handleNameInput}
                    />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Số điện thoại</span>
                    <input
                      type="text"
                      className={cx('field__input--fill')}
                      value={phoneValue}
                      onChange={handleChangePhoneValue}
                    />

                    {/* <select className={cx('field__option')}>
                      {Country.getAllCountries().map((country: ICountry) => {
                        <option value="1">
                          <input type="text" />
                        </option>;
                        return (
                          <option value={country.phonecode} key={country.isoCode}>
                            {country.name} +{country.phonecode}
                          </option>
                        );
                      })}
                    </select> */}
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Địa chỉ (tùy chọn)</span>
                    <input
                      type="text"
                      className={cx('field__input--fill')}
                      value={addressOption}
                      onChange={handleChangeAddressOption}
                    />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Tỉnh thành</span>
                    <select
                      size={1}
                      className={cx('field__input--select')}
                      value={states}
                      onChange={handleChangeStates}
                    >
                      <option value="default">---</option>
                      {getStatesOfCountry('VN').map((province: IState) => {
                        return (
                          <option value={province.name} key={province.isoCode}>
                            {province.name}
                          </option>
                        );
                      })}
                    </select>
                    <IconCaretDown className={cx('field__caret')} />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Quận huyện (tùy chọn)</span>
                    <select
                      size={1}
                      className={cx('field__input--select')}
                      value={districtValue}
                      onChange={handleChangeDistrictValue}
                    >
                      <option value="default">Địa chỉ khác...</option>
                      {Array.isArray(citiesOfState) &&
                        citiesOfState.map((city: ICity, index) => (
                          <option value={city.name} key={city.name}>
                            {city.name}
                          </option>
                        ))}
                    </select>
                    <IconCaretDown className={cx('field__caret')} />
                  </div>
                  <div className={cx('field__input')}>
                    <span className={cx('field__title')}>Ghi chú (tùy chọn)</span>
                    <textarea className={cx('field__input--fill')} value={noteValue} onChange={handleChangeValueNote} />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('main-right')}>
              <div className={cx('right-title')}>Vận chuyển</div>
              {isCheckFillForm ? (
                <div className={cx('pay-method-content')}>
                  <CheckBoxRadio data={fee} action={setFeeValue} />
                </div>
              ) : (
                <div className={cx('right-warn')}>Vui lòng nhập thông tin giao hàng</div>
              )}

              <div className={cx('pay-method')}>
                <div className={cx('pay-method-title')}>Thanh toán</div>
                <div className={cx('pay-method-content')}>
                  <CheckBoxRadio data={payment} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('order')}>
          <div className={cx('order-title')}>Đơn hàng (3 sản phẩm)</div>
          <div className={cx('order-product-list')}>
            {cart.listItem?.length
              ? cart?.listItem.map((item) => {
                  return (
                    <div className={cx('product')} key={item._id}>
                      <div className={cx('product-logo')}>
                        <Image src={item.img_small} width={50} height={50} alt="img item" />
                        <div className={cx('product-qty')}>{item.qty}</div>
                      </div>
                      <div className={cx('product-title')}>{item.name}</div>
                      <div className={cx('product-price')}>{item.price_final.toLocaleString()}₫</div>
                    </div>
                  );
                })
              : ''}
          </div>
          <div className={cx('order-coupon')}>
            <div className={cx('coupon-input-wrap')}>
              <span className={cx('coupon-title')}>Nhập mã giảm giá</span>
              <input type="text" className={cx('coupon-input')} />
            </div>
            <button className={cx('coupon-btn')}>Áp dụng</button>
          </div>
          <div className={cx('order-cost')}>
            <div className={cx('cost-top')}>
              <div className={cx('top-title')}>Tạm Tính</div>
              <div className={cx('top-price')}>
                {cart.listItem
                  ?.reduce((sum, item) => {
                    return sum + item.price_final;
                  }, 0)
                  .toLocaleString()}
                ₫
              </div>
              <div className={cx('top-title')}>Phí vận chuyển</div>
              <div className={cx('top-price')}>-</div>
            </div>
            <div className={cx('cost-bottom')}>
              <div className={cx('bottom-header')}>
                <div className={cx('bottom-title')}>Tổng cộng</div>
                <div className={cx('bottom-price')}>
                  {cart.listItem
                    ?.reduce((sum, item) => {
                      return sum + item.price_final;
                    }, 0)
                    .toLocaleString()}
                  ₫
                </div>
              </div>
              <div className={cx('action')}>
                <div className={cx('back-btn')}>
                  <Link href="/cart">
                    <IconChevronLeft />
                    Quay về giỏ hàng
                  </Link>
                </div>
                <button onClick={handleOrder} className={cx('purchase-btn')}>
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
