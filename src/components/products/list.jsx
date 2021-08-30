import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const List = () => {
    return (
        <ul className="products-page-list list-unstyled">
            <Paginator ItemComponent={ListItem} />
        </ul>
    );
};

export default List;