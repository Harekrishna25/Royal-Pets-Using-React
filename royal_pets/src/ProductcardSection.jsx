import React from 'react';
import './ProductcardSection.css';

function ProductcardSection() {
  return (
    <div>
    <div className="petcard-section">
        <div className="pet-card">
            <a href="#">
                <div className="p-imgage">
                    <img src="https://www.zigly.com/media/wysiwyg/Icons_Dog.jpg" alt="Icons_Dog" />
                </div>
            </a>
            <a href="#">
                <div className="text">
                    <p>Pet Grooming</p>
                </div>
            </a>
        </div>
        <div className="pet-card">
            <a href="#">
                <div className="p-imgage">
                    <img src="https://www.zigly.com/media/wysiwyg/Icons_Cat.jpg" alt="Icons_Dog" />
                </div>
            </a>
            <a href="#">
                <div className="text">
                    <p>Pet Training</p>
                </div>
            </a>
        </div>
        <div className="pet-card">
            <a href="#">
                <div className="p-imgage">
                    <img src="https://www.zigly.com/media/wysiwyg/Icons_Grooming.jpg" alt="Icons_Dog" />
                </div>
            </a>
            <a href="#">
                <div className="text">
                    <p>Deodrizers</p>
                </div>
            </a>
        </div>
        <div className="pet-card">
            <a href="#">
                <div className="p-imgage">
                    <img src="https://www.zigly.com/media/wysiwyg/Icons_Blog.jpg" alt="Icons_Dog" />
                </div>
            </a>
            <a href="#">
                <div className="text">
                    <p>Combos</p>
                </div>
            </a>
        </div>
    </div>
    </div>
  )
}

export default ProductcardSection;