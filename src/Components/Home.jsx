import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import ProductListing from "./ProductListing";
import main from "../assets/main.png";

function Home(){
    return(
        <div>
            <Banner/>
            <Navbar/>
            
            <div className="container-fluid contents">
             <div className="main">
               <div className="main-content col-md-6">
                 <h1 className="main-h">
                    Grab Upto 50% Off On Selected Products
                 </h1>
                 <button className="buy-btn">Buy Now</button>  
               </div>
               <div className="main-img col-md-6">
                 <img className="main-image" src={main} alt="" />
               </div>
             </div>
            </div>

            <div className="filters">
                <div className="filter">
                  <div className="filter-type">
                    <span className="filter-title">Dishes Type</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">Price</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">Review</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">Color</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">Material</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">Offer</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <div className="filter-type">
                    <span className="filter-title">All filters</span>
                    <i class="fa-solid fa-filter"></i>
                  </div>
                </div>
                <div className="sort">
                    <span className="filter-title">Sort By</span>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>

            <ProductListing/>


        </div>
    );
}

export default Home;