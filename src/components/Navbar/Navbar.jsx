import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <h2 className="navbar-name">Site Logo</h2>
            <input type="search" placeholder='Search Product' className="navbar-input" />
        </div>
    </div>
  )
}

export default Navbar