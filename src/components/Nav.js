import React from 'react'
import './Nav.css';
const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className='container'>
        <div className='contain-nav pt-4'>
            <div className='logo'>
                <h3><span>N</span>EXUS</h3>
            </div>
            <div className='menu'>
                <ul >
                    <li><a>Home</a></li>
                    <li><a>Recent Products</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className='feature d-flex'>
                <ul>
                <li><a><i class="bi bi-person-fill"></i></a></li>
                <li><a><i class="bi bi-cart"></i></a> </li>
                </ul>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav