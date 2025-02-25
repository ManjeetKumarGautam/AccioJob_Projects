import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2 className='logo'>RSF</h2>
            <div className='nav-links'>
                <Link to="/" className='nav-link'>Sign Up</Link>
                <Link to="/profile" className='nav-link'>Profile</Link>
            </div>
        </nav>
    )
}

export default Navbar