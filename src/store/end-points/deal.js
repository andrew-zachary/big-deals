import { itemsReceived, searchItemsReceived } from "../slices/deal.js";

const baseDealUrl = '/bd/deals';

//params, lastPage, limit, data
const getAllDeals = (params={}, lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type
    }
}

//params, lastPage, limit, data
const searchAllDeals = (params={}, lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}&s=${params.s}`,
        onSuccess: searchItemsReceived.type
    }
}

export {getAllDeals, searchAllDeals};