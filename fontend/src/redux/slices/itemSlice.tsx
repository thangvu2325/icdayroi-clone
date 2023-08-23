import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from '@/types/frontEnd';
export const fetchItemData: any = createAsyncThunk('item/fetchData', async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/item', {
      params: { page: 1 },
      withCredentials: true,
    });
    const data = (await res.data) as Item[];
    return data;
  } catch (err) {
    console.error('Error fetching item data:', err);
    throw err; // Ném lỗi để Redux Toolkit xử lý
  }
});

export default createSlice({
  name: 'item',
  initialState: {
    data: [] as Item[],
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchItemData.fulfilled, (state, action) => {
        state.loading = 'success';
        state.data = action.payload;
      })
      .addCase(fetchItemData.rejected, (state) => {
        state.loading = 'error';
      });
  },
});
