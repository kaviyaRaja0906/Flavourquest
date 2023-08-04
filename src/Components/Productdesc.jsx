import React ,{useEffect,useState}from "react";
import Navbar from "./Navbar";
import bbq from "../assets/bbq.png";
import dynamite from "../assets/dynamite.png";
import kasundi from "../assets/kasundi.png";
import mayo from "../assets/mayo.png";
import mexican from "../assets/mexican.png";
import spicy from "../assets/spicy.png"; 
import axios from "axios";
import { useParams } from "react-router-dom";

function Productdesc(){

    const {id} = useParams();

    const [dish, setDish] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [SelectedDip, setSelectedDip] = useState(null);

    const decrementQty = () =>{
      if(quantity>1){
      setQuantity(quantity-1);
      }
    }

    const cost = dish.price * quantity;

    const incrementQty = () =>{
      setQuantity(quantity+1);
    }

    const SelectDip = (dipName) =>{
      setSelectedDip(dipName)
    }

    useEffect(()=>{
      axios.get(`https://ecombackend.cyclic.app/api/products/${id}`)
      .then((response) =>{
        setDish(response.data);
      })
      .catch((error) =>{
        console.error("Error fetching data:", error);
      })
    })
    return(
      <div>
        <Navbar />

        <div className="breadcrumb-menu">
          <span className="breadcrumb-item">Home</span>
          <span className="breadcrumb-item">KFC</span>
          <span className="breadcrumb-item">Chicken</span>
          <span className="breadcrumb-item">{dish.name}</span>
        </div>

        <div className="product-desc">
            <div className="product-desc-img col-md-6">
              <img src={dish.image} alt="" className="product-image"/>
              <div className="small-product-img">
                <img src={dish.image} alt="" className="small-img" /> 
              </div>
            </div>
            <div className="product-desc-content col-md-6">

               <div className="main-desc">
               <span className="product-desc-title">{dish.name}</span>
               <span className="product-descrip">{dish.description}</span>
               <div className="rating">
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <i className="fas fa-star fa-xs"></i>
                <span className="rating-count">(121)</span>
               </div>
               <div className="price">
                ${cost}
               </div>
               </div>

               <hr></hr>

               <div className="choose-dip">
                <h3 className="choose-dip-title">Choose Your Dip</h3>
                <div className="dip">
                  <div className={`dip-div ${SelectedDip === "bbq" ? "selected" : ""}`} onClick={()=>SelectDip("bbq")}>
                    <img className="dip-img" src={bbq} alt="bbq" title="BBQ Sauce" />
                  </div>
                  <div className={`dip-div ${SelectedDip === "dynamite" ? "selected" : ""}`} onClick={()=>SelectDip("dynamite")}>
                    <img className="dip-img" src={dynamite} alt="dynamite" title="Dynamite Mayo" />
                  </div>
                  <div className={`dip-div ${SelectedDip === "kasundi" ? "selected" : ""}`} onClick={()=>SelectDip("kasundi")}>
                    <img className="dip-img" src={kasundi} alt="kasundi" title="Kasundi Dip" />
                  </div>
                  <div className={`dip-div ${SelectedDip === "mayo" ? "selected" : ""}`} onClick={()=>SelectDip("mayo")}>
                    <img className="dip-img" src={mayo} alt="mayo" title="Mayonnaise" />
                  </div>
                  <div className={`dip-div ${SelectedDip === "mexican" ? "selected" : ""}`} onClick={()=>SelectDip("mexican")}>
                    <img className="dip-img" src={mexican} alt="mexican" title="Mexican Salsa Dip" />
                  </div>
                  <div className={`dip-div ${SelectedDip === "spicy" ? "selected" : ""}`} onClick={()=>SelectDip("spicy")}>
                    <img className="dip-img" src={spicy} alt="spicy" title="Spicy Mayo"/>
                  </div>
                </div>
               </div>

               <hr></hr>

               <div className="action-div">

               <div className="quantity-div">
                  <div className="quantity">
                    <span className="sign-btn minus" onClick={decrementQty}>-</span>
                    <input className="quantity-input" type="text" value={quantity} />
                    <span className="sign-btn plus" onClick={incrementQty}>+</span>
                  </div>
                  <span className="quantity-title">Only <span className="highlight">{dish.quantity} items left</span><br></br>
                   Don't miss it
                  </span>
                </div>

                <div className="action-btns">
                  <button className="buy-now">Buy Now</button>
                  <button className="cart-btn">Add to Cart</button>
                </div>

                <div>
                <div className="details">
                    <div className="details-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FF802E" class="bi bi-truck" viewBox="0 0 16 16">
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    </div>
                    <div className="details-title">
                       <span className="details-h">Free delivery</span>  
                       <span className="details-p-1">Enter your postal code for delivery availability
                       </span>
                    </div>
                </div>
                <div className="details detail-2">
                    <div className="details-img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FF802E" class="bi bi-box-seam" viewBox="0 0 16 16">
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    </div>
                    <div className="details-title">
                       <span className="details-h">Store Pickup</span>  
                       <span className="details-p">Order and pickup at store <span className="line">Details</span>
                       </span>
                    </div>
                </div>
                </div>

               </div>
            </div>
        </div>
      </div>
    );
}

export default Productdesc;