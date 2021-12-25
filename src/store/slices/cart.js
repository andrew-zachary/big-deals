import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsItems: [],
    totalItemsNumber: 0,
    totalItemsCost: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cartsItems.push(action.payload.item);
            state.totalItemsCost +=  action.payload.item.price;
            state.totalItemsNumber += 1;
        }
    }
});

export default cartSlice.reducer;
export const {addItem} = cartSlice.actions;