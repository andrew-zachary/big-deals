import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/home.jsx";
import ProductsPage from "../pages/products.jsx";
import SingleProduct from "../pages/single-product.jsx";
import SearchPage from "../pages/search.jsx";
import AccountPage from "../pages/account.jsx";

const AppPage = () => {
    return <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/products/:id" component={SingleProduct} />
    </Switch>
};

export default AppPage;