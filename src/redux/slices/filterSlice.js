import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  sort: { field: 'rating', order: 'desc' },
  searchValue: '',
  currentPage: 0,
  limit: 4,
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
    },
    setFilters: (state, action) => {
      const { category, sortBy, order, title, page } = action.payload;

      state.activeCategoryId = Number(category);
      state.sort = { field: sortBy, order };
      state.searchValue = title;
      state.currentPage = Number(page);
    },
  },
});

export const { setActiveCategoryId, setSort, setSearchValue, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
