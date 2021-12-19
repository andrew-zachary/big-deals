import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hasMore: true,
    lastPage: 1,
    items: []
};

const dealSlice = createSlice({
    name: 'deal',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.hasMore = false;
                return state;
            }
            state.items = state.items.concat(action.payload.data);
            state.lastPage += 1;
        }
    }
});

export default dealSlice.reducer;
export const {itemsReceived} = dealSlice.actions;