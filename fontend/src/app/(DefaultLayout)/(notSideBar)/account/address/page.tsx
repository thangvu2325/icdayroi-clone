import { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from '@/app/(DefaultLayout)/(notSideBar)/account/address/AddressPage.module.scss';
const cx = classNames.bind(styles);
interface AddressPageProps {}

const AddressPage: FunctionComponent<AddressPageProps> = () => {
  return <div className={cx('wrap')}></div>;
};

export default AddressPage;
