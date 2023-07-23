import { createSelector } from '@reduxjs/toolkit';
interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: number;
  about?: { detail: string; specifications: string[]; specifications_img: string[] };
  slug: string;
}

interface Filter {
  _id: string;
  title: string;
  subFilter?: [{ subTitle: string; _id: string; item: Item[] }];
  item?: Item[];
  slug: string;
}

interface Login {
  currentUser: any;
  isFetching: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  error: boolean;
}
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

export const itemsRemainingSelector = createSelector(
  searchTextSelector,
  filterListSelector,
  (searchText: string, filterList: Filter[]) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const itemList: Item[] = [];
    filterList.forEach((filter) => {
      if (filter.item?.length) {
        itemList.push(...filter.item);
      }
      if (filter?.subFilter?.length) {
        filter?.subFilter.forEach((subFilter) => {
          if (subFilter.item?.length) {
            itemList.push(...subFilter.item);
          }
        });
      }
    });
    return itemList.filter((item) => {
      const lowerCaseItemName = item.name.toLowerCase();
      return lowerCaseItemName.includes(lowerCaseSearchText);
    });
  },
);
