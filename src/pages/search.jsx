import React from "react";

import List from '../components/search/list.jsx';
import SearchInput from '../components/search/search-input.jsx';

const SearchPage = () => {
  return (
    <div id="search-page">
      <SearchInput />
      <List />
    </div>
  );
};

export default SearchPage;