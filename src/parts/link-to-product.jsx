import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {singleProductSelected} from "../store/slices/products.js";

const LinkToProduct = ({itemData, text}) => {
    const dispatch = useDispatch();
    const productSelectHandler = () => {
        dispatch({type:singleProductSelected.type, payload:{itemData}});
    };
    return (
        <div className="link-to-product d-inline-block">
            <Link className="bd-btn bd-primary-btn" onClick={()=>{productSelectHandler()}} to={`products/${itemData._id}`} >{text}</Link>
        </div>
    );
};

export default LinkToProduct;