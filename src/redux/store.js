import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Комбінуємо ред'юсери
const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistConfigContacts = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

// Обгортаємо rootReducer у persistReducer
const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
