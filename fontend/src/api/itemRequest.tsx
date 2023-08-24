import axios from 'axios';
import { ItemRes } from '@/types/frontEnd';

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
