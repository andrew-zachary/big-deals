import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsHasMore: true,
    productsLastPage: 1,
    productsItems: [],
    searchHasMore: true,
    searchLastPage: 1,
    searchItems: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.productsHasMore = false;
                return state;
            }
            state.productsItems = state.productsItems.concat(action.payload.data);
            state.productsLastPage += 1;
        },
        searchItemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.searchHasMore = false;
                return state;
            }
            state.searchItems = state.searchItems.concat(action.payload.data);
            state.searchLastPage += 1;
        },
        resetSearch: (state, _) => {
            state.searchItems = [];
            state.searchLastPage = 1;
            state.searchHasMore = true;
        }
    }
});

export default productSlice.reducer;
export const {itemsReceived, searchItemsReceived, resetSearch} = productSlice.actions;