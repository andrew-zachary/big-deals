import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        ordersHasMore: true,
        ordersLastPage: 1,
        ordersItems: [],
        currentOrders: []
    },
    reducers: {
        orderReceived: (state, action) => {
            state.currentOrders.unshift(action.payload.data);
        },
        ordersReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.ordersHasMore = false;
                state.ordersLastPage += 1;
                return state;
            }
            state.ordersItems = state.ordersItems.concat(action.payload.data);
            state.ordersLastPage += 1;
        },
    }
});

export default orderSlice.reducer;
export const {orderReceived, ordersReceived} = orderSlice.actions;