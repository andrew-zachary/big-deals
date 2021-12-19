import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dealsHasMore: true,
    dealsLastPage: 1,
    dealsItems: []
};

const dealSlice = createSlice({
    name: 'deal',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.dealsHasMore = false;
                return state;
            }
            state.dealsItems = state.dealsItems.concat(action.payload.data);
            state.dealsLastPage += 1;
        }
    }
});

export default dealSlice.reducer;
export const {itemsReceived} = dealSlice.actions;