import React from "react";
import StarsCalc from "../../parts/stars-calc.jsx";
import LinkToProduct from "../../parts/link-to-product.jsx";

const ListItem = ({itemData}) => {
    return (
        <li className="d-flex pt-3 pb-3">
            <div className="img-container text-center">
                <img src="https://via.placeholder.com/200x200" alt="" />
            </div>
            <div className="info-container d-flex flex-wrap ps-3">
                <h1 className="w-100">{itemData.name}</h1>
                <div className="info-container-stars-calc w-100">
                    <StarsCalc avgRate={itemData.avgRate} />
                </div>
                <h2 id="product-price" className="w-100"><span className="price-unit">EGP</span><span className="price-num">{parseInt(itemData.price.$numberDecimal).toFixed(2)}</span></h2>
                <div className="check-out w-100">
                    <LinkToProduct itemData={itemData} text="check out" />
                </div>
            </div>
        </li>
    );
};

export default ListItem;