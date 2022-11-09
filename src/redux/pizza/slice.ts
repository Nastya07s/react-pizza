import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncActions';
import { PizzaItem, Status } from './types';

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
