import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dealsHasMore: true,
    dealsLastPage: 1,
    dealsItems: [],
    dealsSearch: {
        hasMore: true,
        lastPage: 1,
        items: []
    }
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
        },
        searchItemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.dealsSearch.hasMore = false;
                return state;
            }
            state.dealsSearch.items = state.dealsSearch.items.concat(action.payload.data);
            state.dealsSearch.lastPage += 1;
        },
        resetDealsSearch: (state, _) => {
            state.dealsSearch.items = [];
            state.dealsSearch.lastPage = 1;
            state.dealsSearch.hasMore = true;
        }
    }
});

export default dealSlice.reducer;
export const {itemsReceived, searchItemsReceived, resetDealsSearch} = dealSlice.actions;