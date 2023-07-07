import { createSlice } from '@reduxjs/toolkit';

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
export default createSlice({
  name: 'cart',
  initialState: {
    newItem: {} as Item,
    listItem: [] as Item[],
  },
  reducers: {
    addItem: (state, action) => {
      state.newItem = action.payload;
      const isItemHasInCart = state.listItem.find((item) => item._id === action.payload.id);
      if (isItemHasInCart) {
        isItemHasInCart.qty++;
      } else {
        state.listItem.push({ ...action.payload, qty: 1 });
      }
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.listItem = state.listItem.filter((item) => item._id !== itemId);
    },
    editCountItem: (state, action) => {
      const { id, value } = action.payload;
      const itemToUpdate = state.listItem.find((item) => item._id === id);
      if (itemToUpdate) {
        if (value !== 0) {
          itemToUpdate.qty = value;
        }
      }
    },
  },
});
