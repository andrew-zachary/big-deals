import React from "react";

import Paginator from "../components/products/paginator.jsx";
import ListItem from "../components/products/list-item.jsx";

const ProductsPage = () => {
  return (
    <div id="products-page" className="mt-5">
      <ul id="products-list" className="bd-max-width-1200 mx-auto list-unstyled d-flex flex-wrap w-100">
        <Paginator ItemComponent={ListItem} />
      </ul>
    </div>
  );
};

export default ProductsPage;