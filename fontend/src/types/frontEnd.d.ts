export interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  Filter: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: string;
  about?: { detail: string; specifications: string[]; specifications_img: string[] };
  slug: string;
}
export interface ItemData {
  items: Item[];
  currentPage: Number;
  totalPage: Number;
}
export interface Address {
  _id: string;
  location: Array<string>;
  lastName: string;
  firstName: string;
  companyName: string;
  province: string;
  nation: string;
  zip: number;
  phone: string;
  default: boolean;
}
export interface Order {
  _id: string;
  addressReceive: string;
  price: number;
  status: string;
  province: string;
  district: string;
  phone: string;
  email: string;
  items: Item[] | undefined;
  note: string;
  receiver: string;
}
export interface Filter {
  _id: string;
  title: string;
  subFilter?: [{ subTitle: string; _id: string }];
  slug: string;
}
export type Cart = {
  newItem?: Item;
  listItem?: Item[];
};

export interface Ipayment {
  id: string;
  left: string;
  right?: ReactNode | string;
  detail?: {
    id: string;
    important?: boolean;
    content?: string;
  }[];
}
export interface User {
  _id: string;
  name: string;
  addressList: Array<Object>;
  roles: Array<Object>;
  email: string;
  phone: string;
  orders: Order[];
}
export interface IUser {
  _doc: {
    _id: string;
    name: string;
    addressList: Array<Object>;
    roles: Array<Object>;
    email: string;
    phone: string;
    orders: Order[];
  };
  accessToken: string;
}
