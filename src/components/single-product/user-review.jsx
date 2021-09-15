import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch} from 'react-redux';

import {apiCallStarted} from "../../store/actions/API";
import {createReview, updateReview} from "../../store/config/reviews"

import StarsInput from "../../parts/stars-input.jsx";

const UserReview = ({productId, currentReview}) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [avgRate, setAvgRate] = useState(0);
    const textArea = useRef();
    useEffect(()=>{
        if(currentReview) {
            setAvgRate(currentReview.starsNumber);
            textArea.current.value = currentReview.comment;
        }
    }, [currentReview]);
    const submitReview = () => {
        dispatch({type: apiCallStarted.type, payload:createReview({productId, starsNumber:avgRate, comment:textArea.current.value})});
    };
    const updateCurrentReview = () => {
        dispatch({type: apiCallStarted.type, payload:updateReview({reviewId: currentReview._id, starsNumber:avgRate, comment:textArea.current.value})});
    }
    return <div className="single-product-container bd-max-width-1200 mx-auto bd-white-box p-3 mt-5">
        <section id="user-review">
            <h1 className="text-capitalize">{t(`single_product.write_a_customer_review`)}</h1>
            <div className="form-floating mt-4">
                <textarea ref={textArea} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                <label htmlFor="floatingTextarea2">{t(`single_product.my_comment`)}</label>
            </div>
            <StarsInput avgRate={avgRate} setAvgRate={setAvgRate} />
            {
                currentReview !== null?<button onClick={()=>{updateCurrentReview()}} className="bd-btn bd-primary-btn mt-4">{t(`single_product.btn.update`)}</button>
                :<button onClick={()=>{submitReview()}} className="bd-btn bd-primary-btn mt-4">{t(`single_product.btn.done`)}</button>
            }
        </section>
    </div>
};

export default UserReview;