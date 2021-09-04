import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";

const SearchList = () => {
    return (
        <ul id="search-list" className="mt-5 mx-auto">
            <Paginator ItemComponent={ListItem} />
        </ul>
    );
};

export default SearchList;