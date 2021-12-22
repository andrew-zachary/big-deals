import { itemsReceived } from "../slices/product.js";

const baseDealUrl = '/bd/products';

const getAllProducts = (params={}, lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseDealUrl}/?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type
    }
}

export {getAllProducts};