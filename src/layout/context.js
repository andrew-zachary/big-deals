import {createContext} from "react";

const layoutActions = {
    TOGGLE_MENU: 'toggleMenu'
}
const layoutContext = createContext();
const layoutReducer = (state, action) => {
    switch (action.type) {
        case layoutActions.TOGGLE_MENU:
            return {
                ...state,
                menu: {
                    toggle: action.payload.toggle
                },
                dim: {
                    toggle: action.payload.toggle
                }
            }
        default:
            return state;
    }
}

export {layoutContext, layoutReducer, layoutActions};