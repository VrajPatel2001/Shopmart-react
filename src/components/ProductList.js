import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    return (
        <div className="feature">
        <h3 className="heading">
           {props.title}
        </h3>
    
    <ul className="listing">
    
{props.products.map((product,index)=>(<ProductItem key={index}  id={product._id} name={product.productName} image={product.url}  />))}
     
       
    </ul>   
    </div>
    )
}

export default ProductList
