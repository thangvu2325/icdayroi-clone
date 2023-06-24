import { createSelector } from '@reduxjs/toolkit';
interface item {
  name: string;
  id: string;
  img: string;
  imgLarge: string;
  price: string;
  about?: { detail: string; specifications: string[]; image: string[] };
  available: boolean;
  count: number;
}
export const searchTextSelector = (state: {
  filters: {
    search: string;
  };
}) => state.filters.search;
export const itemListSelector = (state: { itemList: item[] }) => state.itemList;
export const cartSelector = (state: { cart: {} }) => state.cart;

export const itemsRemainingSelector = createSelector(
  searchTextSelector,
  itemListSelector,
  (searchText: string, itemList: item[]) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    return itemList.filter((item) => {
      const lowerCaseItemName = item.name.toLowerCase();
      return lowerCaseItemName.includes(lowerCaseSearchText);
    });
  },
);
