import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
  count: 0,
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList(state,action) {
        // const {wishList} = current(state);
        const product = action.payload;
        const index = state.wishList.findIndex(x => x.id === product.id);
        if(index === -1) {
            state.wishList.push(product);
            state.count++;
        }
      },
      removeFromWishList(state,action) {
        // const {wishList} = current(state);
        const id = action.payload.id;
        const index = state.wishList.findIndex(x => x.id === id);
        state.count--;
        state.wishList.splice(index,1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToWishList , removeFromWishList} = wishListSlice.actions

export default wishListSlice.reducer