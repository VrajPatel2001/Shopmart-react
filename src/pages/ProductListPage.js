import React,{useEffect} from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from '../components/ProductList';



const ProductCategoryPage = (props) => {
   
   
    useEffect(()=>{

        
        //GET, POST,PUT, DELETE from our Front-End TO our Back
    
        fetch(`https://shopmart-web.herokuapp.com/product/getProducts`)
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                props.setProducts(json.data)
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    

    },[])


    return (
        <div>
            <Header />
          <ProductList products={props.products} title={`All Products`}/>
          <Footer />
        </div>
    )
}

export default ProductCategoryPage
