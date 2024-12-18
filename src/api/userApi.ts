import axios from 'axios';
import { User } from '../types/User';

// Fungsi untuk mendapatkan data pengguna dari API
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};
