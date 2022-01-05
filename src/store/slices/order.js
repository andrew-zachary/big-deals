import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        pendingOrder: null,
        orders: []
    },
    reducers: {
        pendingOrderReceived: (state, action) => {
            console.log(action.payload);
            state.pendingOrder = action.payload.data.length === 0?null:action.payload.data[0];
        },
    }
});

export default orderSlice.reducer;
export const {pendingOrderReceived} = orderSlice.actions;