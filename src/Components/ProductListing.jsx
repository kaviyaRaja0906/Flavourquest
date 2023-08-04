import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductListing(){

    const navigate = useNavigate();

    const [dishes, setDishes] = useState([]);

    useEffect(()=>{
      axios.get("https://ecombackend.cyclic.app/api/products")
      .then((response) =>{
        setDishes(response.data);
      })
      .catch((error) =>{
        console.error("Error fetching data:", error);
      })
    })

    return(
     <div className="products">
       <h3 className="products-h">Dishes For You!</h3>
       <div className="products-list">
            {dishes.map((dish)=>(
            <div className="product col-md-3" key={dish.id} onClick={()=>navigate(`/product/${dish.id}`)}>
              <div className="product-img">
             <div className="wishlist">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
             </svg>             
             </div>
             <img src={dish.image} className="product-image" alt=""></img>
           </div>
           <div className="product-info">
             <div className="info">
             <span className="product-name">{dish.name}</span>
             <span className="product-description">{dish.description}</span>
             <div className="rating">
             <i className="fas fa-star fa-xs"></i>
             <i className="fas fa-star fa-xs"></i>
             <i className="fas fa-star fa-xs"></i>
             <i className="fas fa-star fa-xs"></i>
             <i className="fas fa-star fa-xs"></i>
             <span className="rating-count">(121)</span>
             </div>
             <button className="add-to-cart">Add to Cart</button>
             </div>
             <div className="price">
              ${dish.price}
             </div>
           </div>
         </div> 
            ))}
 

       </div>
     </div>
    );
}

export default ProductListing;