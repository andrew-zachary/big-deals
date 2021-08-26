import React from "react";
import {useDispatch} from "react-redux";

import {apiCallStarted} from '../../store/actions/API';
import {getAllReviews} from '../../store/config/reviews';

const ReviewsGetBtn = ({productId}) => {
    const dispatch = useDispatch();
    const getReviewsHandler = () => {
        dispatch({type: apiCallStarted.type, payload:getAllReviews({page:1, product_id:productId})});
    };
    return (
        <button onClick={()=>getReviewsHandler()}>get reviews</button>
    );
};

export default ReviewsGetBtn;