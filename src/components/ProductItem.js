import React from 'react'

const ProductItem = (props) => {
    return (
        <li>
        <div className="box">
    <div className="Img"><a href={`/productDescription/${props.id}`}><img src={props.image}/> </a></div>
    <div className="Text"> {props.name}</div>
    </div>
     </li>
    )
}

export default ProductItem
