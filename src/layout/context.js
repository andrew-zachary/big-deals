import {createContext} from "react";

const layoutActions = {
    TOGGLE_MENU_SHOW: 'TOGGLE_MENU_SHOW',
    TOGGLE_FOOTER_SHOW: 'TOGGLE_FOOTER_SHOW'
}
const layoutContext = createContext();
const layoutReducer = (state, action) => {
    switch (action.type) {
        case layoutActions.TOGGLE_MENU_SHOW:
            return {
                ...state,
                menu: {
                    toggle: action.payload.toggle
                },
                dim: {
                    toggle: action.payload.toggle
                }
            };
        case layoutActions.TOGGLE_FOOTER_SHOW:
            return {
                ...state,
                footer: {
                    toggle: action.payload.toggle
                }
            };
        default:
            return state;
    }
}

export {layoutContext, layoutReducer, layoutActions};