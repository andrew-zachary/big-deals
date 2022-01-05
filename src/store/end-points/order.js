import {pendingOrderReceived} from '../slices/order.js';

const baseOrderUrl = '/bd/orders';

const createNewOrder = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `${baseOrderUrl}/new`,
        data,
        onSuccess: pendingOrderReceived.type,
        layoutIdle: true
    }
}

const findPendingOrder = (_1, _2, _3, data) => {
    return {
        method: 'GET',
        url: `${baseOrderUrl}/?status=pending`,
        data,
        onSuccess: pendingOrderReceived.type,
        layoutIdle: true
    }
}

export {createNewOrder, findPendingOrder};
