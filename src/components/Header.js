import React from 'react'

const Header = () => {
    return (
        <header>
        
        <ul className="nav">
        <li id="logo"><a href="/">SHOPMART</a></li>
        <div className="links"> 
        <li className="menu"><a href="/">Home</a></li>
        <li className="menu"><a href="/products">Products</a></li>
        
        <li className="menu sign"><a href="/signUp">Sign Up</a></li>
        </div>
      
        </ul>

    </header>
    )
}

export default Header
