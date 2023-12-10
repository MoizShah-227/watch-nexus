import React from 'react'
import './Header.css';
import hero from '../imgs/hero.svg'
const Header = () => {
  return (
    <div className='hero'>
        <div className='container'>
        <div className='row'>
        <div className='left col-lg-6 px-5'>
        <div className='heading'>
          <h1>Discover<br/>Most Suitable<br/>Watches</h1> 
        </div>
        <div className='para'>
        <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
        </div>
        
        <div className='search'>
        <input type='text' placeholder='Find best brands'/>
        <button className='btn '>
          Search
        </button>
        </div>
        </div>

        <div className='right col-lg-6'>
        <img src={hero} width={450}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header
