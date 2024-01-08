import React from 'react'
import './TittleSection.css';
import { Outlet, Link } from "react-router-dom";

function TittleSection() {
  return (
    <div>
        <div className="shop-container">
        <div className="home-section-title">
            <img src="./images/wave_line.png" alt="wave_line" />
                <h2>Top Products</h2>
            <img src="./images/wave_line.png" alt="wave_line" />
        </div>
        <div className="shop-category">
            <img src="https://m.media-amazon.com/images/I/717NC6AT5hL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71u2OxCwC+L._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71+HlIJu4TL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71iOhQkNIVL._SX679_.jpg" alt="" />

            <img src="https://m.media-amazon.com/images/I/71bgO0tJA2L._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71EFLOqaFeL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71Wvhvzx8YL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71iOhQkNIVL._SX679_.jpg" alt="" />
        </div>

        <div className="home-section-title">
            <img src="./images/wave_line.png" alt="wave_line" />
                <h2>For Dogs and Cats </h2>
            <img src="./images/wave_line.png" alt="wave_line" />
        </div>
        <div className="product-category">
            <img src="./images/dog-and-cat.jpg" alt="" />
        </div>
        <div className="category-name">
            <h2>All Products For Dogs & Cats</h2>
        </div>
        <div className="button-01">
            <Link to="/product_page">
                <button id='btn-01'>
                    SEE ALL PRODUCT
                </button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default TittleSection;