import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, fetchAddContactsApi, fetchContactsDeleteApi } from 'servises/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
try {
      const contacts = await fetchContactsApi();
      return contacts;
} catch (error) {
  return rejectWithValue(error)
}
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/fetchAddContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await fetchAddContactsApi(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchContactsDelete = createAsyncThunk(
  'contacts/fetchContactsDelete',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsDeleteApi(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
