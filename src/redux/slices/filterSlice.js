import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  sort: { name: 'polular first', field: 'rating', order: 'desc' },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setActiveCategoryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
