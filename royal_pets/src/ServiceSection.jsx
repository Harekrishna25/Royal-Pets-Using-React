import React from 'react';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div>
        <div className="service-section">
        <div className="service-icons">
            <img src="./images/fast-delivery.png" alt="" />
            <img src="./images/return.png" alt="" />
            <img src="./images/cash-on-delivery.png" alt="" />
        </div>
        <div className="service-text">
            <p>Free shipping</p>
            <p>Easy Return</p>
            <p>Cash on Delivery</p>
        </div>
    </div>
    </div>
  )
}

export default ServiceSection;