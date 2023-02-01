import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContacts,
  fetchContactsDelete,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(fetchAddContacts.pending, handlePending);
    builder.addCase(fetchAddContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(fetchAddContacts.rejected, handleRejected);
    builder.addCase(fetchContactsDelete.pending, handlePending);
    builder.addCase(fetchContactsDelete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      
      const index = state.items.findIndex(contact => {
        return contact.id === action.payload.id;
      });
      state.items.splice(index, 1);
    });
    builder.addCase(fetchContactsDelete.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
