import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import itemListSlice from './itemListSlice';
import cartSlice from './cartSlice';
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    itemList: itemListSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
