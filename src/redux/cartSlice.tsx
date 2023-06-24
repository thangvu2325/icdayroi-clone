import { createSlice } from '@reduxjs/toolkit';

interface Item {
  name: string;
  id: string;
  img: string;
  imgLarge?: string;
  price: string;
  about?: string[];
  available: boolean;
  count: number;
}

export default createSlice({
  name: 'cart',
  initialState: {
    newItem: {} as Item,
    listItem: [] as Item[],
  },
  reducers: {
    addItem: (state, action) => {
      state.newItem = action.payload;
      const isItemHasInCart = state.listItem.find((item) => item.id === action.payload.id);
      if (isItemHasInCart) {
        isItemHasInCart.count++;
      } else {
        state.listItem.push({ ...action.payload, count: 1 });
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.listItem = state.listItem.filter((item) => item.id !== itemId);
    },
    editCountItem: (state, action) => {
      const { id, value } = action.payload;
      const itemToUpdate = state.listItem.find((item) => item.id === id);
      if (itemToUpdate) {
        if (value !== 0) {
          itemToUpdate.count = value;
        }
      }
    },
  },
});
