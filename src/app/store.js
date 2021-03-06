import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/Cart/cartSlice.js'
import wishListReducer from '../components/Wishlist/wishListSlice.js'
import userReducer from '../app/userSlice'
export const store = configureStore({
  reducer: {
    cartReducer,
    wishListReducer,
    userReducer,
  },
})