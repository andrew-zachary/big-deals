import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const List = () => {
    return (
        <ul className="products-list list-unstyled bd-max-width-1200">
            <Paginator ItemComponent={ListItem} />
        </ul>
    );
};

export default List;