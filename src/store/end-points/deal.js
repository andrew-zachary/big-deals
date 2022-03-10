import { itemsReceived, searchItemsReceived } from "../slices/deal.js";

const baseDealUrl = '/bd/deals';

//params, query, data
const getAllDeals = (_1, query, _3) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}`,
        onSuccess: itemsReceived.type
    }
}

//params, query, data
const searchAllDeals = (params={}, query, _3) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}&s=${params.s}`,
        onSuccess: searchItemsReceived.type
    }
}

export {getAllDeals, searchAllDeals};