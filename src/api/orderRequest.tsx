import axios from 'axios';
interface order {
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
interface Item {
  name: string;
  _id: string;
  qty: number;
  img: string;
  img_small: string;
  img_large: string;
  price_orginal: number;
  price_final: number;
  about?: { detail: string; specifications: string[]; image: string[] };
  slug: string;
}
export const addOrder = async (order: order) => {
  try {
    await axios.post('http://localhost:3001/api/addorder', order);
    return true;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};
// export const deleteOrder = async () => {
//   try {
//     const response = await axios.get('http://localhost:3001/api/listItemList/');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };
