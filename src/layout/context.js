import {createContext} from "react";

const layoutActions = {
    TOGGLE_MENU: 'toggleMenu',
    SET_SHOW_FOOTER: 'set current page'
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
            };
        case layoutActions.SET_SHOW_FOOTER:
            return {
                ...state,
                footer: {
                    show: action.payload.show
                }
            };
        default:
            return state;
    }
}

export {layoutContext, layoutReducer, layoutActions};