import { createSelector } from '@reduxjs/toolkit';
import { Item, Filter, ItemData } from '@/types/frontEnd';

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
export const authSelector = (state: { auth: { login: any } }) => state.auth.login;
export const ItemsSelector = (state: {
  item: {
    data: ItemData;
  };
}) => state.item.data;
export const itemsRemainingSelector = createSelector(
  searchTextSelector,
  ItemsSelector,
  (searchText: string, itemData: ItemData) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const itemList: Item[] = itemData.items;
    return itemList.filter((item) => {
      const lowerCaseItemName = item.name.toLowerCase();
      return lowerCaseItemName.includes(lowerCaseSearchText);
    });
  },
);
