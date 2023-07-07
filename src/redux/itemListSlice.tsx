import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
// Tạo action creator bất đồng bộ sử dụng createAsyncThunk
export const fetchInitialData = createAsyncThunk('FilterListSlice/fetchInitialData', async () => {
  const response = await fetch('http://localhost:3001/api/listFilters'); // Gọi API để lấy dữ liệu
  const data = await response.json();
  return data;
});
export default createSlice({
  name: 'itemList',
  initialState: [
    {
      id: '1',
      name: 'Anten 433Mhz 35dBi SMA Đực 5M',
      img: '/assets/images/item1.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '250.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',
      about: {
        detail:
          'Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.',
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 1,
    },
    {
      id: '2',
      name: 'Mạch WiFi Bluetooth ESP32-PICO-KIT',
      img: '/assets/images/item2.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '380.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',

      about: {
        detail: `Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.
        `,
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 2,
    },
    {
      id: '3',
      name: 'Mạch RF thu phát Wifi BLE ESP32-S2-WROVER-I 4MB',
      img: '/assets/images/item3.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '115.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',

      about: {
        detail: `Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.
        Thông số kỹ thuật
        `,
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 1,
    },
    {
      id: '4',
      name: 'Mạch RF thu phát Wifi BLE ESP32-WROVER-IB 16MB',
      img: '/assets/images/item4.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '125.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',

      about: {
        detail: `Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.
        Thông số kỹ thuật
        `,
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 100,
    },
    {
      id: '5',
      name: 'Kit ESP32 Bluetooth WIFI OLED 0.96inch V3',
      img: '/assets/images/item5.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '420.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',

      about: {
        detail: `Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.
        Thông số kỹ thuật
        `,
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 100,
    },
    {
      id: '6',
      name: 'Cảm biến mực chất lỏng không tiếp xúc XKC-Y26-NPN',
      img: '/assets/images/item6.jpg',
      imgLarge: '/assets/images/item1-large.jpg',
      price: '160.000',
      path: 'Anten-433Mhz-35dBi-SMA-Đực-5M',

      about: {
        detail: `Anten 433Mhz 35dBi SMA Đực 5M được sử dụng cho các thiết bị truyền nhận RF Lora tần số 433Mhz. Thân anten được làm bằng đồng nguyên chất giúp tăng công suất khuếch đại tối đa lên đến 35dbi.
        Thông số kỹ thuật
        `,
        specifications: [
          'Dải tần: 433 Mhz',
          'Độ lợi: 35 dBi',
          'Công suất: 50W',
          'Trở kháng: 50Ω',
          'Tỷ lệ sóng đứng: <= 1.5 (db)',
          'Phân cực: Phân cực dọc',
          'Đầu ra: cổng SMA (kim bên trong)',
          'Chiều dài cable: 5 mét',
          'Chất liệu dây cable: RG-58 / U-500HM',
          'Nhiệt độ làm việc: -40 ℃ ~ + 85 ℃',
          'Chiều dài tổng thể: 21cm',
        ],
        image: ['/assets/images/item1-about.webp'],
      },
      available: true,
      count: 100,
    },
  ],
  reducers: {
    addItem: (state: any[], action: { payload: any }) => {
      state.push(action.payload);
    },
  },
});
