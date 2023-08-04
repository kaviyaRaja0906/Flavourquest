import React from "react";
import logo from "../assets/logo.png";

function Navbar(){
    return(
     <div className="Navbar">
       <img className="logo" src={logo} alt=""></img>

       <div className="nav-menus">
        <li className="nav-menu">
          <span className="menu-item">Categories</span>
          <i class="fas fa-angle-down"></i>
        </li>
        <li className="menu-item">Deals</li>
        <li className="menu-item">What's New</li>
        <li className="menu-item">Delivery</li>
       </div>

       <div className="account">
        <div className="search">
          <input className="search-input" type="text" placeholder="Search Product" />
          <i className="fas fa-search"></i>
        </div>
        <div className="profile">
          <i className="fas fa-user"></i>
          <span className="account-item">Account</span>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="account-item">Cart</span>
        </div>
       </div>
     </div>
    );
}

export default Navbar;