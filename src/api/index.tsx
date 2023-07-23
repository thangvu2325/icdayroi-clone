import axios from 'axios';

export const getFilterList = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/listFilters/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getItemList = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/listItemList/');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
