import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const List = () => {
    return (
        <ul id="productsPageList">
            <Paginator url="/big-yay-deals/api/products" ItemComponent={ListItem} />
        </ul>
    );
};

export default List;