import { createSlice } from '@reduxjs/toolkit';

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
});

export const selectContacts = state => state.contacts.items;

export const { deleteContact, addContact } = slice.actions;
export const contactReducer = slice.reducer;
