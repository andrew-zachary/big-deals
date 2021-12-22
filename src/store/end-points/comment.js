import { itemsReceived } from "../slices/comment.js";

const baseCommentUrl = '/bd/comments';

const getProductComments = (params, lastPage=1, limit=5) => {
    return {
        method: 'GET',
        url: `${baseCommentUrl}/products/${params.productId}?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type
    }
}

export {getProductComments};