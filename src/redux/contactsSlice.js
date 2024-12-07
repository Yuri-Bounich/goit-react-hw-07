import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // видал 2)  перехоплюємо фулфілд і видаляємо на стороні клієнта
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      // додав 3) відмальов на фронт додавання
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const contactReducer = slice.reducer;
