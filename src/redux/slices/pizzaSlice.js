import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (preparedSearchParams) => {
  const { data } = await axios.get(`${process.env.REACT_APP_HOST}/items?${preparedSearchParams}`);

  return data;
});

const initialState = {
  items: [],
  count: 0,
  fetchStatus: 'loading',
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.fetchStatus = 'loading';
      state.items = [];
      state.count = 0;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload.items;
      state.count = state.items.length;
      state.fetchStatus = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.fetchStatus = 'error';
      state.items = [];
      state.count = 0;
    },
  },
});

export default pizzaSlice.reducer;
