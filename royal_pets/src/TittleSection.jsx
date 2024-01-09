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
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards-wrapper">
            <div class="card">
              <img src="https://m.media-amazon.com/images/I/717NC6AT5hL._SX679_.jpg"  alt="..." />
            </div>
            <div class="card d-none d-md-block">
              <img src="https://m.media-amazon.com/images/I/71u2OxCwC+L._SX679_.jpg" alt="..." />
            </div>
            <div class="card d-none d-md-block">
              <img src="https://m.media-amazon.com/images/I/71+HlIJu4TL._SX679_.jpg"  alt="..." />
            </div>
            <div class="card d-none d-md-block">
              <img src="https://m.media-amazon.com/images/I/71iOhQkNIVL._SX679_.jpg"  alt="..." />
            </div>
          </div>
          </div>
          <div class="carousel-item">
            <div class="cards-wrapper">
                <div class="card">
                    <img src="https://m.media-amazon.com/images/I/71bgO0tJA2L._SX679_.jpg"  alt="..." />
                  </div>
                  <div class="card d-none d-md-block">
                    <img src="https://m.media-amazon.com/images/I/71EFLOqaFeL._SX679_.jpg" alt="..." />
                  </div>
                  <div class="card d-none d-md-block">
                    <img src="https://m.media-amazon.com/images/I/71Wvhvzx8YL._SX679_.jpg" alt="..." />
                  </div>
                  <div class="card d-none d-md-block">
                    <img src="https://m.media-amazon.com/images/I/71rL6rvd4aL._SX679_.jpg" alt="..." />
                  </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
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