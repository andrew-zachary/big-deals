import { itemsReceived } from "../slices/deal.js";

const baseDealUrl = '/bd/deals';

const getAllDeals = (page=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}`,
        onSuccess: itemsReceived.type
    }
}

export {getAllDeals};