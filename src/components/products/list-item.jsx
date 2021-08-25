import React from "react";
import LinkToProduct from "../../parts/link-to-product.jsx";

const ListItem = ({itemData}) => {
    return (
        <li>
            {itemData.name}
            <LinkToProduct id={itemData._id} text="see reviews" />
        </li>
    );
};

export default ListItem;