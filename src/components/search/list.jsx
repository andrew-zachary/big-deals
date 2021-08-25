import React from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";
import SearchInput from "../../parts/search-input.jsx";

const List = () => {
    return (
        <div id="list">
            <SearchInput />
            <ul>
                <Paginator ItemComponent={ListItem} />
            </ul>
        </div>
    );
};

export default List;