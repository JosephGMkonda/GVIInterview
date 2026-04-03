import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../src/feature/CustomersSlice.js';

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});