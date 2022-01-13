import { itemsReceived, itemReceived, commentErrorReceived } from "../slices/comment.js";

const baseCommentUrl = '/bd/comments';

//params, lastPage, limit, data
const getProductComments = (params, lastPage=1, limit=5, _4) => {
    return {
        method: 'GET',
        url: `${baseCommentUrl}/products/${params.productId}?page=${lastPage}&limit=${limit}`,
        onSuccess: itemsReceived.type,
        onFail: commentErrorReceived.type
    }
};

//params, lastPage, limit, data
const getUserComment = (params, _2, _3, data) => {
    return {
        method: 'POST',
        url: `${baseCommentUrl}/owner`,
        data,
        onSuccess: itemReceived.type,
        onFail: commentErrorReceived.type
    }
}

//params, lastPage, limit, data
const newComment = (_1, _2, _3, data) => {
    return {
        method: 'POST',
        url: `${baseCommentUrl}/new`,
        data,
        onSuccess: itemReceived.type,
        onFail: commentErrorReceived.type
    }
}

export {getProductComments, newComment, getUserComment};