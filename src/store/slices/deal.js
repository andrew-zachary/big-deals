import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const dealSlice = createSlice({
    name: 'deal',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            state.items = action.payload.data;
        }
    }
});

export default dealSlice.reducer;
export const {itemsReceived} = dealSlice.actions;