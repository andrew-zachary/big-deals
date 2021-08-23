import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    canPaginate: true
  },
  reducers: {
    itemsReceivedAfterSearch: (state, action) => {
      return {
        ...state,
        items:action.payload.data
      };
    },
    itemsReceivedAfterBrowse: (state, action) => {
      return {
        ...state,
        items:state.items.concat(action.payload.data),
        canPaginate:action.payload.data.length > 0?true:false
      };
    },
  },
});

export const { itemsReceived } = productsSlice.actions;

export default productsSlice.reducer;