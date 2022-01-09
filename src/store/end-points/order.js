import {orderReceived, ordersReceived} from '../slices/order.js';

const baseOrderUrl = '/bd/orders';

const createNewOrder = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `${baseOrderUrl}/new`,
        data,
        onSuccess: orderReceived.type,
        layoutIdle: true
    }
}

const allOrders = (_1, lastPage=1, limit=5, data) => {
    return {
        method: 'GET',
        url: `${baseOrderUrl}/?page=${lastPage}&limit=${limit}`,
        data,
        onSuccess: ordersReceived.type,
        layoutIdle: false
    }
}

export {createNewOrder, allOrders};
