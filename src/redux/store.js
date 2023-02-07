import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from 'redux/filterSlice';
import { contactsReducer } from 'redux/contacts/contactsReducer'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/authSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}


export const store = configureStore({
  reducer: {

    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

