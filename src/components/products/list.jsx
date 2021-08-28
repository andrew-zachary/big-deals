import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const List = () => {
    return (
        <ul id="products-page-list">
            <Paginator ItemComponent={ListItem} />
        </ul>
    );
};

export default List;