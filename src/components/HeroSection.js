import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const HeroSection = () => {
    
    return (
        <div className="slider">
        <Splide
        options={ {
          rewind: true,
          gap   : '0.5rem',
        width: '100%',
        autoWidth:true
        } }
      >
        <SplideSlide>
         <a href="productDescription/6154fe69ddf96cc927e4c58e"> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000" alt="Image 1"/>  </a>
        </SplideSlide>
        <SplideSlide>
          <a href="productDescription/61552a570148f159086e1b32"> <img src="https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_960_720.png" alt="Image 2"/> </a>
        </SplideSlide>
        <SplideSlide>
          <a href="productDescription/6189ec9513af73da0e0eabd4"> <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604278672000" alt="Image 3"/> </a>
        </SplideSlide>
        <SplideSlide>
          <a href="productDescription/617a08e1f193f7a5ddd4a5b0"><img src="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image 3"/> </a>
        </SplideSlide>
      </Splide>
       </div> 
    )
}

export default HeroSection
