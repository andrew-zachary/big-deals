import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    commentsHasMore: true,
    commentsLastPage: 1,
    commentsItems: [],
    currentComment: null,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        itemsReceived: (state, action) => {
            if(action.payload.data.length === 0) {
                state.commentsHasMore = false;
                state.commentsLastPage += 1;
                return state;
            }
            state.commentsItems = state.commentsItems.concat(action.payload.data);
            state.commentsLastPage += 1;
        },
        itemReceived: (state, action) => {
            state.currentComment = action.payload.data?action.payload.data:null;
        },
        commentReset: (state, _) => {
            state.commentsHasMore = true;
            state.commentsLastPage = 1;
            state.commentsItems = [];
            state.currentComment = null;
        }
    }
});

export default commentSlice.reducer;
export const {itemsReceived, itemReceived, commentReset} = commentSlice.actions;