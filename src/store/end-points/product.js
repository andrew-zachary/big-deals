import { itemsReceived, searchItemsReceived } from "../slices/product.js";

const baseDealUrl = '/bd/products';

//params, query, data
const getAllProducts = (params={}, query) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}`,
        onSuccess: itemsReceived.type
    }
}

//params, query, data
const searchAllProducts = (params={}, query) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}&s=${params.s}`,
        onSuccess: searchItemsReceived.type
    }
}

export {getAllProducts, searchAllProducts};