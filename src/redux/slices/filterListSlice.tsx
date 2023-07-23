import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: number;
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

export const fetchFilterData: any = createAsyncThunk('filterList/fetchData', async () => {
  const response = await fetch('http://localhost:3001/api/listFilters'); // Gọi API để lấy dữ liệu
  const data = await response.json();
  return data;
});

export default createSlice({
  name: 'filterList',
  initialState: {
    data: [] as Filter[],
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchFilterData.fulfilled, (state, action) => {
        state.loading = 'success';
        state.data = action.payload;
      })
      .addCase(fetchFilterData.rejected, (state) => {
        state.loading = 'error';
      });
  },
});
