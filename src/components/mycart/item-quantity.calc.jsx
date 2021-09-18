import React from "react";
import { useDispatch } from "react-redux";

import {updateItemQuantity, removeItem} from "../../store/slices/cart";

const ItemQuantityCalc = ({item}) => {
    const dispatch = useDispatch();
    const changeTotalPrice = (direction) => {
        if(item.quantity + direction <= 0) return;
        dispatch({type:updateItemQuantity.type, payload:{direction, productId:item.product._id}});
    }
    const removeItemFromCart = (direction) => {
        dispatch({type:removeItem.type, payload:{productId:item.product._id}});
    }
    return <div className="item-quantities-calc d-flex align-items-center flex-wrap">
        <h3 className="d-flex"><span>{item.quantity}</span><span> x </span><span>{parseFloat(item.product.price.$numberDecimal).toFixed(2)}</span><span className="bd-currency">EGP</span></h3>
        <div className="ctrls d-flex w-100">
            <div className="price-ctrls">
                <button onClick={()=>{changeTotalPrice(1)}} className="bd-btn bd-circle-btn">
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button onClick={()=>{changeTotalPrice(-1)}} className="bd-btn bd-circle-btn">
                    <i className="fas fa-minus-circle"></i>
                </button>
            </div>
            <div className="product-ctrls">
                <button onClick={()=>{removeItemFromCart(item.product._id)}} className="bd-btn bd-circle-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div className="total-price d-flex w-100">
            <span>{(item.quantity * parseFloat(item.product.price.$numberDecimal)).toFixed(2)}</span><span className="bd-currency">EGP</span>
        </div>
    </div>
}

export default ItemQuantityCalc;