import React from "react";
import { Link } from "react-router-dom";

const LinkToProduct = ({id, text}) => {
    return (
        <div className="link-to-product">
            <Link to={`products/${id}`} >{text}</Link>
        </div>
    );
};

export default LinkToProduct;