import { errorReceived } from "../slices/app.js";
import { itemsReceived, itemReceived } from "../slices/comment.js";

const baseCommentUrl = '/bd/comments';

//params, query, data
const getProductComments = (params, query, _3) => {
    return {
        method: 'GET',
        url: `${baseCommentUrl}/products/${params.productId}?page=${query.lastPage}&limit=${query.limit}`,
        onSuccess: itemsReceived.type,
        onFail: errorReceived.type
    }
};

//params, query, data
const getUserComment = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `${baseCommentUrl}/owner`,
        data,
        onSuccess: itemReceived.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const newComment = (_1, _2, data) => {
    return {
        method: 'POST',
        url: `${baseCommentUrl}/new`,
        data,
        onSuccess: itemReceived.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

//params, query, data
const updateComment = (params, _2, data) => {
    return {
        method: 'PUT',
        url: `${baseCommentUrl}/${params.commentId}/owner`,
        data,
        onSuccess: itemReceived.type,
        onFail: errorReceived.type,
        layoutIdle: true
    }
};

export {getProductComments, newComment, getUserComment, updateComment};