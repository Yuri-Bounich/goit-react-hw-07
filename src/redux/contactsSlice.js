import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log('Adding Contact:', action.payload);
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  // запит 3) екстраредюсером ловимо через фетчКонсактс дані. створюємо аддкей
  // і через фулфілд (успішне виконання запиту) витягуємо дані
  // extraReducers - перехоплює зовнішні дані (fetchContacts - в іншому файлі)
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, actions) => {
      state.items = actions.payload;
    });
  },
});

export const selectContacts = state => state.contacts.items;

export const { deleteContact, addContact } = slice.actions;
export const contactReducer = slice.reducer;
