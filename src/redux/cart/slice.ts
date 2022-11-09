import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartItemRedux, CartSliceState } from './types';

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addAllItems: (state, action: PayloadAction<CartItemRedux[]>) => {
      state.items = action.payload;
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
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
    increaseCount: (state, action: PayloadAction<CartItem>) => {
      const foundedItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size,
      );

      if (foundedItem) {
        foundedItem.count++;

        state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.type !== action.payload.type ||
          item.size !== action.payload.size,
      );

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    decreaseCount: (state, action: PayloadAction<CartItem>) => {
      const foundedItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size,
      );

      if (foundedItem && foundedItem?.count > 1) {
        foundedItem.count--;
      } else if (foundedItem) {
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

export const { addItem, removeItem, removeAll, decreaseCount, increaseCount, addAllItems } = cartSlice.actions;

export default cartSlice.reducer;
