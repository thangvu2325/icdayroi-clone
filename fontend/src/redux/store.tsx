import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import cartSlice from './slices/cartSlice';
import filterListSlice from './slices/filterListSlice';
import authSlice from './user/authSlice';
import itemSlice from './slices/itemSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  filters: filtersSlice.reducer,
  cart: cartSlice.reducer,
  filterList: filterListSlice.reducer,
  auth: authSlice.reducer,
  item: itemSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});
export let persistor = persistStore(store);
