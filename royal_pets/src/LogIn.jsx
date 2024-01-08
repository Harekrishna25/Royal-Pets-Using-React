import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './LogIn.css';
const LogIn = () => {
  return (
    <div>
        <div className="login-bg">
          <div className="bg-wrap">
            <div className="login-container">
              <div className="login-left">
                <h3>Login</h3>
                <p>Doesn't have an account yet? <a href="">Sign Up</a></p>
                <form action="">
                  <label htmlFor="Email">Email Address :</label> <br />
                  <input type="email" placeholder='Enter your email' required/> <br />
                  <label htmlFor="Email">Password :</label> <br />
                  <input type="password" placeholder='Enter your password' required/> <br />                  
                  <a href="">Forgot Password?</a> <br />
                  <input type="checkbox" id='check-box'/> <span id='remind'>Remember me</span> <br />
                  <div className="log-btn">
                    <button id='login-btn'type='submit'>LOG IN</button>
                  </div>
                  <div className="login-with">
                    <div className='oneline'>
                      <hr />
                    </div>
                    <div className='oneline'>
                      <p>Or login with</p>
                    </div>
                    <div className='oneline'>
                      <hr />
                    </div>
                  </div>
                  <div className="g-btn">
                    <button> <img src="../images/google-logo.png" alt="" /> Google </button>
                  </div>
                </form>
                
              </div>
              <div className="login-right">
              <Link to="/"><p>{"<<"}Back to Home</p></Link>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn;