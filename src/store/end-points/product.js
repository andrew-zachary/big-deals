import { errorReceived } from "../slices/app.js";
import { itemsReceived, searchItemsReceived } from "../slices/product.js";

const baseDealUrl = '/bd/products';

//params, query, data
const getAllProducts = (params={}, query) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}`,
        onSuccess: itemsReceived.type,
        onFail: errorReceived.type
    }
}

//params, query, data
const searchAllProducts = (params={}, query) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${query.lastPage}&limit=${query.limit}&s=${query.s}&lang=${query.lang}`,
        onSuccess: searchItemsReceived.type,
        onFail: errorReceived.type
    }
}

export {getAllProducts, searchAllProducts};