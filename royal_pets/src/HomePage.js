import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ProductcardSection from './ProductcardSection';
import TittleSection from './TittleSection';
import ServiceSection from './ServiceSection';
import Certification from './Certification';
import AddToCart from './AddToCart';
function HomePage() {
  return (
    <div>
        <Navbar />
        <ProductcardSection />
        <HeroSection />
        <TittleSection />
        <ServiceSection />
      <hr/>
        <Certification />
        {/* <AddToCart /> */}
        <Footer />
    </div>
  )
}

export default HomePage