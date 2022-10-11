import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  sort: { name: 'polular first', field: 'rating', order: 'desc' },
  searchValue: '',
  currentPage: 0
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
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

export const { setActiveCategoryId, setSort, setSearchValue, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
