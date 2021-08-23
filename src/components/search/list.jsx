import React, {useState} from "react";
import Paginator from "./paginator.jsx";
import ListItem from "./list-item.jsx";
import SearchInput from "../../parts/search-input.jsx";

const List = () => {
    const [searchStr, setSearchStr] = useState("");
    return (
        <div id="list">
            <SearchInput setSearchStr={setSearchStr} />
            <ul>
                <Paginator url="/big-yay-deals/api/products" searchStr={searchStr} ItemComponent={ListItem} />
            </ul>
        </div>
    );
};

export default List;