import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    canPaginate: false,
    currentPage: 1
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        resetReviews:()=> {
            return {
                ...initialState
            }
        },
        productReviewsReceived:(state, action)=>{
            return {
                ...state,
                items: state.items.concat(action.payload.data),
                canPaginate: action.payload.data.length > 0?true:false,
                currentPage: state.currentPage +1,
            }
        }
    }
});

export const { productReviewsReceived, resetReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;