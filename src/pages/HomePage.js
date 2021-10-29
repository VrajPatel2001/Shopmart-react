import React,{useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";


import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import ProductCategory from '../components/ProductCategory';


const HomePage = (props) => {

    useEffect(()=>{


        //GET, POST,PUT, DELETE from our Front-End TO our Back
    
        fetch("https://shopmart-web.herokuapp.com/product/getCategories")
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                props.setProductCategories(json.data)
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    

        fetch("https://shopmart-web.herokuapp.com/product/getBestSeller")
        .then(response=>response.json())
        .then(json=>{
    
              //We updated the data returned from the Backed with the resort state
                props.setBestSeller(json.data)
                console.log(json);
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    
    },[])


    return (
        <div>
            <Header />
          <HeroSection />
          <ProductCategory categories={props.productCategories} />
          <ProductList products={props.bestSeller} title={" Best Seller Products"}/>
          <Footer />
        </div>
    )
}

export default HomePage
