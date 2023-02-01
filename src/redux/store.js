import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from 'redux/contacts/contactsReducer'
import { filtersReducer } from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
