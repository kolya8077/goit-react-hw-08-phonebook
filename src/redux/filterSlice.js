import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filter(state, action) {
      return state = action.payload;

    },
  },
});

export const { filter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
