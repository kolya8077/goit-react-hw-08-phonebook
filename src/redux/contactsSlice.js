import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



const contactsSlice = createSlice({
  name: 'contact',
  initialState: { data: initialContact},
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        const index = state.data.findIndex(state => state.id === action.payload);
        state.data.splice(index, 1);
      },
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReduser = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, removeContact } = contactsSlice.actions;
