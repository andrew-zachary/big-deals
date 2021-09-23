import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: "orders",
        initialState: {
        newOrderSent:false,
        items:[]
    },
    reducers: {
        orderReceivedReset:(state)=>{
            state.newOrderSent = false;
        },
        ordersReceived:(state, action)=>{
            state.items = action.payload.data;
        },
        orderReceived:(state, action)=>{
            state.items.push(action.payload.data);
            state.newOrderSent = true;
        }
    }
});

export const { orderReceived, ordersReceived, orderReceivedReset } = ordersSlice.actions;

export default ordersSlice.reducer;