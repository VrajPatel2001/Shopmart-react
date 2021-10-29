import React from 'react'
import ProductCategoryItem from './ProductCategoryItem'
const ProductCategory = (props) => {
    return (
        <div className="category">
            <h3 className="heading">Product Categories </h3>
            <ul className="categoryList">
               
           {props.categories.map((category,index)=>(<ProductCategoryItem  name={category}/>))}
           
           </ul>
        </div>
    )
}

export default ProductCategory
