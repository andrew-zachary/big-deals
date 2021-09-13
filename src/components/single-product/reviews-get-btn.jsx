import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {apiCallStarted} from '../../store/actions/API';
import {getAllReviews} from '../../store/config/reviews';

const ReviewsGetBtn = ({productId, text}) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const getReviewsHandler = () => {
        setClicked(true);
        dispatch({type: apiCallStarted.type, payload:getAllReviews({page:1, product_id:productId})});
    };
    return (
        <>
            {!clicked && <button className="bd-btn bd-primary-btn" onClick={()=>getReviewsHandler()}>{text}</button>}
        </>
    );
};

export default ReviewsGetBtn;