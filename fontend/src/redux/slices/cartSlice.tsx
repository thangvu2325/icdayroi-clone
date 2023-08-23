import { createSlice } from '@reduxjs/toolkit';
import { Item } from '@/types/frontEnd';
export default createSlice({
  name: 'cart',
  initialState: {
    newItem: {} as Item,
    listItem: [] as Item[],
  },
  reducers: {
    addItem: (state, action) => {
      state.newItem = action.payload;
      const isItemHasInCart = state.listItem.find((item) => item._id === action.payload._id);
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
