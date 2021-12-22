import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentsHasMore: true,
    commentsLastPage: 1,
    commentsItems: []
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.commentsHasMore = false;
                return state;
            }
            state.commentsItems = state.commentsItems.concat(action.payload.data);
            state.commentsLastPage += 1;
        }
    }
});

export default commentSlice.reducer;
export const {itemsReceived} = commentSlice.actions;