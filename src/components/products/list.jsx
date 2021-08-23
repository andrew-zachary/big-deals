import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const List = () => {
    return (
        <div id="list">
            <ul>
                <Paginator url="/big-yay-deals/api/products" ItemComponent={ListItem} />
            </ul>
        </div>
    );
};

export default List;