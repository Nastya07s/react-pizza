import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeNames: ['Thin', 'Traditional'],
  sortObjects: [
    { name: 'polular first', field: 'rating', order: 'desc' },
    { name: 'polular last', field: 'rating', order: 'asc' },
    { name: 'price ascending', field: 'price', order: 'asc' },
    { name: 'price descending', field: 'price', order: 'desc' },
    { name: 'alfabet', field: 'title', order: 'asc' },
  ],
};

export const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {},
});

export const constantsSelector = (state) => state.constants;

export default constantsSlice.reducer;
