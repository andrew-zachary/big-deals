import React from "react";
import LinkToProduct from "../../parts/link-to-product.jsx";

const ListItem = ({itemData}) => {
    return (
        <li>
            <h1>{itemData.name}</h1>
            <LinkToProduct itemData={itemData} text="see details" />
        </li>
    );
};

export default ListItem;