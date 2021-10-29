import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from '../components/ProductList';



const ProductCategoryPage = (props) => {
    const {categoryName} = useParams();
   
    useEffect(()=>{

        
        //GET, POST,PUT, DELETE from our Front-End TO our Back
    
        fetch(`https://shopmart-web.herokuapp.com/product/getProducts?category=${categoryName}`)
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                props.setProducts(json.data)
    console.log(props.products);
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    

    },[])


    return (
        <div>
            <Header />
          <ProductList products={props.products} title={`Products of ${categoryName}`}/>
          <Footer />
        </div>
    )
}

export default ProductCategoryPage
