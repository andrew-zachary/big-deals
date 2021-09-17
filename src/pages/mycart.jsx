import React from 'react';
import { useSelector } from 'react-redux';

import ItemQuantityCalc from "../components/mycart/item-quantity.calc.jsx";

const MyCart = () => {
    const {items, totalCost} = useSelector(state=>state.cart);
    return <div id="mycart-page">
            {   
                items.length > 0 && <div id="mycart-page_container" className="bd-max-width-1200 mx-auto bd-white-box mt-5">
                    <ul className="list-unstyled p-3">
                        {
                            items.map((item)=>{
                                return <li key={item.product._id}>
                                    <h1 className="text-capitalize">{item.product.name}</h1>
                                    <ItemQuantityCalc item={item} />
                                </li>
                            })
                        }
                    </ul>
                    <div id="cart-ctrls" className="p-3">
                        <p className="text-center"><span className="text-uppercase">total</span><span>{totalCost}</span><span className="bd-currency">egp</span></p>
                        <div id="ctrls_btns" className="d-flex justify-content-around mt-4">
                            <button className="bd-btn bd-primary-btn">save cart</button>
                            <button className="bd-btn bd-primary-btn">create order</button>
                        </div>
                    </div>
                </div>
            }
            {
                items.length === 0 && <h1 id="cart_is_empty">cart is empty</h1>
            }
    </div>
}

export default MyCart;