import React from 'react'
import './Nav.css';

import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-bar'>
    <div className='container'>
      <div className='contain-nav pt-4'>
          <div className='logo'>
              <Link to ="/"><h3><span>N</span>EXUS</h3></Link>
          </div>
          <div className='menu'>
              <ul >
                  <li><Link to="/">Home</Link></li>
                  <li><Link to =''>Recent Products</Link></li>
                  <li><Link to=''>Contact</Link></li>
                  <li><Link to=''>About</Link></li>
              </ul>
          </div>
          <div className='feature d-flex'>
              <ul>
              <li><Link to="login"><i class="bi bi-person-fill"></i></Link></li>
              <li><Link to=''><i class="bi bi-cart"></i></Link></li>
              </ul>

          </div>
      </div>
    </div>
  </div>
    )
}

export default Nav