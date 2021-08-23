import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    itemsReceived: (state, action) => {
      state.items = state.items.concat(action.payload.data);
    },
  },
});

export const { itemsReceived } = productsSlice.actions;

export default productsSlice.reducer;