import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    currentPage: 1,
    canPaginate: false,
    currentReview: null,
}

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    resetReviews:()=> {
        return {
            ...initialState
        }
    },
    itemsReceived: (state, action) => {
      state.items = state.items.concat(action.payload.data);
      state.canPaginate = action.payload.data.length > 0 ? true : false;
      state.currentPage = state.currentPage + 1;
    },
    itemReceived: (state, action) => {
      state.currentReview = { ...action.payload.data };
    },
    clearItemsReceived: (state) => {
      state.items = [];
      state.currentPage = 1;
      state.canPaginate = true;
    },
    clearItemReceived: (state) => {
      state.currentReview = null;
    },
  },
});

export const {
    resetReviews,
    itemsReceived,
    itemReceived,
    clearItemsReceived,
    clearItemReceived,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;