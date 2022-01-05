import {orderReceived} from '../slices/order.js';

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

export {createNewOrder};
