import {addCartItem} from "../slices/cart";
import { toastAdded } from "../slices/app";

export default ({ dispatch, getState }) => (next) =>
    async (action) => {
        if(action.type === addCartItem.type) {
            let itemsInCart = [];
            getState().cart.items.forEach(item => {
                if(item.product._id === action.payload.product._id) {
                    itemsInCart.push(item);
                }
            });
            if(itemsInCart.length > 0) {
                return dispatch({type: toastAdded.type, payload: {
                    header: "toaster.cart.title",
                    body: "toaster.cart.item_cart_exist",
                    time: "item_cart_added.time",
                }});
            } else {
                dispatch({type: toastAdded.type, payload: {
                    header: "toaster.cart.title",
                    body: "toaster.cart.item_cart_added",
                    time: "item_cart_added.time",
                }});
            }
        }
        next(action);
};