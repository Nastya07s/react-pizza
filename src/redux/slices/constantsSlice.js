import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  typeNames: ['Thin', 'Traditional'],
};

export const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {},
});

export default constantsSlice.reducer;
