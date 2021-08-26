import React from "react";
import {useSelector} from "react-redux";

import Paginator from "../components/single-product/paginator.jsx";
import ReviewsGetBtn from "../components/single-product/reviews-get-btn.jsx";
import ListItem from "../components/single-product/list-item.jsx";

const SingleProduct = () => {
    const {_id, name} = useSelector(state=>state.products.productSelected);
    return (
        <div id="single-product">
            <h1>{name}</h1>
            <section id="product-reviews">
                <ReviewsGetBtn productId={_id}/>
                <ul id="reviews-lists">
                    <Paginator ItemComponent={ListItem} productId={_id} />
                </ul>
            </section>
        </div>
    );
};

export default SingleProduct;