import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    return (
        <div id="single-product">single product with {id}</div>
    );
};

export default SingleProduct;