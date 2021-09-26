import React from "react";
import { useDispatch } from "react-redux";

import { addCartItem } from "../store/slices/cart";

const AddToCartBtn = ({itemData}) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        dispatch({type: addCartItem.type, payload: {product:itemData}});
    };
    return <button onClick={()=>{onClickHandler()}} className="bd-btn bd-circle-btn bd-primary-btn d-inline-block"><i className="fas fa-cart-plus"></i></button>
};

export default AddToCartBtn;