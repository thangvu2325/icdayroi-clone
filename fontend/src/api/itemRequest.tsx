import axios from 'axios';
import { ItemRes, Item } from '@/types/frontEnd';

export const getItem = async (page?: Number, filter?: String) => {
  try {
    const res = await axios.get('http://localhost:3001/api/item', {
      params: { page, filter },
      withCredentials: true,
    });
    const data = (await res.data) as ItemRes;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};
export const getItembyId = async (id?: string) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/item/${id}`, {
      withCredentials: true,
    });
    const data = (await res.data) as Item;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};
export const searchItem = async (q: string = '') => {
  try {
    const res = await axios.get('http://localhost:3001/api/item/search', {
      params: { q },
      withCredentials: true,
    });
    const data = (await res.data) as Item[];
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return false;
  }
};
