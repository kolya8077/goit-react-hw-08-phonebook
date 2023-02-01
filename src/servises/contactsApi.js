import axios from 'axios';

axios.defaults.baseURL = 'https://63c98808c3e2021b2d599096.mockapi.io/api/v1';

export const fetchContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const fetchAddContactsApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const fetchContactsDeleteApi = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
