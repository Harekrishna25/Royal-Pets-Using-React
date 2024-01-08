import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import AboutPage from './AboutPage';
import ContactUsPage from './ContactUsPage';
import LogIn from './LogIn';
import AddToCartPage from './AddToCartPage';
import WishListPage from './WishListPage';
import SingleProduct from './SingleProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="product_page" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="cartpage" element={<AddToCartPage />} />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="single_product" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
