import React from "react";

import Paginator from "../components/search/paginator.jsx";
import ListItem from "../components/search/list-item.jsx";
import SearchInput from '../components/search/search-input.jsx';

const SearchPage = () => {
  return (
    <div id="search-page" className="mt-5">
      <div id="search-page-container" className="mx-auto p-3">
        <SearchInput />
        <ul id="search-list" className="bd-white-box mx-auto mt-5">
            <Paginator ItemComponent={ListItem} />
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;