import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundedItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size,
      );

      if (foundedItem) {
        foundedItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    increaseCount: (state, action) => {
      const foundedItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size,
      );

      foundedItem.count++;

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.type !== action.payload.type ||
          item.size !== action.payload.size,
      );

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    decreaseCount: (state, action) => {
      const foundedItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size,
      );

      if (foundedItem.count > 1) {
        foundedItem.count--;
      } else {
        state.items = state.items.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.type !== action.payload.type ||
            item.size !== action.payload.size,
        );
      }

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    removeAll: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, removeAll, decreaseCount, increaseCount } = cartSlice.actions;

export default cartSlice.reducer;
