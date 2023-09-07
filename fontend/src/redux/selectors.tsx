import { Item, Filter } from '@/types/frontEnd';

export const searchTextSelector = (state: {
  filters: {
    search: string;
  };
}) => state.filters.search;
export const itemListSelector = (state: { itemList: Item[] }) => state.itemList;
export const cartSelector = (state: { cart: {} }) => state.cart;
export const filterListSelector = (state: {
  filterList: {
    data: Filter[];
    loading: string;
  };
}) => state.filterList.data;
export const authSelector = (state: { auth: { login: any } }) => state.auth.login.currentUser;
