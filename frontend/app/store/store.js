import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import basketSlice from '../slices/basketSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    basket: basketSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
