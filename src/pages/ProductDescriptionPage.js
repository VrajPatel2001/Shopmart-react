import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDescription from '../components/ProductDescription';

const ProductDescriptionPage = (props) => {
    const {productId} = useParams();
    console.log("Hello"+productId);
    useEffect(()=>{

        //have to get productID




        
        //GET, POST,PUT, DELETE from our Front-End TO our Back
    
        fetch(`https://shopmart-web.herokuapp.com/product/getAProduct/${productId}`)
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                props.setProduct(json.data);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    

    },[])

    return (
        <div>
            <Header />
          <ProductDescription  productName={props.product.productName} url={props.product.url} productPrice={props.product.productPrice} productDescription={props.product.productDesription} productCategory={props.product.productCategory}/>
          <Footer />
        </div>
    )
}

export default ProductDescriptionPage
