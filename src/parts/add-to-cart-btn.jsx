import React from "react";
import { useDispatch } from "react-redux";

import { addCartItem } from "../store/slices/cart";

const AddToCartBtn = ({itemData}) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch({type: addCartItem.type, payload: {product:itemData}});
    };
    return <a onClick={()=>{onClickHandler()}} className="bd-circle-btn bd-primary-btn d-inline-block" href="#"><i className="fas fa-cart-plus"></i></a>
};

export default AddToCartBtn;