import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <img src="./images/Frame_8.png" alt="" />
        <div className="footer-section">
            <div className="section-1 navigation">
                <h3>Navigation</h3>
                <ul>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Products</li></a>
                    <a href=""><li>Contact Us</li></a>
                </ul>
            </div>
            <div className="section-1">
                <h3>Store Policies</h3>
                <ul>
                    <a href=""><li>Shipping Policy</li></a>
                    <a href=""><li>Refund Policy</li></a>
                    <a href=""><li>Privacy Policy</li></a>
                    <a href=""><li>Terms of Use</li></a>
                </ul>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117970.47837463809!2d69.96491757820581!3d22.482507863269273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395715f746822cbf%3A0x1b1c0f7abe5e5711!2sMp%20Shah%2C%20C44%2C%20Saru%20Section%20Rd%2C%20Industrial%20Estate%2C%20Jamnagar%2C%20Gujarat%20361002!3m2!1d22.4825391!2d70.04731989999999!5e0!3m2!1sen!2sin!4v1703081685834!5m2!1sen!2sin"  style={{border:"5px solid gray"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="section-1">
                <h3 className="contact-txt">Contact</h3>
                <p><i className="fa-solid fa-location-dot"></i><span> C-44, M. P. Shah Industrial Estate,<br/> Saru Saction Road Jamnagar 361 002, <br />Gujarat, 361002.</span></p>
                <p><i className="fa-solid fa-envelope"></i><span>marketing@toileteries.net</span></p>
                <p><i className="fa-solid fa-phone"></i><span>+91 9328812560</span></p>

                <div className="social-icons">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <hr />
        <p className="coppyright">Copyright © 2024 M.K Incorporation. All Rights Reserved</p>
    </footer>
  )
}

export default Footer;