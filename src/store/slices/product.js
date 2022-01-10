import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsHasMore: true,
    productsLastPage: 1,
    productsItems: [],
    productsSearch: {
        hasMore: true,
        lastPage: 1,
        items: []
    }
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
                state.productsSearch.hasMore = false;
                return state;
            }
            state.productsSearch.items = state.productsSearch.items.concat(action.payload.data);
            state.productsSearch.lastPage += 1;
        },
        resetProductsSearch: (state, _) => {
            state.productsSearch.items = [];
            state.productsSearch.lastPage = 1;
            state.productsSearch.hasMore = true;
        }
    }
});

export default productSlice.reducer;
export const {itemsReceived, searchItemsReceived, resetProductsSearch} = productSlice.actions;