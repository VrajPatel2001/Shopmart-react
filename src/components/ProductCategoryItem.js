import React from 'react'

const ProductCategoryItem = (props) => {
    return (
        <li>
        <div className="categoryName">
            <a href={`productCategory/${props.name}`}>
             <img src="https://img.icons8.com/fluency/48/ffffff/category.png"/>
             <h3>{props.name}</h3>
             </a>
        </div>
        </li>
    )
}

export default ProductCategoryItem
