import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  count: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      // const {list} = current(state);
      const product = action.payload;
      const index = state.list.findIndex(x => x.id === product.id);
      if(index === -1) {
        state.count++;
        state.list.push({...product , quantity: 1})
      }
      else {
        state.count++;
        state.list[index].quantity += 1;
      }
    },
    removeFromCart(state , action) {
      // console.log(state.count);
      // const {list} = current(state);
      const id = action.payload;
      
      
      const index = state.list.findIndex(x => x.id === id);
      console.log(index);
      state.count--;
      state.list.splice(index,1);
    },
    increaseQuantity(state , action) {
      const thisIndex = action.payload;
      // const {list} = current(state);
      state.list[thisIndex].quantity++;
      state.count++;
    },
    decreaseQuantity(state , action) {
      const thisIndex = action.payload;
      // const {list} = current(state);
      state.list[thisIndex].quantity--;
      state.count--;
    },
    resetList(state) {
      state.list = [];
      state.count = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart , removeFromCart , increaseQuantity , decreaseQuantity , resetList} = cartSlice.actions

export default cartSlice.reducer