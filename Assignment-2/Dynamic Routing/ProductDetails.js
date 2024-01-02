import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const params = useParams()

//    console.log(params);
    const productId = params.productId
    return (
        <div>
            <h1>Product Details</h1>
            <p>{productId === 'p1' && 'this is about mobile details'}</p>
            <p>{productId === 'p2' && 'this is about laptop details'}</p>
            <p>{productId === 'p3' && 'this is about tablet details'}</p>
        </div>
    );

}

export default ProductDetails;