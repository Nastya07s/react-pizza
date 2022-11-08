import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Response = {
  items: PizzaItem[];
  count: number;
};

type PizzaItem = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
  types: number[];
  sizes: number[];
  price: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'rejected',
}

interface PizzaSliceState {
  items: PizzaItem[];
  count: number;
  fetchStatus: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  count: 0,
  fetchStatus: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<Response, string>(
  'pizza/fetchPizzas',
  async (preparedSearchParams) => {
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/items?${preparedSearchParams}`);

    return data as Response;
  },
);

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.fetchStatus = Status.LOADING;
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.fetchStatus = Status.SUCCESS;
      state.items = action.payload.items;
      state.count = action.payload.count;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.fetchStatus = Status.ERROR;
      state.items = [];
      state.count = 0;
    });
  },
});

export default pizzaSlice.reducer;
