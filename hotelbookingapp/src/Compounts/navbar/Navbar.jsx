import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <>
    <h1>Navbar</h1>
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>lamabooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>

                
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar