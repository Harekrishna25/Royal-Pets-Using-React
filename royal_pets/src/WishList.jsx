import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './WishList.css';
const WishList = () => {
  return (
    <div>
        <div class="banner">
        
        <p><Link to="/"> HOME  </Link> {">"} <span> Wishlist </span></p>
        <img src="./images/Banners/wishlist banner.jpg" alt="" />
    </div>
    <div class="wis-container">
        <div class="headline">
            <h3>Product Name</h3>
            <h3>Unit Price</h3>
        </div> 
        <div class="p-wraper">
            <div class="product">
                <div class="prod-desc">
                    <img src="./images/product_image/Stay Away.jpg" alt="" />
                    <p>Pet Stay Away Spray 200ml</p>
                </div>    
                <div class="w-price">
                    <p>MRP: <span id="rupee">Rs. 288.00</span></p>
                    <div id="addcart-btn">
                        <button>Add to Cart</button>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div> 
            <div class="product">
                <div class="prod-desc">
                    <img src="./images/product_image/Conditioner Floral.jpg" alt="" />
                    <p>Pet Floral Conditioner 200ml</p>
                </div>    
                <div class="w-price">
                    <p>MRP: <span id="rupee">Rs. 210.00</span></p>
                    <div id="addcart-btn">
                        <button>Add to Cart</button>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div> 
            <div class="product">
                <div class="prod-desc">
                    <img src="./images/product_image/Potty Training Pine.jpg" alt="" />
                    <p>Pet Potty Training Pine 200ml</p>
                </div>    
                <div class="w-price">
                    <p>MRP: <span id="rupee">Rs. 310.00</span></p>
                    <div id="addcart-btn">
                        <button>Add to Cart</button>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div> 
            <div class="product">
                <div class="prod-desc">
                    <img src="./images/product_image/Royal Pet Shampoo Basil.jpg" alt="" />
                    <p>Pet Shampoo basil 200ml</p>
                </div>    
                <div class="w-price">
                    <p>MRP: <span id="rupee">Rs. 210.00</span></p>
                    <div id="addcart-btn">
                        <button>Add to Cart</button>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div> 
        </div>
    </div>
    <div class="buttons">
    <Link to="/product_page"><button id="c-shop">Contineous Shopping</button></Link>
    <Link to="/cartpage"><button id="v-cart">View Cart</button></Link>
    </div>
    </div>
  )
}

export default WishList