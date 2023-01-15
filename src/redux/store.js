import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice'
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filtersReducer,
  },
});
