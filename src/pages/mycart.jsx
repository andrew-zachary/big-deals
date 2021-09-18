import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ItemQuantityCalc from "../components/mycart/item-quantity.calc.jsx";

const MyCart = () => {
    const {items, totalCost} = useSelector(state=>state.cart);
    const {t} = useTranslation();
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
                        <p className="text-center d-flex justify-content-center"><span className="text-uppercase">{t(`mycart.total`)}</span><span>{parseFloat(totalCost).toFixed(2)}</span><span className="bd-currency">{t(`common.egp`)}</span></p>
                        <button className="bd-btn bd-primary-btn w-100">{t(`mycart.btn.create_order`)}</button>
                    </div>
                </div>
            }
            {
                items.length === 0 && <h1 id="cart_is_empty">cart is empty</h1>
            }
    </div>
}

export default MyCart;