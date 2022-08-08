import { orderReceived } from "../slices/order.js";
import { userBalanceUpdate } from "../slices/user.js";

export default ({dispatch}) => (next) => async (action) => {
    if(action.type !== orderReceived.type) return next(action);

    next(action);

    const {totalPrice} = action.payload.data;
    dispatch({type: userBalanceUpdate.type, payload: {amount: -totalPrice}});
}