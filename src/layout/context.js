import {createContext} from "react";

const initialState = {
    modal: {
        toggle: false,
        text: {
            header: null,
            body: null
        },
        toConfirm: {
            action: null,
            payload: null
        },
    }
}
const layoutActions = {
    TOGGLE_MODAL_SHOW: 'TOGGLE_MODAL_SHOW'
}
const layoutContext = createContext();
const layoutReducer = (state, action) => {
    switch (action.type) {
        case layoutActions.TOGGLE_MODAL_SHOW:
            return {
                ...state,
                modal: {
                    toggle: action.payload.toggle,
                    text: {
                        header: action.payload.text.header,
                        body: action.payload.text.body,
                    },
                    toConfirm: {
                        action: action.payload.toConfirm.action,
                        payload: action.payload.toConfirm.payload,
                    }
                },
            }
        default:
            return state;
    }
}

export {layoutContext, layoutReducer, layoutActions, initialState};