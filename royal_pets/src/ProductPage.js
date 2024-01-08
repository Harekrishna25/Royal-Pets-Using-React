import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductSection from './ProductSection';
import AddToCart from './AddToCart';

function ProductPage() {
  
  return (
    <div>
        <Navbar /> 
          <ProductSection />
        <Footer />
    </div>
  )
}

export default ProductPage;