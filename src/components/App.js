import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductCategoryPage from "../pages/ProductCategoryPage"
import ProductDescriptionPage from "../pages/ProductDescriptionPage"
import ProductListPage from "../pages/ProductListPage"
import SignUpPage from "../pages/SignUpPage"



import "../assets/css/App.css";


const App = () => {


const [products,setProducts] =  useState([{}]);
const [productCategories, setProductCategories] = useState([]);
const [bestSeller, setBestSeller] = useState([{}]);
const [product,setProduct] =  useState({});

  return (
    <div>
      <Router>

        <Switch>
        <Route exact path="/">
                      <HomePage productCategories={productCategories} setProductCategories={setProductCategories} bestSeller={bestSeller} setBestSeller={setBestSeller}/>         
                  </Route>
        </Switch>

        <Switch>
        <Route exact path="/productCategory/:categoryName">
                      <ProductCategoryPage products={products} setProducts={setProducts} />
                  </Route>
        </Switch>
        <Switch>
        <Route exact path="/products">
                      <ProductListPage products={products} setProducts={setProducts} />
                  </Route>
        </Switch>
        <Switch>
        <Route exact path="/productDescription/:productId">
                      <ProductDescriptionPage product={product} setProduct={setProduct} />
                  </Route>
        </Switch>

        <Switch>
        <Route exact path="/signUp">
                      <SignUpPage />
                  </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App
