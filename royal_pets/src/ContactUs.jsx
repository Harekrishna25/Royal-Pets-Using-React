import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
        <div className="contact-container">
        <div class="contact-heading">
            <h1>ContactUs</h1>
            <p>Interested in our services or need advice? Then please get in touch or just drop a note and we’ll be glad to help.</p>
        </div>
            <div className="contact-section">
                <div className="left-section">
                    <h2>Get in touch</h2>
                    <p>We are here for you! How can we help?</p>
                    <br />
                    <br />
                    <form action="https://formspree.io/f/mgegezav" method="post">
                    <label htmlFor="">Name</label> <br />
                    <input type="text" placeholder='Enter your name' name='username' required autoComplete='off'/> <br /> <br />
                    <label htmlFor="">Email</label> <br />
                    <input type="email" name='Email' placeholder='Enter your email' required autoComplete='off'/> <br /> <br />
                    <label htmlFor="">Message</label> <br />
                    <textarea name="message" id="" cols="45" rows="7" placeholder='Type your message...' required autoComplete='off'></textarea> <br /> <br />
                    <button type='submit' value="send">Submit</button>
                    </form>
                </div>
                <div className="right-section">
                    <img src="../images/contact_img/side_img.png" alt="side image" />
                    <br />
                    <div className="text">
                        <p><i class="fa-solid fa-phone-volume"></i> +91 9328812560</p>
                        <p><i class="fa-solid fa-envelope"></i> marketing@toileteries.net</p>
                    </div>
                </div>
            </div>
            <div class="contents">
            <div class="contact-box">
                <h2>FAQs</h2>
                <p>Can't find what you're looking for? Connect with us for personalized support.</p>
                <img src="../images/contact_img/faq.png" alt="faq" />
                <h4>Help Center <i class="fa-solid fa-right-long"></i></h4>
            </div>
            <div class="contact-box">
                <h2>Headquarters</h2>
                <p>C-44,M.P.Shah Industrial Estate,Saru Section Road,Jamnagar,Gujarat-361002.IN</p>
                <img src="../images/contact_img/location.png" alt="" />
                <h4>Find Location <i class="fa-solid fa-right-long"></i></h4>
            </div>
            <div class="contact-box">
                <h2>Working hours</h2>
                <p>Open Monday to Saturday from <br />9:30 AM - 7:00 PM</p>
                <img src="../images/contact_img/clock.png" alt="" />
                <h4>Help Center <i class="fa-solid fa-right-long"></i></h4>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default ContactUs;