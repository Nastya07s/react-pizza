import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import constantsReducer from './slices/constantsSlice';
import pizzaReducer from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    constants: constantsReducer,
    pizza: pizzaReducer,
  },
});
