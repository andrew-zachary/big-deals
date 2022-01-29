import {createContext} from "react";

const layoutActions = {
    TOGGLE_MENU_SHOW: 'TOGGLE_MENU_SHOW',
    TOGGLE_FOOTER_SHOW: 'TOGGLE_FOOTER_SHOW',
    TOGGLE_MODAL_SHOW: 'TOGGLE_MODAL_SHOW',
    TOGGLE_SLIDER_MODAL_SHOW: 'TOGGLE_SLIDER_MODAL_SHOW'
}
const layoutContext = createContext();
const layoutReducer = (state, action) => {
    switch (action.type) {
        case layoutActions.TOGGLE_SLIDER_MODAL_SHOW:
            return {
                ...state,
                slider_modal: {
                    toggle: action.payload.toggle,
                    clickedIndex: action.payload.clickedIndex
                }
            }
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