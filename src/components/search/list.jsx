import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const SearchList = () => {
    return (
        <ul id="search-list">
            <Paginator ItemComponent={ListItem} />
        </ul>
    );
};

export default SearchList;