import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",
        initialState: {
        items:[]
    },
    reducers: {
        orderReceived:(state, action)=>{
            state.items.push(action.payload.data);
        }
    }
});

export const { orderReceived } = ordersSlice.actions;

export default ordersSlice.reducer;