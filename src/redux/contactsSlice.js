import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

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
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // видал 2)  перехоплюємо фулфілд і виддаляємо на стороні клієнта
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      // додав 3) відмальов на фронт додавання
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = state.items.push(action.payload);
      });
  },
});

export const selectContacts = state => state.contacts.items;

// export const { addContact } = slice.actions;
export const contactReducer = slice.reducer;
