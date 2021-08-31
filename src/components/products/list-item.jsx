import React from "react";
import {Card} from "react-bootstrap";

import StarsCalc from "../../parts/stars-calc.jsx";
import LinkToProduct from "../../parts/link-to-product.jsx";

const ListItem = ({itemData}) => {
    return (
        <li className="product-item d-inline-block p-3">
            <Card>
                <Card.Img src="https://via.placeholder.com/225x225" />
                <Card.Body>
                    <Card.Title className="text-capitalize">{itemData.name}</Card.Title>
                    <Card.Text>
                        <span className="price-unit">EGP</span><span className="price-num">{parseInt(itemData.price.$numberDecimal).toFixed(2)}</span>
                    </Card.Text>
                    <StarsCalc avgRate={itemData.avgRate}/>
                    <div className="ctrls d-flex justify-content-between">
                        <a className="bd-circle-btn bd-primary-btn d-inline-block" href="#"><i className="fas fa-cart-plus"></i></a>
                        <LinkToProduct itemData={itemData} text="see details" />
                    </div>
                </Card.Body>
            </Card>
        </li>
    );
};

export default ListItem;