import React,{ useState } from 'react';
import { Outlet, Link} from "react-router-dom";
import ReactDOM from "react-dom/client";
import './ProductSection.css';
import ProductData from './ProductData';
import { useFilterContext } from './context/FilterProductContext';

const ProductSection = () => {
    const [cart, setCart] = useState([]);
    const AddCart = (data) =>{
    setCart([...cart, {...data, quantity:1}]);
  }
    const{filter_products} = useFilterContext();

    const Products = filter_products;

  return (
    <div>
        <div className="prdct-banner">
            <img src="./images/Banners/banner-1.jpg" alt="Banner" />
        </div>
       <div className="heading">
        <img src="./images/wave_line.png" alt="wave line" />
        <h2>All Products For Dogs & Cats</h2>
        <img src="./images/wave_line.png" alt="wave line" />
    </div>
    <br />
    <Link to="/single_product">
    <div className="product-container">
        {Products.map((items)=>{
            
            return(
            items.map((curElm)=>{
                const { id, image, rating, tittle, amount, price, offer} = curElm ;

                return(
                    <>
                        <div className="product-card" key={id}>
                            <div className="image-container">
                            
                                <img src={image} alt="Stay Away" />
    
                            </div>
                            <div className="srar-icon">
                            <img src="./images/Star-icon.png" alt="Star-icon" /><span>{rating}</span>
                            </div>
                        <hr />
                        <h3>{tittle}</h3>
                        <div className="price">
                            <p><del><i className="fa-solid fa-indian-rupee-sign"></i> {amount}</del></p>
                        <h4 id='price'><i className="fa-solid fa-indian-rupee-sign"></i> {price}</h4>
                        <h3 id='offer'>{offer}</h3>
                    </div>
                    <div className="card-button">
                        <Link to="/cartpage">
                        <button className="addtocart" onClick={()=> AddCart(id, image, tittle,price, filter_products)}>Add to Cart</button></Link>
                        <a href="https://www.amazon.in/Royal-Pets-Repellent-Kitten-Outdoor/dp/B0CP3HTYVF?ref_=ast_sto_dp" target='_blank'><button className="buynow">Buy Now</button></a>
                    </div>
                
                </div>
                </>
                )

            })

            )
            // console.log(id);
           
        })}
        
        </div>
    </Link>

    </div>
    )
}

export default ProductSection;