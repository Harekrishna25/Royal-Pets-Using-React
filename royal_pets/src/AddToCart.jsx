import React, {useState, useEffect} from 'react';
import './AddToCart.css';
import { useFilterContext } from './context/FilterProductContext';
import { useCartContext } from './context/CartContext';
const AddToCart = () => {
    const {cart} = useCartContext();

    const [CART,setCART] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const AddItem = () =>{
        if(quantity<10){
        setQuantity(quantity + 1);
        }
        else{
            alert("you reach the maximum quantity")
        }
    }
    const SubItem = () =>{
        if(quantity>1){
        setQuantity(quantity - 1);
    }
   else{
    setCART([])
   }
}   
    useEffect(()=>{
        setCART(cart);
    },[cart]);

  return (
    <div>
        {}
        <div className="cart-head">
            <h3>The following items has been added to your cart</h3>
            <hr id="line" />
        </div>
        <div class="cart-main">
            <div id="cart-summary">
                <h3>SUMMARY</h3>
                <p><span>{cart.length} items</span> added in your shopping cart</p>
                <hr />
                <div class="total">
                    <p>Total:</p>
                    <p>Rs. <span>808.00</span></p>
                </div>
                <div class="button">
                    <button class="same-btn">Continue shopping</button>
                    <button class="same-btn">View Cart</button>
                    <button id="checkout">Checkout <img src="../images/cart_img/payicon.png" alt="" /></button>
                </div>
            </div>
            <div id="order-cart">
                <h3>YOUR ORDER</h3>
                {cart.map((cartItem,cartIndex) =>{

                    return(
                        <>
                        <div class="cart-container" key={cartIndex}>
                            <div class="cp-container">
                                <img src={cartItem.image} alt="" />
                                <p>{cartItem.tittle}</p> 
                            </div>
                            <div class="pp-container">
                                <p>Rs. <span>{cartItem.price}</span></p>
                                <div class="add-item">
                                    <button onClick={SubItem}>-</button>
                                    <span>{}</span>
                                    <button onClick={AddItem}>+</button>
                                </div>
                                <p>Rs. <span>{cartItem.price * quantity}.00</span></p>
                                <img src="../images/cart_img/bin.png" alt="" />
                            </div>
                        </div>
                        <hr />
                        </>
                    )

                })

                }
               
            </div>
        </div>
        <hr id="line" />
        <h2>YOU MAY ALSO LIKE</h2>
    </div>
  )
}

export default AddToCart;