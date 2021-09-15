export const getAllReviews = ({ page, product_id }) => {
  return {
    url: `/big-deals/api/reviews/?page=${page}&productId=${product_id}`,
    method: "GET",
    onSuccess: "reviews/itemsReceived",
  };
};
export const createReview = ({ productId, starsNumber, comment }) => {
  return {
    url: `/big-deals/api/reviews/new`,
    method: "POST",
    data: {
      productId,
      starsNumber,
      comment,
    },
    needAuth: true,
    onSuccess: "reviews/itemReceived",
  };
};
export const updateReview = ({ reviewId, starsNumber, comment }) => {
  return {
    url: `/big-deals/api/reviews/${reviewId}`,
    method: "PUT",
    data: {
      starsNumber,
      comment,
    },
    onSuccess: "reviews/itemReceived",
  };
};
export const getMyReview = ({ productId }) => {
  return {
    url: `/big-deals/api/reviews/my-review`,
    method: "POST",
    data: {
      productId,
    },
    onSuccess: "reviews/itemReceived",
  };
};
export const deleteMyReview = ({ reviewId }) => {
  return {
    url: `/big-deals/api/reviews/${reviewId}`,
    method: "DELETE",
    data: {},
    onSuccess: "reviews/clearItemReceived",
  };
};