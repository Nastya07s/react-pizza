import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  type: number;
  size: number;
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

export type CartItemRedux = CartItem & {
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItemRedux[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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

export const cartSelector = (state: RootState) => state.cart;

export const { addItem, removeItem, removeAll, decreaseCount, increaseCount } = cartSlice.actions;

export default cartSlice.reducer;
