import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/Cart/cartSlice.js'
export const store = configureStore({
  reducer: {cartReducer},
})