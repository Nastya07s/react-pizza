import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Field, Order, SortObject } from '../constants/types';
import { FilterSliceState, SearchParams } from './types';

const initialState: FilterSliceState = {
  activeCategoryId: 0,
  sort: { field: Field.RATING, order: Order.DESC },
  searchValue: '',
  currentPage: 0,
  limit: 4,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action: PayloadAction<number>) => {
      state.activeCategoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<SortObject>) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<SearchParams>) => {
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
