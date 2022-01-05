import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        orderReceived: (state, action) => {
            state = action.payload.data;
        },
    }
});

export default orderSlice.reducer;
export const {orderReceived} = orderSlice.actions;