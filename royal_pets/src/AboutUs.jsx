import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './AboutUs.css';

function AboutUs() {
  return (
    <div>
        <div className="about-right"></div>
            <header>
                <h1>AboutUs</h1>
                <p><Link to="/"> HOME  </Link> {">"} <span> AboutUs </span></p> 
            </header>
    <main>
        <section className="about-us">
        <div className="left">
            <h2>Our Profile</h2>
            <p>
            Welcome to Royal Pets, where the love for furry companions meets the commitment to a greener, more pet-friendly world. Established in 2023, our journey began with passion to redefine pet grooming and behavior care with a range of innovative products.</p>
            <p>We understand the joy and comfort pets bring to our lives, and we believe they deserve the best without compromising the world they live in. That's why we're dedicated to providing not just products, but an experience that enhances the lives of pets and their owners alike. From our carefully selected ingredients to our innovative designs, every product in our range is created with the well-being of pets in mind.</p>
            <p>Join us on this remarkable journey and witness the positive impact we can make when we come together for our furry friends and the planet they call home.
            </p>   
        </div>
            <div className="right">
                <img src="../Images/pet_about.jpg" alt="" />
            </div>    
        </section>
        <section className="pet-friendly">
        <h2>Our Pet Promise</h2>
        <p>We vow to stand by your side, supporting every step of your pet parenting journey,<br /> enriching their lives with products that reflect our commitment to their well-being.</p>
        </section>
    
        <section className="values">
                
            <h2>Why Choose Us</h2>
            <ul>
                <li>Easy-to-use</li>
                <li>Luxurious Grooming Experience</li>
                <li>Customer-Centric Approach</li>
                <li>Premium Quality Assurance</li>
            </ul>
            <div className="brochure-btn">
                <a href="../Royal_Pets/Royal Pet Catalogue New 1.pdf" download="Royal Pets Catalogue"><button className="btn-about"><i className="fa fa-download"></i> Download our brochure</button></a>
            </div>
            <div className="container">
                <div className="box">
                    <p><li>To enrich the bond between pets and their owners by providing premium grooming and training products that promote their well-being and happiness.</li></p>
                    <h1>MISSION</h1>
                    <div className='circle'>
                        <img src="../images/card-img-1.jpg" alt="pet_img" />
                    </div>
                </div>
                <div className="box">
                    <p><li>Through our commitment to excellence, we aim to set the standard for quality and care in the pet industry.</li></p>
                    <h1>VISSION</h1>
                    <div className='circle'>
                        <img src="./images/card-img-3.jpg" alt="" />
                    </div>
                </div>
                <div className="box">
                    <p><li>To continuously innovate and expand our product line, ensuring the highest quality standards and meeting the evolving needs of pets and their owners.</li></p>
                    <h1>GOAL</h1>
                    <div className='circle'>
                        <img src="./images/card-img-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default AboutUs;