import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsHasMore: true,
    productsLastPage: 1,
    productsItems: []
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
        }
    }
});

export default productSlice.reducer;
export const {itemsReceived} = productSlice.actions;