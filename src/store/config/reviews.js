export const getAllReviews = ({ page, product_id }) => {
    return {
        url: `/big-yay-deals/api/reviews/?page=${page}&productId=${product_id}`,
        method: "GET",
        onSuccess: "reviews/productReviewsReceived",
    };
  };
  export const createReview = ({ productId, starsNumber, comment }) => {
    return {
      url: `/big-yay-deals/api/reviews/new`,
      method: "POST",
      data: {
        productId,
        starsNumber,
        comment,
      },
      onSuccess: "reviews/itemReceived",
    };
  };
  export const updateReview = ({ reviewId, starsNumber, comment }) => {
    return {
      url: `/big-yay-deals/api/reviews/${reviewId}`,
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
      url: `/big-yay-deals/api/reviews/my-review`,
      method: "POST",
      data: {
        productId,
      },
      onSuccess: "reviews/itemReceived",
    };
  };
  export const deleteMyReview = ({ reviewId }) => {
    return {
      url: `/big-yay-deals/api/reviews/${reviewId}`,
      method: "DELETE",
      data: {},
      onSuccess: "reviews/clearItemReceived",
    };
  };