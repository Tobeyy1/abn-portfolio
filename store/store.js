import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cartItems.slice(action.payload, 1);
    },
  },
});

const store = configureStore({
  reducer: cartItemsSlice.reducer,
});

export default store;
export const cartItemsActions = cartItemsSlice.actions;
