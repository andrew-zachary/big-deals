import { itemsReceived } from "../slices/deal.js";

const baseDealUrl = '/bd/deals';

const getAllDeals = (lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type
    }
}

export {getAllDeals};