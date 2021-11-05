import React from 'react'

const ProductDescription = (props) => {
    return (
        <div className="description">

<div className="productImage">
<img src={props.url} />
</div>
<div className="productdetail">
<ul>
<h2> {props.productName}</h2>
<h5>{props.productDescription}</h5>
<a href="">Buy at ${props.productPrice}</a>
<h3>Category: {props.productCategory}</h3>
</ul>

</div>
</div>

    )
}

export default ProductDescription
