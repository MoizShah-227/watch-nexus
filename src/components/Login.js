import React from 'react'
import './Login.css';
import {Link,Router } from 'react-router-dom';


const Login = () => {
  return (
    <div class="login-bg">
      <div className='contain-login'>
      <Link to ="/"><h3><span>N</span>EXUS</h3></Link>
    <div class="login-form">
    <form>
      <label for="username">Username:</label>

      
      <input type="text" id="username" name="username"/>

      
      <label for="password">Password:</label>

      
      <input type="password" id="password" name="password"/>
    
      <button type="submit">Login</button>
   </form>
  </div>
  <div class="signup-option">
    <p>Don't have an account? <a href="#">Sign up</a></p>
  </div>
  
      </div>

  </div>
    
  )
}

export default Login
