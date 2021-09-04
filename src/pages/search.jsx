import React from "react";

import List from '../components/search/list.jsx';
import SearchInput from '../components/search/search-input.jsx';

const SearchPage = () => {
  return (
    <div id="search-page" className="bd-max-width-1200 mt-a">
      <div id="search-page-container" className="p-3">
        <SearchInput />
        <List />
      </div>
    </div>
  );
};

export default SearchPage;