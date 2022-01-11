import { itemsReceived, searchItemsReceived } from "../slices/product.js";

const baseDealUrl = '/bd/products';

//params, lastPage, limit, data
const getAllProducts = (params={}, lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type
    }
}

//params, lastPage, limit, data
const searchAllProducts = (params={}, lastPage=1, limit=5) => {
    console.log(params);
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}&s=${params.s}`,
        onSuccess: searchItemsReceived.type
    }
}

export {getAllProducts, searchAllProducts};