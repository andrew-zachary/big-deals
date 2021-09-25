import {addCartItem} from "../slices/cart";
import { toastAdded } from "../slices/app";

export default ({ dispatch }) => (next) =>
    async (action) => {
        if(action.type === addCartItem.type) {
            dispatch({type: toastAdded.type, payload: {
                header: "toaster.cart.title",
                body: "toaster.cart.item_cart_added",
                time: "item_cart_added.time",
            }});
        }
        next(action);
};