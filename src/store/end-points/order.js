import { errorReceived } from "../slices/app.js";
import {orderReceived, ordersReceived} from '../slices/order.js';

const baseOrderUrl = '/bd/orders';

//params, query, data
const createNewOrder = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `${baseOrderUrl}/new`,
        data,
        onSuccess: orderReceived.type,
        layoutIdle: true,
        onFail: errorReceived.type
    }
};

//params, query, data
const allOrders = (_1, query, data) => {
    return {
        method: 'GET',
        url: `${baseOrderUrl}/?page=${query.lastPage}&limit=${query.limit}`,
        data,
        onSuccess: ordersReceived.type,
        layoutIdle: false,
        onFail: errorReceived.type
    }
};

export {createNewOrder, allOrders};
