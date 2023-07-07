import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import itemListSlice from './itemListSlice';
import cartSlice from './cartSlice';
import filterListSlice from './filterListSlice';
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    itemList: itemListSlice.reducer,
    cart: cartSlice.reducer,
    filterList: filterListSlice.reducer,
  },
  devTools: true,
});
export default store;
