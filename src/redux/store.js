import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

// Комбінуємо ред'юсери
const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
