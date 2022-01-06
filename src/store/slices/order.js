import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        orders: []
    },
    reducers: {
        orderReceived: (state, action) => {
            state.order = action.payload.data;
        },
        ordersReceived: (state, action) => {
            state.orders = action.payload.data;
        },
    }
});

export default orderSlice.reducer;
export const {orderReceived, ordersReceived} = orderSlice.actions;