import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",
        initialState: {
        items:[]
    },
    reducers: {
        ordersReceived:(state, action)=>{
            state.items = action.payload.data;
        },
        orderReceived:(state, action)=>{
            state.items.push(action.payload.data);
        }
    }
});

export const { orderReceived, ordersReceived } = ordersSlice.actions;

export default ordersSlice.reducer;