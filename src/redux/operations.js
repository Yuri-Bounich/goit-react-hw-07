import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://674f68d6bb559617b26f16d4.mockapi.io';

// запит 1) функція для запиту на бекенд і через ретерн повертаємо дані
// запит 4) можна було  в 1 зробити:перевірка на помилку додаємо аргументи
// в async (перший пустий, тя перший обовязково а його немає) і + return в
// catch
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    // console.log('FetchContacts: Запит надсилається...');
    try {
      const response = await axios.get('/contacts');
      // console.log('FetchContacts: Дані отримані:', response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      // console.error('FetchContacts: Помилка запиту:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
