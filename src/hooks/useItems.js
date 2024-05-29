// src/hooks/useItems.js
import { useQuery } from 'react-query';

const fetchItems = async () => {
  // Mock API call
  return [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
};

export const useItems = () => {
  return useQuery('items', fetchItems);
};
