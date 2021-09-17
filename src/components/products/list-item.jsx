import React from "react";
import {Card} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import StarsCalc from "../../parts/stars-calc.jsx";
import LinkToProduct from "../../parts/link-to-product.jsx";
import AddToCartBtn from "../../parts/add-to-cart-btn.jsx";

const ListItem = ({itemData}) => {
    const {t} = useTranslation();
    return (
        <li className="product-item d-inline-block p-3">
            <Card>
                <Card.Img src="https://via.placeholder.com/225x225" />
                <Card.Body>
                    <Card.Title className="text-capitalize">{itemData.name}</Card.Title>
                    <Card.Text>
                        <span className="price-num">{parseInt(itemData.price.$numberDecimal).toFixed(2)}</span><span className="price-unit text-uppercase">{t(`common.egp`)}</span>
                    </Card.Text>
                    <StarsCalc avgRate={itemData.avgRate}/>
                    <div className="ctrls d-flex justify-content-between align-items-center">
                        <AddToCartBtn itemData={itemData} />
                        <LinkToProduct itemData={itemData} text={t(`common.see_details`)} />
                    </div>
                </Card.Body>
            </Card>
        </li>
    );
};

export default ListItem;