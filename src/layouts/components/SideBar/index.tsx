import classNames from 'classnames/bind';
import styles from '@/layouts/components/SideBar/SideBar.module.scss';
import { FunctionComponent, ReactNode } from 'react';
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconMenu2 } from '@tabler/icons-react';
import ItemList from '@/components/ItemList';
import Image from 'next/image';
const cx = classNames.bind(styles);
interface Item {
  title: string;
  link: string;
  subItem: Item[] | '';
}
export const listItem: Item[] = [
  {
    title: 'RASPBERRY PI',
    link: '/raspberry-pi',
    subItem: '',
  },
  {
    title: 'ARDUINO',
    link: '/arduino',
    subItem: '',
  },
  {
    title: 'MÀN HÌNH LCD',
    link: '/man-hinh-lcd',
    subItem: '',
  },
  {
    title: 'CNC & PRINTER 3D',
    link: '/man-hinh-lcd',
    subItem: '',
  },
  {
    title: 'MẠCH NẠP & KÍT PHÁT TRIỂN',
    link: '',
    subItem: [
      {
        title: 'Mạch nạp',
        link: '',
        subItem: '',
      },
      {
        title: 'Kít phát triển',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'MODULE',
    link: '',
    subItem: [
      {
        title: 'Tất cả',
        link: '/module',
        subItem: '',
      },
      {
        title: 'Camera',
        link: '/camera',
        subItem: '',
      },
      {
        title: 'RF & Bluetooth & Wifi',
        link: '/rf-bluetoorh-wifi',
        subItem: '',
      },
      {
        title: 'SIM & GPRS & GPS',
        link: 'sim-gpgs-gps',
        subItem: '',
      },
      {
        title: 'Âm thanh & Loa',
        link: 'amthanh-loa',
        subItem: '',
      },
      {
        title: 'Dimmer & Tạo xung',
        link: '',
        subItem: '',
      },
      {
        title: 'Thời gian & Hiển thị',
        link: '',
        subItem: '',
      },
      {
        title: 'Giao tiếp & Chuyển đổi',
        link: '',
        subItem: '',
      },
      {
        title: 'Driver',
        link: '',
        subItem: '',
      },
      {
        title: 'Module nguồn',
        link: '',
        subItem: '',
      },
      {
        title: 'Module Relay',
        link: '',
        subItem: '',
      },
      {
        title: 'Telephone & Bàn phím',
        link: '',
        subItem: '',
      },
      {
        title: 'Sò nóng lạnh',
        link: '',
        subItem: '',
      },
      {
        title: 'Module LED laser',
        link: '',
        subItem: '',
      },
      {
        title: 'Remote & Mạch thu phát RF',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'NGUỒN',
    link: '',
    subItem: [
      {
        title: 'Tất cả',
        link: '',
        subItem: '',
      },
      {
        title: 'Nguồn xung (Tổ ong)',
        link: '',
        subItem: '',
      },
      {
        title: 'Adapter',
        link: '',
        subItem: '',
      },
      {
        title: 'DC - DC',
        link: '',
        subItem: '',
      },
      {
        title: 'AC - DC',
        link: '',
        subItem: '',
      },
      {
        title: 'Jack cắm',
        link: '',
        subItem: '',
      },
      {
        title: 'Pin & Sạc',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến áp',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'CẢM BIẾN',
    link: '',
    subItem: [
      {
        title: 'Tất cả',
        link: '',
        subItem: '',
      },
      {
        title: 'Âm thanh & Ánh sáng & Màu sắc',
        link: '',
        subItem: '',
      },
      {
        title: 'Khoảng cách & Vật cản',
        link: '',
        subItem: '',
      },
      {
        title: 'Nhiệt độ & Độ ẩm & Mưa',
        link: '',
        subItem: '',
      },
      {
        title: 'Góc & Gia tốc & La bàn',
        link: '',
        subItem: '',
      },
      {
        title: 'Nhịp tim & Vân tay',
        link: '',
        subItem: '',
      },
      {
        title: 'Chuyển động & Rung',
        link: '',
        subItem: '',
      },
      {
        title: 'Dò line & Encoder',
        link: '',
        subItem: '',
      },
      {
        title: 'Khí & Gas & PH',
        link: '',
        subItem: '',
      },
      {
        title: 'Kim loại & Điện dung',
        link: '',
        subItem: '',
      },
      {
        title: 'Hồng ngoại',
        link: '',
        subItem: '',
      },
      {
        title: 'Dòng điện & Điện thế & Sinh Học',
        link: '',
        subItem: '',
      },
      {
        title: 'Áp suất, Lưu lượng & Cân nặng',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'ĐỘNG CƠ & ROBOT',
    link: '',
    subItem: [
      {
        title: 'Tất cả',
        link: '',
        subItem: '',
      },
      {
        title: 'Mạch điều khiển',
        link: '',
        subItem: '',
      },
      {
        title: 'Động cơ',
        link: '',
        subItem: '',
      },
      {
        title: 'Robot & Phụ kiện',
        link: '',
        subItem: '',
      },
      {
        title: 'Pin & Sạc',
        link: '',
        subItem: '',
      },
      {
        title: 'Servo & Phụ kiện',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'IC',
    link: '',
    subItem: [
      {
        title: 'MCU & MPU',
        link: '',
        subItem: '',
      },
      {
        title: 'Memory ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Interface & Network ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Power Management ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Linear ICs & Digital',
        link: '',
        subItem: '',
      },
      {
        title: 'Logic ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Optoisolators',
        link: '',
        subItem: '',
      },
      {
        title: 'Clocks & Timers ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Sensors, Transducers',
        link: '',
        subItem: '',
      },
      {
        title: 'Data Conversion ICs',
        link: '',
        subItem: '',
      },
      {
        title: 'Driver & Motor control ICs',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'DIODE & ZENER',
    link: '',
    subItem: [
      {
        title: 'Diode DIP',
        link: '',
        subItem: '',
      },
      {
        title: 'Diode SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Zener',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'TRANSISTORS & TRIACS',
    link: '',
    subItem: [
      {
        title: 'Transistors',
        link: '',
        subItem: '',
      },
      {
        title: 'Triacs & Thyristor',
        link: '',
        subItem: '',
      },
      {
        title: 'Diacs',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'MOSFETS & FETS',
    link: '',
    subItem: '',
  },
  {
    title: 'LED',
    link: '',
    subItem: [
      {
        title: 'Led SMD 0805',
        link: '',
        subItem: '',
      },
      {
        title: 'Led SMD 0603',
        link: '',
        subItem: '',
      },
      {
        title: 'Led trong 3mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led đục 3MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Led màu 3mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led trong 5mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led đục 5mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led màu 5mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led 8mm & 10mm',
        link: '',
        subItem: '',
      },
      {
        title: 'Led 7 đoạn',
        link: '',
        subItem: '',
      },
      {
        title: 'Led matrix',
        link: '',
        subItem: '',
      },
      {
        title: 'Led RGB & Led công suất',
        link: '',
        subItem: '',
      },
      {
        title: 'Led 3528 & 1206 & 5050 & 5730',
        link: '',
        subItem: '',
      },
      {
        title: 'Led thanh 5050 và led dây 5050',
        link: '',
        subItem: '',
      },
      {
        title: 'Đèn báo',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'TỤ ĐIỆN',
    link: '',
    subItem: [
      {
        title: 'Tụ 0603 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ 0805 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ 1206 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ nhôm SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ hóa',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ gốm',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ kẹo & Tụ mica & Tụ vàng',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ Multilayer Ceramic',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ tantalum',
        link: '',
        subItem: '',
      },
      {
        title: 'Tụ cao áp & Siêu tụ & Tụ quạt',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'ĐIỆN TRỞ',
    link: '',
    subItem: [
      {
        title: 'Điện trở SMD 0603',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở SMD 0805',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở SMD 1206',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 1/4w 5%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 1/4w 1%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 1/2w 5%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 1W 5%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 1W 1%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 2W 5%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 2W 1%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở 3W 1%',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở sứ 5W',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở thanh',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở công suất',
        link: '',
        subItem: '',
      },
      {
        title: 'Điện trở shunt',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'BIẾN TRỞ',
    link: '',
    subItem: [
      {
        title: 'Biến trở volume',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở 3362P & 3006P',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở tinh chỉnh 3296W & 3296X',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở cúc áo & Biến trở RM063',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở RK097G & RV12MM & RV09',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở 3590S-2 & WXD3-13-2W & RV24YN20S',
        link: '',
        subItem: '',
      },
      {
        title: 'Triết áp có công tắc WH138 & WTH118-2W & WX112',
        link: '',
        subItem: '',
      },
      {
        title: 'Biến trở WH5-1A & WX14-12',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'CUỘN CẢM',
    link: '',
    subItem: [
      {
        title: 'Cuộn cảm cắm 0912',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm TC5026',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm vạch 1/4w 0307',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD 0603 & 0805 & 1206',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD CD43',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD CD74R',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD CD75',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD 5D28',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD CD104',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD CD127',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn cảm SMD 0630',
        link: '',
        subItem: '',
      },
      {
        title: 'Cuộn lọc UU9.8',
        link: '',
        subItem: '',
      },
      {
        title: 'Lõi Ferrite',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'THẠCH ANH',
    link: '',
    subItem: [
      {
        title: 'Thạch anh HC49 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Thạch anh HC49 DIP',
        link: '',
        subItem: '',
      },
      {
        title: 'Thạch anh 5032 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Thạch anh 3225 SMD',
        link: '',
        subItem: '',
      },
      {
        title: 'Các loại thạch anh khác',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'CONNECTOR & JACK',
    link: '',
    subItem: [
      {
        title: 'Terminal 3.81MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Terminal HT3.96',
        link: '',
        subItem: '',
      },
      {
        title: 'Terminal 5.08MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Terminal KF142R/KF142V 5.08MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Domino',
        link: '',
        subItem: '',
      },
      {
        title: 'RJ45',
        link: '',
        subItem: '',
      },
      {
        title: 'Jack',
        link: '',
        subItem: '',
      },
      {
        title: 'Header & Jumper',
        link: '',
        subItem: '',
      },
      {
        title: 'DB Connectors',
        link: '',
        subItem: '',
      },
      {
        title: 'USB Connectors',
        link: '',
        subItem: '',
      },
      {
        title: 'SD card socket',
        link: '',
        subItem: '',
      },
      {
        title: 'IDC Sockets',
        link: '',
        subItem: '',
      },
      {
        title: 'IDC Box Header',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector 1.25MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector PH2.0 2.0MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector XH2.54MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector VH3.96MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector CH3.96MM & CH5.08MM',
        link: '',
        subItem: '',
      },
      {
        title: 'Connector KF2510 2.54MM & Dupont',
        link: '',
        subItem: '',
      },
      {
        title: 'Socket FPC 0.5MM',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'LINH KIỆN KHÁC',
    link: '',
    subItem: [
      {
        title: 'Relay',
        link: '',
        subItem: '',
      },
      {
        title: 'Đế IC',
        link: '',
        subItem: '',
      },
      {
        title: 'Cầu chì',
        link: '',
        subItem: '',
      },
      {
        title: 'Tản nhiệt',
        link: '',
        subItem: '',
      },
      {
        title: 'Nút nhấn',
        link: '',
        subItem: '',
      },
      {
        title: 'Ống co nhiệt',
        link: '',
        subItem: '',
      },
      {
        title: 'Dây cáp các loại',
        link: '',
        subItem: '',
      },
      {
        title: 'Loa & Còi & Mic',
        link: '',
        subItem: '',
      },
      {
        title: 'Công tắc & Switch',
        link: '',
        subItem: '',
      },
      {
        title: 'Dây bus & Dây điện',
        link: '',
        subItem: '',
      },
      {
        title: 'Trụ đồng & Trụ nhựa',
        link: '',
        subItem: '',
      },
      {
        title: 'SD card socket',
        link: '',
        subItem: '',
      },
      {
        title: 'Antenna & SMA-KE/KWE',
        link: '',
        subItem: '',
      },
      {
        title: 'Khóa & Khóa điện',
        link: '',
        subItem: '',
      },
    ],
  },
  {
    title: 'DỤNG CỤ LÀM MẠCH',
    link: '',
    subItem: [
      {
        title: 'Phụ kiện mạch',
        link: '',
        subItem: '',
      },
      {
        title: 'Dụng cụ hàn, Mũi hàn',
        link: '',
        subItem: '',
      },
      {
        title: 'Chì hàn, Thiếc hàn',
        link: '',
        subItem: '',
      },
      {
        title: 'Đồng hồ VOM, Máy đo',
        link: '',
        subItem: '',
      },
      {
        title: 'Hộp, Ngăn đựng',
        link: '',
        subItem: '',
      },
      {
        title: 'Khoan, Mũi khoan, Đầu kẹp, Mài',
        link: '',
        subItem: '',
      },
      {
        title: 'Breadboard, Board đồng',
        link: '',
        subItem: '',
      },
      {
        title: 'Thực hành & Test',
        link: '',
        subItem: '',
      },
    ],
  },
];
interface SidebarProps {}
const Sidebar: FunctionComponent<SidebarProps> = (): ReactNode => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('icon')}>
            <IconMenu2 size={14} stroke={4} />
          </div>
          <h2 className={cx('title')}>DANH MỤC SẢN PHẨM</h2>
        </div>
        <ItemList items={listItem} />
      </div>
      <div className={cx('support')}>
        <div className={cx('support-header')}>
          <div className={cx('support-header-content')}>HỖ TRỢ TRỰC TUYẾN</div>
        </div>
        <div className={cx('support-body')}>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Tư vấn bán hàng</div>
              <div className={cx('contact')}>
                Mrs. Nhung: <span className={cx('phone')}>038 559 3358</span>
              </div>
            </div>
          </div>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Tư vấn kỹ thuật</div>
              <div className={cx('contact')}>
                Mr. Quang: <span className={cx('phone')}>035 618 4078</span>
              </div>
            </div>
          </div>
          <div className={cx('body-content')}>
            <div className={cx('support-img')}>
              <Image src="/assets/images/support-online.png" alt="img support" width={19} height={19} />
            </div>
            <div className={cx('support-detail')}>
              <div className={cx('title')}>Email liên hệ</div>
              <div className={cx('contact')}>icdayroi@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('news')}>
        <div className={cx('news-header')}>
          TIN TỨC
          <div className={cx('news-action')}>
            <IconChevronLeft width={20} height={20} />
            <IconChevronRight width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
