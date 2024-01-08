import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({handleShow}) => {
    const sideNav = document.getElementsByClassName("side-nav");
    const menuIcon = document.getElementsByClassName("menu-icon");
    const navInctive = document.getElementsByClassName("nav-inactive");

    const [show , setShow] =useState(false);
  
  return (
    <div>
      <div className="panel-header">
        <p>Customer Support: +91 9328812560 | Time: 9:30AM to 7:00 PM</p>
      </div>
      <div className="header">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src="./images/Royal Pets Logo-1.png" alt="Royal Pets Logo" />
            </Link>
          </div>
          <div className="search-section">
            <input type="search" placeholder="Search.." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="right-nav">
            <div className="icons">
              <Link to="/cartpage">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link to="/wishlist" >
                <i class="fa-solid fa-heart"></i>
              </Link>
              <Link to="/login">
                <i class="fa-solid fa-user"></i>
              </Link>
            </div>
            <div className="icone-name">
              <p>Cart</p>
              <p>Wishlist</p>
              <p>profile</p>
            </div>
          </div>
          <div className="menu-icon">
           <i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
          </div>
        </div>
      </div>
      <div className="page-nav">
        <div className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/product_page">PRODUCT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className= { show ? "side-nav" : "nav-active"}>
        <div className="profile">
        <Link to="/login"><i class="fa-solid fa-user"></i></Link>
          <p>Profile</p>
        </div>
        <ul>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/about"><li>ABOUT</li></Link>
        <Link to="/product_page"><li>PRODUCT</li></Link>
        <Link to="/contact"><li>CONTACT</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
